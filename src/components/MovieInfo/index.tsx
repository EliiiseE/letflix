import styles from './MovieInfo.module.sass';
import Navbar from 'components/Navbar';
import ButtonPlay from 'components/ButtonPlay';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { ReactElement } from 'react';

type PropsType = {
  iconLink: string;
  image: string;
  name: string;
  year: number;
  age: number;
  duration: string;
};

const MovieInfo = (props: PropsType): ReactElement => {
  const { iconLink, image, name, year, age, duration } = props;

  return (
    <div className={styles.container}>
      <Link to={iconLink} className={styles.return}>
        <Icon icon="akar-icons:chevron-left" />
      </Link>
      <div className={styles.all_information}>
        <div className={styles.information_top}>
          <img src={image} className={styles.image} />
          <div className={styles.information_top_text}>
            <h2>{name}</h2>
            <p>{year}</p>
            <p>{age}+</p>
            <p>{duration}</p>
          </div>
        </div>
        <ButtonPlay large />
        <div className={styles.description}>
          <p>
            Em um mundo futurista, seres humanos convivem em harmônia com seres fantásticos, como
            fadas e ogros. Mesmo nesse cenário infrações da lei acontecem e um policial humano (Will
            Smith) especializado em crimes mágicos é obrigado a trabalhar junto com um orc (Joel
            Edgerton) para evitar que uma poderosa arma caia nas mãos erradas.
          </p>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default MovieInfo;
