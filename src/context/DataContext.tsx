import { createContext } from 'react';

type DataContextType = {
  movies?: never[];
};

const DataContext = createContext<DataContextType>({});

export default DataContext;
