import styles from './Movie.module.sass';
import MovieInfo from 'components/MovieInfo';
import MovieList from 'components/MovieList';
import Layout from 'components/Layout';
import { ReactElement, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Video from 'components/Video';
import useData from 'hooks/useData';

const Movie = (): ReactElement => {
  // Always return to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { similarMovies, movie } = useData();

  const [videoIsPlaying, setVideoIsPlaying] = useState<boolean>(false);
  const [urlVideo, setUrlVideo] = useState<string>('');

  useEffect(() => {
    if (videoIsPlaying) {
      document.body.style.height = '100vh';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.height = 'auto';
      document.body.style.overflow = 'auto';
    }
  }, [videoIsPlaying]);

  const handlePlayVideo = (url: string) => {
    setUrlVideo(url);
    setVideoIsPlaying(true);
  };

  return (
    <Layout>
      <Helmet>
        {/* Allows to dynamically add the right movie title */}
        <title>{`Letflix | ${movie?.name}`}</title>
        <meta name="description" content={movie?.description} />
      </Helmet>

      <div className={styles.container}>
        <Video
          isPlaying={videoIsPlaying}
          disableVideo={() => setVideoIsPlaying(false)}
          url={urlVideo}
        />
        {movie && (
          <MovieInfo
            image={movie.image}
            name={movie.name}
            date={movie.date}
            runtime={movie.runtime}
            description={movie.description}
            id={movie.id}
            // movie.urlVideo
            playVideo={() => handlePlayVideo('../videos/playMovie.mp4')}
          />
        )}

        <MovieList movies={similarMovies} title="Films en lien" />
      </div>
    </Layout>
  );
};

export default Movie;
