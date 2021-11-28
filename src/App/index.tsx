import { ReactElement } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Router from './Router';
import './App.module.sass';

const App = (): ReactElement => {
  return (
    <HelmetProvider>
      <Router />
    </HelmetProvider>
  );
};

export default App;
