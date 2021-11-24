import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Movie from 'pages/Movie'
import Error404 from 'pages/Error404'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home/>} />

        <Route exact path="/movie" element={<Movie/>} />

        <Route exact path="/" element={<Home/>} />

        <Route path="*" element={<Error404/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router