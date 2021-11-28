import styles from './Movie.module.sass';
import MovieInfo from 'components/MovieInfo';
import MovieList from 'components/MovieList';
import Layout from 'components/Layout';
import { ReactElement, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const Movie = (): ReactElement => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const movies = [
    { image: 'images/bright.png', link: '/movie' },
    { image: 'images/bright.png', link: '/movie' },
    { image: 'images/bright.png', link: '/movie' },
    { image: 'images/bright.png', link: '/movie' },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Movie page</title>
        <meta name="description" content="Description" />
      </Helmet>

      <div className={styles.container}>
        <MovieInfo
          iconLink="/"
          image="images/bright.png"
          name="Titanic"
          year={1669}
          age={16}
          duration="1h24"
        />
        <MovieList movies={movies} title="Films en lien" />
      </div>
    </Layout>
  );
};

export default Movie;
