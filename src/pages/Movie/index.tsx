import styles from './Movie.module.sass';
import MovieInfo from 'components/MovieInfo';
import MovieList from 'components/MovieList';
import Layout from 'components/Layout';
import { ReactElement, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { getMovie, getSimilarMovies } from 'api/tmdb';
import { useParams, useNavigate } from 'react-router-dom';

type MovieType = {
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

const Movie = (): ReactElement => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieType>();
  const [similarMovies, setSimilarMovies] = useState<Array<SimilarMovieType>>([]);

  useEffect(() => {
    getMovie(id).then((response) => {
      // Go to 404 page if there is no movie
      if (response?.success === false) {
        return navigate('/404');
      }

      setMovie({
        image: response.poster_path,
        name: response.title,
        date: response.release_date,
        runtime: response.runtime,
        description: response.overview,
      });
    });

    // Return to empty array every time because react doesn't reload fully the page
    setSimilarMovies([]);
    getSimilarMovies(id).then((response) => {
      response.results.map((similarMovie) => {
        setSimilarMovies((movies) =>
          movies.concat({
            image: similarMovie.poster_path,
            id: similarMovie.id,
          }),
        );
      });
    });
  }, [id, navigate]);

  return (
    <Layout>
      <Helmet>
        <title>{`Netflix | ${movie?.name}`}</title>
        <meta name="description" content={movie?.description} />
      </Helmet>

      <div className={styles.container}>
        {movie && (
          <MovieInfo
            image={movie.image}
            name={movie.name}
            date={movie.date}
            runtime={movie.runtime}
            description={movie.description}
          />
        )}

        <MovieList movies={similarMovies} title="Films en lien" />
      </div>
    </Layout>
  );
};

export default Movie;
