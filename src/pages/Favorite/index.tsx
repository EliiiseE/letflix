import Layout from 'components/Layout';
import Navbar from 'components/Navbar';
import { ReactElement, useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from './Favorite.module.sass';
import DataContext from 'context/DataContext';

const Favorite = (): ReactElement => {
  const { favoriteMovies } = useContext(DataContext);

  // Always return to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>{`Letflix - ${favoriteMovies.length} favorite${
          favoriteMovies.length > 1 ? 's' : ''
        }`}</title>
        <meta name="description" content="Description" />
      </Helmet>

      <div className={styles.container}>
        <h1>Ma liste</h1>
        <h3>Vous avez ajouté:</h3>
        <div className={styles.image}>
          {favoriteMovies.map((favMovies, index) => (
            <div key={index}>
              <Link to={`/movie/${favMovies.id}`} className={styles.link}>
                {/* Url required for getting the img */}
                <img
                  src={`https://image.tmdb.org/t/p/original${favMovies.image}`}
                  className={styles.image}
                />
              </Link>
            </div>
          ))}
        </div>
        <Navbar />
      </div>
    </Layout>
  );
};

export default Favorite;
