
import React from 'react'
import styles from './Home.module.sass'
import MovieList from 'components/MovieList'
import Layout from 'components/Layout'
import Navbar from "components/Navbar";
import ButtonPlay from 'components/ButtonPlay'


const Home = () => {
  
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
        
        <MovieList />
        <Navbar />
        
        
    </div> 
  )
}

export default Home
