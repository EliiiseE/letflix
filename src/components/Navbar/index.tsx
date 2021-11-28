import styles from './Navbar.module.sass';
import TextIcon from '../TextIcon';
import { ReactElement } from 'react';

const Navbar = (): ReactElement => {
  return (
    <div>
      <ul className={styles.Navbar}>
        <li className={styles.ContaintNav}>
          {' '}
          <TextIcon titleName="Accueil" icon="ant-design:home-filled" />{' '}
        </li>
        <li className={styles.ContaintNav}>
          {' '}
          <TextIcon titleName="Ma liste" icon="icon-park-outline:like" />{' '}
        </li>
        <li className={styles.ContaintNav}>
          {' '}
          <TextIcon titleName="Rechercher" icon="akar-icons:search" />{' '}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
