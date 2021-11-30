import Navbar from 'components/Navbar';
import { ReactElement, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from './Error404.module.sass';

const Error404 = (): ReactElement => {
  // Always return to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Letflix - Error404</title>
        <meta name="description" content="Description" />
      </Helmet>

      <div className={styles.container}>
        <h5>Error 404</h5>
        <div className={styles.text__container}>
          <p className={styles.question}>Vous chercher votre chemin ?</p>
          <p className={styles.text}>
            Désolé, nous n'avons pas trouvé cette page. Un vaste choix de programmes vous attend sur
            la page d'accueil.
          </p>
          <Link to="/" className={styles.button}>
            Accueil
          </Link>
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default Error404;
