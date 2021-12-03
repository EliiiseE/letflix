import DataContext, { DataContextType } from 'context/DataContext';
import React, { useState } from 'react';

const DataProvider: React.FC = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const contextValue: DataContextType = {
    favoriteMovies: favoriteMovies,
    setFavoriteMovies: setFavoriteMovies,
  };

  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};

export default DataProvider;
