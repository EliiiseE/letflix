import { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Movie from 'pages/Movie';
import Favorite from 'pages/Favorite';
import Error404 from 'pages/Error404';
import Search from 'pages/Search';
import Log from 'pages/Log';

const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Log />} />

        <Route path="/home" element={<Home />} />

        <Route path="/movie/:id" element={<Movie />} />

        <Route path="/search" element={<Search />} />

        <Route path="/mylist" element={<Favorite />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
