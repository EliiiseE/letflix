import { useEffect, useState } from 'react';

import Styles from './Loader.module.sass';
import classnames from 'classnames';

function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h1 className={classnames(Styles.tracking_in_contract, !isLoading && Styles.transition_end)}>
        Letflix
      </h1>
    </>
  );
}

export default Loader;
