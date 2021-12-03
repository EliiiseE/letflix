import styles from './MovieInfo.module.sass';
import Navbar from 'components/Navbar';
import ButtonPlay from 'components/ButtonPlay';
import { Icon } from '@iconify/react';
import { ReactElement, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from 'context/DataContext';

type PropsType = {
  image: string;
  name: string;
  date: string;
  runtime: number;
  description: string;
  id: number;
  playVideo: () => void;
};

const MovieInfo = (props: PropsType): ReactElement => {
  const navigate = useNavigate();
  /* Retrieve the object's attribut */
  const { image, name, date, runtime, description, playVideo, id } = props;
  const { favoriteMovies, setFavoriteMovies } = useContext(DataContext);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  //Retrieve hours
  const runtimeHours = Math.floor(runtime / 60);
  //Retrieve minutes
  const runtimeMinutes = runtime % 60;
  //Only retrieve the year
  const year = new Date(date).getFullYear();

  useEffect(() => {
    // Add favorite movie as a favmovie
    const favoriteMovie = favoriteMovies.filter((f) => f.id === id);
    if (favoriteMovie.length > 0) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoriteMovies, id]);

  const handleFavoriteClick = (isFav: boolean) => {
    if (!isFav) {
      setFavoriteMovies((movies: unknown[]) =>
        movies.concat({
          image: image,
          id: id,
        }),
      );
    } else {
      // To let only every favorite except this one
      setFavoriteMovies(favoriteMovies.filter((f) => f.id !== id));
    }
  };

  return (
    <div className={styles.container}>
      <div onClick={() => navigate(-1)} className={styles.return}>
        <Icon icon="akar-icons:chevron-left" />
      </div>
      <div className={styles.all_information}>
        <div className={styles.information_top}>
          {/* Url required for getting the img */}
          <img src={`https://image.tmdb.org/t/p/original${image}`} className={styles.image} />
          <div className={styles.information_top_text}>
            <h2>{name}</h2>
            <p>{year}</p>
            {/* Allows to remove the 0 if the duration is lower than 60mn */}
            <p>{`${runtimeHours > 0 ? runtimeHours + 'h' : ''} ${runtimeMinutes}min`}</p>

            <button onClick={() => handleFavoriteClick(isFavorite)} type="button">
              <div className={styles.iconTxt}>
                <Icon icon={isFavorite ? 'ci:heart-fill' : 'ci:heart-outline'}></Icon>
                <p>Ajouter</p>
              </div>
            </button>
          </div>
        </div>
        <div onClick={playVideo}>
          <ButtonPlay large />
        </div>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default MovieInfo;
