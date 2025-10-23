import React from 'react'
import Link from 'next/link'
import styles from './services.module.css'

export default function Services() {
  const services = [
    {
      title: "Syndrome de Diogène",
      description: "Nettoyage et accompagnement des logements de personnes atteintes du syndrome de Diogène. Intervention discrète et respectueuse.",
      image: "/diogene.png",
      link: "/diogene"
    },
    {
      title: "Nettoyage post-mortem",
      description: "Débarrassage et désinfection après un décès, avec professionnalisme et discrétion absolue.",
      image: "/post-mortem.png",
      link: "/post-mortem"
    },
    {
      title: "Nettoyage extrême",
      description: "Intervention dans les locaux insalubres, accumulations importantes, ou situations complexes nécessitant un savoir-faire spécifique.",
      image: "/extreme.png",
      link: "/nettoyage-extreme"
    },
    {
      title: "Désinfection",
      description: "Désinfection complète des locaux, élimination des bactéries et virus pour un environnement sain et sécurisé.",
      image: "/desinfection.png",
      link: "/desinfection"
    }
  ]

  return (
    <section className={styles.services}>
      <h2 className={styles.h2}>Nos services</h2>
      <div className={styles.cardsContainer}>
        {services.map((service, index) => (
          <Link href={service.link} key={index} className={styles.card}>
            <img 
              src={service.image} 
              alt={service.title} 
              className={styles.cardImage} 
            />
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardText}>{service.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
