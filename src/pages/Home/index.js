
import React from 'react'
import styles from './Home.module.sass'
import MovieList from 'components/MovieList'
import Layout from 'components/Layout'
import Navbar from "components/Navbar";
import ButtonPlay from 'components/ButtonPlay'


const Home = () => {
  
  const movies = [{ image: 'images/bright.png', description: 'yo' },
                  { image: 'images/bright.png', description: 'yop' },
                  { image: 'images/bright.png', description: 'yo' },
                  { image: 'images/bright.png', description: 'yop' }]
  return (
    <div className={styles.container}>
      <div>
        <img src="images/Netflix.png"></img>
        <a>Catégorie</a>
      </div>
      <div>
        <img></img>
        <p>The Witcher</p>
      </div>
      <ButtonPlay />
        <Layout />  
        <p>Page Home</p>
        <MovieList movies={movies} title="Films" />
        <MovieList movies={movies} title="Séries" />
        <Navbar />
        
        
    </div> 
  )
}

export default Home
