import React from 'react'
import styles from './mentions.module.css'

export default function MentionsLegales() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Mentions légales</h1>

      <h2 className={styles.h2}>Éditeur du site</h2>
      <p className={styles.p}>Nom de l’entreprise : Diogène Nettoyage</p>
      <p className={styles.p}>Dirigeant : HOSPICE MICHEL</p>
      <p className={styles.p}>Forme juridique : Entrepreneur individuel</p>
      <p className={styles.p}>SIREN : 483 160 420</p>
      <p className={styles.p}>Siret : 48316042000012</p>
      <p className={styles.p}>Code APE / APRM : 8122Z - Autres activités de nettoyage des bâtiments et nettoyage industriel</p>
      <p className={styles.p}>Adresse : 88 chemin des charettes, 66380 Pia, France</p>
      <p className={styles.p}>Date de début d’activité : 05/07/2005</p>
      <p className={styles.p}>Date d’immatriculation au RNE : 05/07/2005</p>
      <p className={styles.p}>Email : <a href="mailto:contact.diogene.nettoyage@gmail.com">contact.diogene.nettoyage@gmail.com</a></p>
      <p className={styles.p}>Téléphone : 06 51 36 83 73</p>

      <h2 className={styles.h2}>Hébergement du site</h2>
      <p className={styles.p}>Nom : Vercel</p>
      <p className={styles.p}>Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>

      <h2 className={styles.h2}>Directeur de la publication</h2>
      <p className={styles.p}>HOSPICE MICHEL</p>

      <h2 className={styles.h2}>Politique de confidentialité</h2>
      <p className={styles.p}>Diogène Nettoyage peut collecter : nom, prénom, email, téléphone et informations nécessaires pour établir un devis ou fournir la prestation.</p>
      <p className={styles.p}>Ces données sont utilisées uniquement pour répondre aux demandes des clients et assurer le suivi des prestations.</p>
      <p className={styles.p}>Les données sont conservées de manière sécurisée et ne sont jamais transmises à des tiers sans consentement préalable.</p>
      <p className={styles.p}>Conformément au RGPD, vous pouvez accéder, rectifier ou demander la suppression de vos données en contactant <a href="mailto:contact.diogene.nettoyage@gmail.com" className="text-blue-600 underline">contact.diogene.nettoyage@gmail.com</a>.</p>
    </section>
  )
}
