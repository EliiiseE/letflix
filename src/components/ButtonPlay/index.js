import React from 'react'
import styles from './Buttonplay.module.sass'
import { Icon } from '@iconify/react';



function buttonPlay() {
    return (
        <div >
<button className={styles.buttonPlay}>


<Icon icon="ci:play-arrow" className={styles.icononbutton}/>
   <span className={styles.txtbutton}> Play </span> 

    {/* <Icon icon="codicon:triangle-down" /> */}
    
   
</button>
            
        </div>
        
    )
}

export default buttonPlay
