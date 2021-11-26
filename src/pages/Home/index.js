

import React from 'react'

import styles from './Home.module.sass'

import { Icon } from '@iconify/react';

import MovieList from 'components/MovieList'
import Layout from 'components/Layout'
import Navbar from "components/Navbar"
import ButtonPlay from 'components/ButtonPlay'
import TextIcon from 'components/TextIcon'
import Category from '../../components/Category';

function category() {
  console.log('category')

}

const Home = () => {

  const movies = [{ image: 'images/bright.png', description: 'yo' },
  { image: 'images/bright.png', description: 'yop' },
  { image: 'images/bright.png', description: 'yo' },
  { image: 'images/bright.png', description: 'yop' }]
  return (
    <div className={styles.container}>
      <div className={styles.logoandCateg}>
        <img src="images/Netflix.png"></img>
        <a onClick={category} style={{ marginLeft: 30 }}>Catégorie</a>
        <Icon icon="bx:bxs-down-arrow" style={{ width: 10, marginLeft: 5 }} />
      </div>
      <div>
        <img src="images/witcher.jpg" className={styles.witcherImg}></img>
        <p className={styles.txtWitcher}>The Witcher</p>
        <Category />

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
