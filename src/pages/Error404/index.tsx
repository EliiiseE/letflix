import Layout from 'components/Layout';
import Navbar from 'components/Navbar';
import { ReactElement, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Error404.module.sass';

const Error404 = (): ReactElement => {
  // Always return to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Netflix - Error404</title>
        <meta name="description" content="Description" />
      </Helmet>

      <div className={styles.container}>
        <h5>Error404</h5>
        <div className={styles.txt}>
          <p className={styles.question}>Vous chercher votre chemin ?</p>
          <p>
            Désolé, nous n'avons pas trouvé cette page. Un vaste choix de programmes vous attend sur
            la page d'accueil.
          </p>
          <a href="/" className={styles.button}>
            Accueil
          </a>
        </div>
        <Navbar />
      </div>
    </Layout>
  );
};

export default Error404;
