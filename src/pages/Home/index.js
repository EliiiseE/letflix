

import React from 'react'

import styles from './Home.module.sass'

import MovieList from 'components/MovieList'
import Layout from 'components/Layout'
import Navbar from "components/Navbar"
import ButtonPlay from 'components/ButtonPlay'
import TextIcon from 'components/TextIcon'


const Home = () => {

  const movies = [{ image: 'images/bright.png', link: '/movie' },
                  { image: 'images/bright.png', link: '/movie' },
                  { image: 'images/bright.png', link: '/movie' },
                  { image: 'images/bright.png', link: '/movie' }]
  return (
    <div className={styles.container}>
      <div className={styles.logoandCateg}>
        <img src="images/Netflix.png"></img>
        <a style={{ marginLeft: 30 }}>Catégorie</a>
      </div>
      <div>
      <img src="images/witcher.jpg" className={styles.witcherImg}></img>
        <p className={styles.txtWitcher}>The Witcher</p>
      </div>

      <ul className={styles.threeElement}>
        <li className={styles.ContaintNav}> <TextIcon tittleName='Ajouter' icon="icon-park-outline:like" /> </li>
        <li><ButtonPlay /></li>
        <li className={styles.ContaintNav}> <TextIcon tittleName='Informations' icon="akar-icons:info" /> </li>
      </ul>

      <Layout />
      {/* <p>Page Home</p> */}
      <MovieList movies={movies} title="Films" />
      <MovieList movies={movies} title="Séries" />
      <Navbar />


    </div>
  )
}

export default Home
