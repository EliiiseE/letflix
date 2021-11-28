import styles from './Category.module.sass';

const Category = () => {
  return (
    <div>
      <ul className={styles.category}>
        <li className={styles.elemCateg}>Science-Fiction</li>
        <li className={styles.elemCateg}>Film d'animation</li>
        <li className={styles.elemCateg}>Documentaire</li>
        <li className={styles.elemCateg}>Populaire</li>
        <li className={styles.elemCateg}>Drama</li>
      </ul>
    </div>
  );
};

export default Category;
