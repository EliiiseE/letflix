
import React from 'react'
import styles from './MovieList.module.sass'

const MovieList = (props) => {
  

  const {movies} = props
  // const fonction = () => (
  //   1
  // )

  return (
    <div className={styles.container}>
        <h3>{props.title}</h3>
        <div className={styles.movieList__image}>
          {movies.map((movie) => (
            <img src={movie.image} className={styles.image}/>
          ))}
        </div>
    </div> 
  )
}

export default MovieList
