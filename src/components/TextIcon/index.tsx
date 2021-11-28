import { Icon } from '@iconify/react';
import { ReactElement } from 'react';
import styles from './TextIcon.module.sass';

type PropsType = {
  icon: string;
  titleName: string;
};

const TextIcon = (props: PropsType): ReactElement => {
  const { icon, titleName } = props;
  return (
    <div className={styles.TextAndIcon}>
      <Icon icon={icon} className={styles.Icon} />
      <p className={styles.TextForIcon}>{titleName}</p>
    </div>
  );
};

export default TextIcon;
