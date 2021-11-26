import React from 'react'
import styles from './Category.module.sass'

import { Icon } from '@iconify/react';



function Category() {
    return (
        <div >
            {/* <Icon icon="akar-icons:cross" style={{ top: 0 }} /> */}
            <ul className={styles.category}>
                <li className={styles.elemCateg}>Science-Fiction</li>
                <li className={styles.elemCateg}>Film d'animation</li>
                <li className={styles.elemCateg}>Documentaire</li>
                <li className={styles.elemCateg}>Populaire</li>
                <li className={styles.elemCateg}>Drama</li>
            </ul>

        </div>
    )
}

export default Category
