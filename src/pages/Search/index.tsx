import Layout from 'components/Layout';
import { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Search.module.sass';
import { Icon } from '@iconify/react';
import Navbar from 'components/Navbar';
import { getSearchedMovies } from 'api/tmdb';
import { Link } from 'react-router-dom';

const Search = (): ReactElement => {
  // Always return to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  type MovieType = {
    image: string;
    id: number;
  };

  const [searchValue, setSearchValue] = useState<string>('');
  const [searchedMovies, setSearchedMovies] = useState<Array<MovieType>>([]);

  // To change the input value in a variable to search
  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    // Allows to get the img and id of each searched movies
    setSearchedMovies([]);
    if (searchValue.length < 1) return;
    getSearchedMovies(searchValue).then((response) => {
      response.results.map((movie) => {
        setSearchedMovies((movies) =>
          movies.concat({
            image: movie.poster_path,
            id: movie.id,
          }),
        );
      });
    });
  }, [searchValue]);

  return (
    <Layout>
      <Helmet>
        <title>Letflix | Search</title>
        <meta name="description" content="Description" />
      </Helmet>

      <div className={styles.container}>
        <div className={styles.searchBar}>
          <input
            className={styles.inputName}
            type="text"
            placeholder="Rechercher un film"
            value={searchValue}
            onChange={handleValueChange}
          ></input>
          <button className={styles.search}>
            <Icon icon="akar-icons:search" />
          </button>
        </div>
        <div className={styles.image}>
          {searchedMovies.map((movie, index) => (
            <Link to={`/movie/${movie.id}`} key={index} className={styles.link}>
              {/* Url required for getting the img */}
              <img
                src={`https://image.tmdb.org/t/p/original${movie.image}`}
                className={styles.image}
              />
            </Link>
          ))}
        </div>
        <Navbar />
      </div>
    </Layout>
  );
};

export default Search;
