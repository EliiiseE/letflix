import { ReactElement, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from './Log.module.sass';

const Log = (): ReactElement => {
  // Always return to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Letflix | Login </title>
        <meta name="description" content="Description" />
      </Helmet>

      <div className={styles.container}>
        <img src="images/logo-desktop.png" alt="logo" />
        <div className={styles.form}>
          <input type="email" placeholder="E-mail ou téléphone" />
          <input type="password" placeholder="Mot de passe" />
          <Link className={styles.button} to="/home">
            Entrer
          </Link>
          <Link className={styles.sign} to="/home">
            Se connecter anonymement
          </Link>
        </div>
      </div>
    </>
  );
};

export default Log;
