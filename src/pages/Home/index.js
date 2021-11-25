
import React from 'react'
import styles from './Home.module.sass'
import Navbar from "components/Navbar";
import TextIcon from "components/TextIcon";


const Home = () => {
  
  return (
    <div className={styles.container}>
        <p>Page Home</p>
        <Navbar />
        <TextIcon />
        
    </div> 
  )
}

export default Home
