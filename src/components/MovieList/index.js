
import React from 'react'
import styles from './MovieList.module.sass'
import { Link } from 'react-router-dom'

const MovieList = (props) => {
  
  const {movies} = props

  return (
    <div className={styles.container}>
        <h3>{props.title}</h3>
        <div className={styles.movieList__image}>
          {movies.map((movie) => (
            <Link to={movie.link} > <img src={movie.image} className={styles.image}/> </Link>
          ))}
        </div>
    </div> 
  )
}

export default MovieList
