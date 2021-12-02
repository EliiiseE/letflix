import { ReactElement } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Router from './Router';
import './App.module.sass';
import DataProvider from '../providers/DataProvider';

const App = (): ReactElement => {
  return (
    <HelmetProvider>
      <DataProvider>
        <Router />
      </DataProvider>
    </HelmetProvider>
  );
};

export default App;
