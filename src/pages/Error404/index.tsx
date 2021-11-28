import Layout from 'components/Layout';
import { ReactElement, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Error404.module.sass';

const Error404 = (): ReactElement => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Error404 page</title>
        <meta name="description" content="Description" />
      </Helmet>

      <div className={styles.container}>
        <p>Page Error404</p>
      </div>
    </Layout>
  );
};

export default Error404;
