import {
  getTopRatedMovies,
  getMoviesFromGenre,
  getAllGenres,
  getPopularMovies,
  AllMoviesType,
  getMovie,
  getSimilarMovies,
} from 'api/tmdb';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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

type DetailsMovieType = {
  image: string;
  name: string;
  date: string;
  runtime: number;
  description: string;
};

type SimilarMovieType = {
  image: string;
  id: number;
};

type UseHomeDataReturnType = {
  topRatedMovies: MovieType[];
  popularMovie?: PopularMovieType;
  genreMovies: GenreMovieType[];
  movie: DetailsMovieType | void;
  similarMovies: SimilarMovieType[];
};

const useData = (): UseHomeDataReturnType => {
  const [topRatedMovies, setTopRatedMovies] = useState<MovieType[]>([]);
  const [popularMovie, setPopularMovie] = useState<PopularMovieType>();
  const [genreMovies, setGenreMovies] = useState<Array<GenreMovieType>>([]);
  const [movie, setMovie] = useState<DetailsMovieType>();
  const navigate = useNavigate();
  const { id } = useParams();
  const [similarMovies, setSimilarMovies] = useState<Array<SimilarMovieType>>([]);

  // useEffect with [] to use it only once at the beginning
  useEffect(() => {
    // Allows to get the img and id of each top rated movies
    getTopRatedMovies().then((response) => {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const movies: MovieType[] = response.results.map((movie) => {
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
          // eslint-disable-next-line @typescript-eslint/no-shadow
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
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const movie = response.results[0];
      setPopularMovie({
        image: movie.backdrop_path,
        name: movie.title,
        id: movie.id,
      });
    });
  }, []);

  useEffect(() => {
    if (id) {
      getMovie(id).then((response) => {
        // Go to 404 page if there is no movie
        if (response?.success === false) {
          return navigate('/404');
        }

        // Get the details for the description
        setMovie({
          image: response.poster_path,
          name: response.title,
          date: response.release_date,
          runtime: response.runtime,
          description: response.overview,
        });
        // Return to empty array every time because react doesn't reload fully the page
        setSimilarMovies([]);
        getSimilarMovies(id).then((res) => {
          // eslint-disable-next-line @typescript-eslint/no-shadow
          const similarMovies = res.results.map((similarMovie) => {
            return {
              image: similarMovie.poster_path,
              id: similarMovie.id,
            };
          });
          setSimilarMovies(similarMovies);
        });
      });
    }
  }, [id]);

  return {
    topRatedMovies,
    popularMovie,
    genreMovies,
    movie,
    similarMovies,
  };
};

export default useData;
