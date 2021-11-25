import React from 'react'
import { Icon } from '@iconify/react';
import styles from './TextIcon.module.sass'

const TextIcon = () => {
  return (
    <div className={styles.TextAndIcon}>
      <Icon icon="ant-design:home-filled" className={styles.Icon}/>
      <p className={styles.TextForIcon}>Home</p>
    </div>
  )

  
}

export default TextIcon
