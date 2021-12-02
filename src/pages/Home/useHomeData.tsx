import {
  getTopRatedMovies,
  getMoviesFromGenre,
  getAllGenres,
  getPopularMovies,
  AllMoviesType,
} from 'api/tmdb';
import { useEffect, useState } from 'react';

type MovieType = {
  image: string;
  id: number;
};

type PopularMovieType = {
  image: string;
  name: string;
  id: number;
};

type GenreMovieType = {
  title: string;
  movies: MovieType[];
};

type UseHomeDataReturnType = {
  topRatedMovies: MovieType[];
  popularMovie?: PopularMovieType;
  genreMovies: GenreMovieType[];
};

const useHomeData = (): UseHomeDataReturnType => {
  const [topRatedMovies, setTopRatedMovies] = useState<Array<MovieType>>([]);
  const [popularMovie, setPopularMovie] = useState<PopularMovieType>();
  const [genreMovies, setGenreMovies] = useState<Array<GenreMovieType>>([]);

  // useEffect with [] to use it only once at the beginning
  useEffect(() => {
    // Allows to get the img and id of each top rated movies
    getTopRatedMovies().then((response) => {
      const movies: Array<MovieType> = response.results.map((movie) => {
        return {
          image: movie.poster_path,
          id: movie.id,
        };
      });

      setTopRatedMovies(movies);
    });

    // Allows to get all genres of movies
    getAllGenres().then((response) => {
      const { genres } = response;

      const requestPromises: Array<Promise<AllMoviesType>> = genres.map((genre) => {
        return getMoviesFromGenre(genre.id);
      });

      Promise.all(requestPromises).then((moviesResponses) => {
        const genresState: GenreMovieType[] = genres.map((genre, index) => ({
          title: genre.name,
          movies: moviesResponses[index].results.map((movie) => ({
            image: movie.poster_path,
            id: movie.id,
          })),
        }));

        setGenreMovies(genresState);
      });
    });

    // Allows to get the first popular movie
    getPopularMovies().then((response) => {
      const movie = response.results[0];
      setPopularMovie({
        image: movie.backdrop_path,
        name: movie.title,
        id: movie.id,
      });
    });
  }, []);

  return {
    topRatedMovies,
    popularMovie,
    genreMovies,
  };
};

export default useHomeData;
