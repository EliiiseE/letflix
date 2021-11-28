import styles from './Home.module.sass';
import MovieList from 'components/MovieList';
import Layout from 'components/Layout';
import Navbar from 'components/Navbar';
import ButtonPlay from 'components/ButtonPlay';
import TextIcon from 'components/TextIcon';
import { ReactElement, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { getTopRatedMovies, getAllGenres } from 'api/tmdb';

type MovieType = {
  image: string;
  link: string;
};

const Home = (): ReactElement => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [topRatedMovies, setTopRatedMovies] = useState<Array<MovieType>>([]);

  // useEffect with [] to use it only once at the beginning
  useEffect(() => {
    getAllGenres();
    getTopRatedMovies().then((response) => {
      response.results.map((movie: MovieTMDB) => {
        setTopRatedMovies((movies) =>
          movies.concat({
            image: movie.poster_path,
            link: `/movie/${movie.id}`,
          }),
        );
      });
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Home page</title>
        <meta name="description" content="Description" />
      </Helmet>

      <div className={styles.container}>
        <div className={styles.logoandCateg}>
          <img src="images/Netflix.png"></img>
          <a style={{ marginLeft: 30 }}>Catégorie</a>
        </div>
        <div>
          <img src="images/witcher.jpg" className={styles.witcherImg}></img>
          <p className={styles.txtWitcher}>The Witcher</p>
        </div>

        <ul className={styles.threeElement}>
          <li className={styles.ContaintNav}>
            <TextIcon titleName="Ajouter" icon="icon-park-outline:like" />
          </li>
          <li>
            <ButtonPlay />
          </li>
          <li className={styles.ContaintNav}>
            <TextIcon titleName="Informations" icon="akar-icons:info" />
          </li>
        </ul>

        {/* <p>Page Home</p> */}
        <MovieList movies={topRatedMovies} title="Films" />
        <MovieList movies={topRatedMovies} title="Séries" />
        <Navbar />
      </div>
    </Layout>
  );
};

export default Home;
