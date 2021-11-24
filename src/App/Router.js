// Importation des fichiers
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Movie from 'pages/Movie'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/movie">
          <Movie />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default Router