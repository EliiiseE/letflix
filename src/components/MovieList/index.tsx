import styles from './MovieList.module.sass';
import { Link } from 'react-router-dom';
import { ReactElement } from 'react';

type PropsType = {
  movies: MovieType[];
  title: string;
};

type MovieType = {
  image: string;
  id: number;
};

const MovieList = (props: PropsType): ReactElement => {
  /* Retrieve the object's attribut */
  const { movies, title } = props;

  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <div className={styles.movieList__image}>
        {movies.map((movie, index) => (
          /* Allows to change the url w/ the correct ID movie */
          <Link to={`/movie/${movie.id}`} key={index} className={styles.link}>
            {/* Url required for getting the img */}
            <img
              src={`https://image.tmdb.org/t/p/original${movie.image}`}
              className={styles.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
