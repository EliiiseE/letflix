import React, { useEffect, useState } from 'react';
import DataContext from 'context/DataContext';

const DataProvider: React.FC = ({ children }) => {
  const contextValue = {
    movies: [],
  };

  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};

export default DataProvider;
