import { useEffect, useState } from 'react';

import Styles from './Loader.module.sass';

function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  console.log(Styles);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }, []);

  return (
    <>
      <h1 className={isLoading ? Styles.tracking_in_contract : Styles.transition_end}>Letflix</h1>
    </>
  );
}

export default Loader;
