import styles from './Home.module.sass';
import MovieList from 'components/MovieList';
import Layout from 'components/Layout';
import Navbar from 'components/Navbar';
import ButtonPlay from 'components/ButtonPlay';
import TextIcon from 'components/TextIcon';
import { ReactElement, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { getTopRatedMovies, getMoviesFromGenre, getAllGenres, getPopularMovies } from 'api/tmdb';
import { Link } from 'react-router-dom';

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

const Home = (): ReactElement => {
  // Always return to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [topRatedMovies, setTopRatedMovies] = useState<Array<MovieType>>([]);
  const [popularMovie, setPopularMovie] = useState<PopularMovieType>();
  const [genreMovies, setGenreMovies] = useState<Array<GenreMovieType>>([]);
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  // useEffect with [] to use it only once at the beginning
  useEffect(() => {
    // Allows to get the img and id of each top rated movies
    getTopRatedMovies().then((response) => {
      response.results.map((movie) => {
        setTopRatedMovies((movies) =>
          movies.concat({
            image: movie.poster_path,
            id: movie.id,
          }),
        );
      });
    });

    // Allows to get all genres of movies
    getAllGenres().then((response) => {
      const { genres } = response;
      genres.map((genre) => {
        const { id, name } = genre;
        getMoviesFromGenre(id).then((res) => {
          const finalMovies: MovieType[] = [];
          // Allows to get the img and id of each diff movie genres
          res.results.map((movie) => {
            finalMovies.push({
              image: movie.poster_path,
              id: movie.id,
            });
          });
          setGenreMovies((movies) =>
            movies.concat({
              title: name,
              movies: finalMovies,
            }),
          );
        });
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

  return (
    <Layout>
      <Helmet>
        <title>Letflix</title>
        <meta name="description" content="Description" />
      </Helmet>

      <div className={styles.container}>
        <div className={styles.logoandCateg}>
          <img src="images/logo-mobile.png"></img>
          <p style={{ marginLeft: 30 }} onClick={() => setMenuIsOpen(true)}>
            Catégorie
          </p>
        </div>
        {/* To show the menu only if menuIsOpen === true */}
        {menuIsOpen && (
          <div className={styles.categoryMenu}>
            {genreMovies.map((genre, index) => (
              <a
                href={`/home#${index.toString()}`}
                onClick={() => setMenuIsOpen(false)}
                className={styles.ancre}
                key={index}
              >
                {genre.title}
              </a>
            ))}
          </div>
        )}
        {popularMovie && (
          <>
            <div>
              {/* Url required for getting the img */}
              <img
                src={`https://image.tmdb.org/t/p/original${popularMovie.image}`}
                className={styles.movieImg}
              ></img>
              <p className={styles.movieTxt}>{popularMovie.name}</p>
            </div>
            <ul className={styles.threeElement}>
              <li className={styles.ContaintNav}>
                <TextIcon titleName="Ajouter" icon="icon-park-outline:like" />
              </li>
              <li>
                <ButtonPlay />
              </li>
              <li className={styles.ContaintNav}>
                {/* Allows to change the url w/ the correct ID movie */}
                <Link to={`/movie/${popularMovie.id}`}>
                  <TextIcon titleName="Informations" icon="akar-icons:info" />
                </Link>
              </li>
            </ul>
          </>
        )}

        <MovieList movies={topRatedMovies} title="Les mieux notés" />
        {genreMovies.map((genre, index) => (
          <div id={index.toString()} key={index}>
            <MovieList movies={genre.movies} title={genre.title} />
          </div>
        ))}
        <Navbar />
      </div>
    </Layout>
  );
};

export default Home;
