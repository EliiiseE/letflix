import Layout from 'components/Layout';
import { ReactElement, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Search.module.sass';

const Search = (): ReactElement => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Netflix | Search</title>
        <meta name="description" content="Description" />
      </Helmet>
      <div className={styles.container}>
        <h1>salut</h1>
        <input className={styles.inputName} type="text" placeholder="film"></input>
        {/* <button>Ok</button> */}
      </div>
    </Layout>
  );
};

export default Search;
