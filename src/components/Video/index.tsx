import { ReactElement } from 'react';
import styles from './Video.module.sass';

const Video = (): ReactElement => {
  return (
    <div className={styles.container}>
      <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
    </div>
  );
};

export default Video;
