import { ReactElement } from 'react';
import styles from './Video.module.sass';

type PropsType = {
  isPlaying: boolean;
  disableVideo: () => void;
  url: string;
};

const Video = (props: PropsType): ReactElement => {
  const { isPlaying, disableVideo, url } = props;

  return (
    <>
      {isPlaying && (
        <div className={styles.container}>
          <video onEnded={disableVideo} controls autoPlay>
            <source src={url} type="video/mp4" />
          </video>
        </div>
      )}
    </>
  );
};

export default Video;
