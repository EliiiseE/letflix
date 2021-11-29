import styles from './Movie.module.sass';
import MovieInfo from 'components/MovieInfo';
// import MovieList from 'components/MovieList';
import Layout from 'components/Layout';
import { ReactElement, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { getMovie } from 'api/tmdb';
import { useParams, useNavigate } from 'react-router-dom';

type MovieType = {
  image: string;
  name: string;
  date: string;
  runtime: number;
  description: string;
};

const Movie = (): ReactElement => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieType>();

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
  }, [id, navigate]);

  return (
    <Layout>
      <Helmet>
        <title>Movie page</title>
        <meta name="description" content="Description" />
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

        {/* <MovieList movies={movies} title="Films en lien" /> */}
      </div>
    </Layout>
  );
};

export default Movie;
