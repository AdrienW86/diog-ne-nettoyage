import React from 'react'
import styles from './menu.module.css'

export default function Menu({ intro, solution, description, backgroundImage, backgroundImage2}) {
   return (
    <section className={styles.section}>
      <p className={styles.intro}>{intro}</p>
      <p className={styles.solution} style={{ backgroundImage: `url(${backgroundImage})` }}>{solution}</p>
      <ul className={styles.intervention}>
        {description.map((item, index) => (
          <li key={index} className={styles.li}>{item}</li>
        ))}
      </ul>
      <div className={styles.contact}>
         <p className={styles.outro}> Chaque intervention étant unique, nous vous invitons à nous contacter pour plus d'informations et avoir un devis personnalisé.</p>     
            <div className={styles.box} style={{ backgroundImage: `url(${backgroundImage2})` }}>
                <button className={styles.btn}> Nous contacter</button>
                <button className={styles.btn2}> Devis gratuit</button>
            </div>
        <p className={styles.outro}> Contact-nous dès maintenant pour trouver la solution la plus adapté à votre situation</p>
      </div>
    </section>
  );
}