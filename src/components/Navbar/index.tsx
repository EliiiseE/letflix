import styles from './Navbar.module.sass';
import TextIcon from '../TextIcon';
import { ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = (): ReactElement => {
  const { pathname } = useLocation();

  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        <li className={styles.link}>
          <Link to={`/home`}>
            <TextIcon
              titleName="Accueil"
              icon={pathname === '/home' ? 'ant-design:home-filled' : 'ant-design:home-outlined'}
            />
          </Link>
        </li>
        <li className={styles.link}>
          <Link to={`/mylist`}>
            <TextIcon
              titleName="Ma liste"
              icon={pathname === '/mylist' ? 'ci:heart-fill' : 'ci:heart-outline'}
            />
          </Link>
        </li>

        <li className={styles.link}>
          <Link to={`/search`}>
            <TextIcon
              titleName="Rechercher"
              icon={pathname === '/search' ? 'bx:bxs-search' : 'akar-icons:search'}
            />
          </Link>
        </li>
      </ul>
      <hr />
      <p className={styles.thanks}>
        Thanks{' '}
        <a href="https://www.themoviedb.org" target="_blank">
          TMDB
        </a>{' '}
        for the API contribution
      </p>
    </div>
  );
};

export default Navbar;
