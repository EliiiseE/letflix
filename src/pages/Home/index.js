
import React from 'react'
import styles from './Home.module.sass'
import MovieList from 'components/MovieList'
import Layout from 'components/Layout'
import Navbar from "components/Navbar";
import TextIcon from "components/TextIcon";


const Home = () => {
  
  const movies = [{ image: 'images/bright.png', description: 'yo' },
                  { image: 'images/bright.png', description: 'yop' },
                  { image: 'images/bright.png', description: 'yo' },
                  { image: 'images/bright.png', description: 'yop' }]
  return (
    <div className={styles.container}>
        <Layout />  
        <p>Page Home</p>
        <MovieList movies={movies} title="Films" />
        <MovieList movies={movies} title="Séries" />
        <Navbar />
        <TextIcon />
        
    </div> 
  )
}

export default Home
