import styles from './MovieList.module.sass';
import { Link } from 'react-router-dom';
import { ReactElement } from 'react';

type PropsType = {
  movies: MovieType[];
  title: string;
};

type MovieType = {
  image: string;
  link: string;
};

const MovieList = (props: PropsType): ReactElement => {
  const { movies, title } = props;

  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <div className={styles.movieList__image}>
        {movies.map((movie, index) => (
          <div key={index}>
            <Link to={movie.link}>
              <img src={movie.image} className={styles.image} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
