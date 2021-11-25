import React from 'react'
import styles from './Navbar.module.sass'
import TextIcon from '../TextIcon'

const Navbar = () => {

  return (
    <div>
      <ul className={styles.Navbar}>
        <li className={styles.ContaintNav}> <TextIcon tittleName='Accueil' icon='ant-design:home-filled'/> </li>
        <li className={styles.ContaintNav}> <TextIcon tittleName='Ma liste' icon="icon-park-outline:like" /> </li>
        <li className={styles.ContaintNav}> <TextIcon tittleName='Rechercher'  icon="akar-icons:search" /> </li>


      </ul>
    </div>
  )
}

export default Navbar
