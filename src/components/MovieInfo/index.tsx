import styles from './MovieInfo.module.sass';
import Navbar from 'components/Navbar';
import ButtonPlay from 'components/ButtonPlay';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { ReactElement } from 'react';

type PropsType = {
  image: string;
  name: string;
  date: string;
  runtime: number;
  description: string;
};

const MovieInfo = (props: PropsType): ReactElement => {
  const { image, name, date, runtime, description } = props;

  const runtimeHours = Math.floor(runtime / 60);
  const runtimeMinutes = runtime % 60;

  const year = new Date(date).getFullYear();

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.return}>
        <Icon icon="akar-icons:chevron-left" />
      </Link>
      <div className={styles.all_information}>
        <div className={styles.information_top}>
          <img src={`https://image.tmdb.org/t/p/original${image}`} className={styles.image} />
          <div className={styles.information_top_text}>
            <h2>{name}</h2>
            <p>{year}</p>
            <p>{`${runtimeHours > 0 ? runtimeHours + 'h' : ''} ${runtimeMinutes}min`}</p>
          </div>
        </div>
        <ButtonPlay large />
        <div className={styles.description}>
          <p>{description}</p>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default MovieInfo;
