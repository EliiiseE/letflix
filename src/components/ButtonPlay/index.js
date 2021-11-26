import React from 'react'
import styles from './Buttonplay.module.sass'
import { Icon } from '@iconify/react';



function buttonPlay(props) {
    const { large } = props
    return (
        <div>
            <button className={`${styles.buttonPlay} ${large ? styles.buttonPlayLarge : ''}`}>
                <Icon icon="ci:play-arrow" className={styles.iconOnButton} />
                <span className={styles.txtButton}> Play </span>
            </button>
        </div>
    )
}

export default buttonPlay



