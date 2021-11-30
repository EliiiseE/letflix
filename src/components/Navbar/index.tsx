import styles from './Navbar.module.sass';
import TextIcon from '../TextIcon';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (): ReactElement => {
  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        <li className={styles.link}>
          <Link to={`/`}>
            <TextIcon titleName="Accueil" icon="ant-design:home-filled" />
          </Link>
        </li>
        <li className={styles.link}>
          <Link to={`/mylist`}>
            <TextIcon titleName="Ma liste" icon="icon-park-outline:like" />
          </Link>
        </li>

        <li className={styles.link}>
          <Link to={`/Search`}>
            <TextIcon titleName="Rechercher" icon="akar-icons:search" />
          </Link>
        </li>
      </ul>
      <hr />
      <p className={styles.thanks}>
        Thanks
        <a href="https://www.themoviedb.org" target="_blank">
          TMDB
        </a>
        for the API contribution
      </p>
    </div>
  );
};

export default Navbar;
