
import React from 'react'
import styles from './MovieInfo.module.sass'
import MovieList from 'components/MovieList'
import Navbar from 'components/Navbar'
import ButtonPlay from 'components/ButtonPlay'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

const MovieInfo = (props) => {
  
    const movies = [{ image: 'images/bright.png', link: '/movie' },
                    { image: 'images/bright.png', link: '/movie' },
                    { image: 'images/bright.png', link: '/movie' },
                    { image: 'images/bright.png', link: '/movie' }]
    return (
    
        <div className={styles.container}>
            <Link to={props.iconLink} className={styles.return}> <Icon icon="akar-icons:chevron-left"/> </Link>
            <div className={styles.all_information}>
                <div className={styles.information_top}>
                    <img src={props.image} className={styles.image}/>
                    <div className={styles.information_top_text}>
                        <h2>{props.name}</h2>
                        <p>{props.year}</p>
                        <p>{props.age}</p>
                        <p>{props.duration}</p>
                    </div>
                </div>
                <ButtonPlay large/>
                <div className={styles.description}>
                    <p>Em um mundo futurista, seres humanos convivem em harmônia com seres fantásticos, como fadas e ogros. Mesmo nesse cenário infrações da lei acontecem e um policial humano (Will Smith) especializado em crimes mágicos é obrigado a trabalhar junto com um orc (Joel Edgerton) para evitar que uma poderosa arma caia nas mãos erradas.</p> 
                </div>
                <MovieList movies={movies} title="Films en lien" />
            </div>
            <Navbar />
        </div> 
    )
}

export default MovieInfo
