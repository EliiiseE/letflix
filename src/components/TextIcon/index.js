import React from 'react'
import { Icon } from '@iconify/react';
import styles from './TextIcon.module.sass'

const TextIcon = (props) => {
  return (
    <div className={styles.TextAndIcon}>
      {/* <Icon icon="ant-design:home-filled" className={styles.Icon}/> */}
      <Icon icon={props.icon} className={styles.Icon}/>
      
      <p className={styles.TextForIcon}>{props.tittleName}</p>
    </div>
  )

  
}

export default TextIcon
