import styles from './Home.module.sass';
import MovieList from 'components/MovieList';
import Layout from 'components/Layout';
import Navbar from 'components/Navbar';
import ButtonPlay from 'components/ButtonPlay';
import TextIcon from 'components/TextIcon';
import { ReactElement, useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Video from 'components/Video';
import useData from 'hooks/useData';
import DataContext from 'context/DataContext';
import Loader from 'components/Loader/index';

const Home = (): ReactElement => {
  // Always return to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { topRatedMovies, popularMovie, genreMovies } = useData();
  const { favoriteMovies, setFavoriteMovies } = useContext(DataContext);

  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [videoIsPlaying, setVideoIsPlaying] = useState<boolean>(false);
  const [urlVideo, setUrlVideo] = useState<string>('');

  const handleClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  useEffect(() => {
    const favoriteMovie = favoriteMovies.filter((f) => f.id === popularMovie?.id);
    if (favoriteMovie.length > 0) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoriteMovies, popularMovie]);

  const handleFavoriteClick = (isFav: boolean) => {
    if (!isFav) {
      // TODO: Change this type
      setFavoriteMovies((movies: unknown[]) =>
        movies.concat({
          image: popularMovie?.image,
          id: popularMovie?.id,
        }),
      );
    } else {
      // To let only every favorite except this one
      setFavoriteMovies(favoriteMovies.filter((f) => f.id !== popularMovie?.id));
    }
  };

  useEffect(() => {
    if (menuIsOpen || videoIsPlaying) {
      document.body.style.height = '100vh';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.height = 'auto';
      document.body.style.overflow = 'auto';
    }
  }, [menuIsOpen, videoIsPlaying]);

  const handlePlayVideo = (url: string) => {
    setUrlVideo(url);
    setVideoIsPlaying(true);
  };

  return (
    <Layout>
      <Helmet>
        <title>Letflix</title>
        <meta name="description" content="Description" />
      </Helmet>
      <Loader />
      <div className={styles.container}>
        <Video
          isPlaying={videoIsPlaying}
          disableVideo={() => setVideoIsPlaying(false)}
          url={urlVideo}
        />
        <div className={styles.logoandCateg}>
          <img src="images/logo-mobile.png"></img>
          {/* <Loader /> */}
          <p className={styles.categoryTitle} onClick={handleClick}>
            Catégorie
            <Icon icon="bx:bxs-down-arrow" className={styles.icon} />
          </p>
        </div>
        {/* To show the menu only if menuIsOpen === true */}
        {menuIsOpen && (
          <div className={styles.categoryMenu} onClick={handleClick}>
            <Icon icon="akar-icons:cross" className={styles.cross} />
            {genreMovies.map((genre, index) => (
              <a href={`/home#${index}`} onClick={handleClick} className={styles.ancre} key={index}>
                {genre.title}
              </a>
            ))}
          </div>
        )}
        {popularMovie && (
          <>
            <div>
              {/* Url required for getting the img */}
              <img
                src={`https://image.tmdb.org/t/p/original${popularMovie.image}`}
                className={styles.movieImg}
              ></img>
              <p className={styles.movieTxt}>{popularMovie.name}</p>
            </div>
            <ul className={styles.threeElement}>
              <li className={styles.ContaintNav} onClick={() => handleFavoriteClick(isFavorite)}>
                <TextIcon
                  titleName="Ajouter"
                  icon={isFavorite ? 'ci:heart-fill' : 'ci:heart-outline'}
                />
              </li>
              <li>
                {/* popularMovie.urlVideo */}
                <div onClick={() => handlePlayVideo('videos/playMovie.mp4')}>
                  <ButtonPlay />
                </div>
              </li>
              <li className={styles.ContaintNav}>
                {/* Allows to change the url w/ the correct ID movie */}
                <Link to={`/movie/${popularMovie.id}`}>
                  <TextIcon titleName="Informations" icon="akar-icons:info" />
                </Link>
              </li>
            </ul>
          </>
        )}

        <MovieList movies={topRatedMovies} title="Les mieux notés" />
        {genreMovies.map((genre, index) => (
          <div id={index.toString()} key={index}>
            <MovieList movies={genre.movies} title={genre.title} />
          </div>
        ))}
        <Navbar />
      </div>
    </Layout>
  );
};

export default Home;
