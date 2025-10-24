import React from 'react'
import Image from 'next/image'
import styles from './banner.module.css'

export default function SimpleBanner(props) {
  return (
    <div className={styles.banner}>
        <Image
          src={props.url}
          alt="Bannière couverture"
          fill
          priority
          className={styles.image}
        />
        <div className={styles.overlay}></div>
        <div className={styles.bannerText}>
            <h1> {props.txt} </h1>
        </div>
    </div>
  )
}
