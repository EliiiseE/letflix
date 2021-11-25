
import React from 'react'
import styles from './Home.module.sass'
import MovieList from 'components/MovieList'
import Layout from 'components/Layout'

const Home = () => {
  
  return (
    <div className={styles.container}>
        <Layout />  
        <p>Page Home</p>
        <MovieList />
    </div> 
  )
}

export default Home
