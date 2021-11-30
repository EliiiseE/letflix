import Layout from 'components/Layout';
import Navbar from 'components/Navbar';
import { ReactElement, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Favorite.module.sass';

const Favorite = (): ReactElement => {
  // Always return to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Netflix - Favorite</title>
        <meta name="description" content="Description" />
      </Helmet>

      <div className={styles.container}>
        <h1>Ma liste</h1>
        <h3>Vous avez ajouté:</h3>
        <div className={styles.image}>
          <img src="images/bright-2.png" className={styles.image} />
          <img src="images/image 2.png" className={styles.image} />
          <img src="images/image 3.png" className={styles.image} />

          <img src="images/bright-2.png" className={styles.image} />
          <img src="images/image 2.png" className={styles.image} />
          <img src="images/image 3.png" className={styles.image} />

          <img src="images/bright-2.png" className={styles.image} />
          <img src="images/image 2.png" className={styles.image} />
          <img src="images/image 3.png" className={styles.image} />

          <img src="images/bright-2.png" className={styles.image} />
          <img src="images/image 2.png" className={styles.image} />
          <img src="images/image 3.png" className={styles.image} />
        </div>
        <Navbar />
      </div>
    </Layout>
  );
};

export default Favorite;
