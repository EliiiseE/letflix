import Layout from 'components/Layout';
import { ReactElement, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Search.module.sass';
import { Icon } from '@iconify/react';

const Search = (): ReactElement => {
  // Always return to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Letflix | Search</title>
        <meta name="description" content="Description" />
      </Helmet>
      <div className={styles.container}>
        <input
          className={styles.inputName}
          type="text"
          placeholder="Quel Film ?"
          src="public/flavicon1.ico"
        ></input>
        <Icon className={styles.search} icon="akar-icons:search" />
      </div>
    </Layout>
  );
};

export default Search;
