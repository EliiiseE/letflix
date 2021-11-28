import styles from './Navbar.module.sass';
import TextIcon from '../TextIcon';
import { ReactElement } from 'react';

const Navbar = (): ReactElement => {
  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        <li className={styles.link}>
          <TextIcon titleName="Accueil" icon="ant-design:home-filled" />
        </li>
        <li className={styles.link}>
          <TextIcon titleName="Ma liste" icon="icon-park-outline:like" />
        </li>
        <li className={styles.link}>
          <TextIcon titleName="Rechercher" icon="akar-icons:search" />
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
