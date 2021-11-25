
import React from 'react'
import styles from './Home.module.sass'
import MovieList from 'components/MovieList'
import Layout from 'components/Layout'
import Navbar from "components/Navbar";
import TextIcon from "components/TextIcon";


const Home = () => {
  
  return (
    <div className={styles.container}>
        <Layout />  
        <p>Page Home</p>
        <MovieList />
        <Navbar />
        <TextIcon />
        
    </div> 
  )
}

export default Home
