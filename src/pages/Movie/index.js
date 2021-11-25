
import React from 'react'
import styles from './Movie.module.sass'
import MovieInfo from 'components/MovieInfo'

const Movie = (props) => {
  
  return (
    <div className={styles.container}>
      <MovieInfo image='images/bright.png' name='Titanic' year='1669' age='16+' duration='1h24'/>
    </div> 
  )
}

export default Movie
