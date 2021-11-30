import styles from './Buttonplay.module.sass';
import Video from 'components/Video';
import { Icon } from '@iconify/react';
import { ReactElement } from 'react';

type PropsType = {
  large?: boolean;
};

const buttonPlay = (props: PropsType): ReactElement => {
  const { large } = props;
  return (
    <div>
      <Video />
      {/* Add 2 diff button styles */}
      <button className={`${styles.buttonPlay} ${large ? styles.buttonPlayLarge : ''}`}>
        <Icon icon="ci:play-arrow" className={styles.iconOnButton} />
        <span className={styles.txtButton}> Play </span>
      </button>
    </div>
  );
};

export default buttonPlay;
