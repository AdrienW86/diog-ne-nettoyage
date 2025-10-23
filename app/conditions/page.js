import React from 'react';
import styles from './conditions.module.css'

export default function CGV() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Conditions générales de vente (CGV)</h1>

      <h2 className={styles.h2}>Article 1 – Objet</h2>
      <p className={styles.p}>Les présentes conditions générales de vente régissent toutes les prestations de services fournies par Diogène Nettoyage dans le cadre de son activité de nettoyage de locaux, désinfection et désencombrement.</p>

      <h2 className={styles.h2}>Article 2 – Prestations</h2>
       <p className={styles.p}>Diogène Nettoyage propose des services :</p>
      <ul>
        <li className={styles.li}> Nettoyage des locaux</li>
        <li className={styles.li}> Désencombrement des locaux</li>
        <li className={styles.li}> Désinfection des locaux</li>
       
      </ul>

      <h2 className={styles.h2}>Article 3 – Commande</h2>
       <p className={styles.p}>Toute commande de prestation implique l’acceptation des présentes CGV. Un devis détaillé est fourni avant toute intervention.</p>

      <h2 className={styles.h2}>Article 4 – Tarifs</h2>
       <p className={styles.p}>Les prix des prestations sont indiqués sur le devis. Ils sont exprimés en euros et s’entendent toutes taxes comprises.</p>

      <h2 className={styles.h2}>Article 5 – Paiement</h2>
       <p className={styles.p}>Le règlement s’effectue selon les modalités précisées sur le devis : acompte à la commande et solde à la fin des travaux, sauf autre accord écrit.</p>

      <h2 className={styles.h2}>Article 6 – Délais d’exécution</h2>
       <p className={styles.p}>Les délais sont donnés à titre indicatif. Diogène Nettoyage s’engage à réaliser les prestations dans un délai raisonnable convenu avec le client.</p>

      <h2 className={styles.h2}>Article 7 – Responsabilité</h2>
       <p className={styles.p}>Diogène Nettoyage met en œuvre tous les moyens nécessaires pour assurer la qualité des prestations. Sa responsabilité est limitée aux dommages directs résultant d’une faute prouvée.</p>

      <h2 className={styles.h2}>Article 8 – Réclamations</h2>
       <p className={styles.p}>Toute réclamation doit être adressée par écrit à Diogène Nettoyage dans un délai de 7 jours après l’intervention.</p>

      <h2 className={styles.h2}>Article 9 – Loi applicable et juridiction</h2>
       <p className={styles.p}>Les présentes CGV sont soumises au droit français. En cas de litige, les tribunaux compétents sont ceux du siège social de l’entreprise : Perpignan (66000).</p>
    </section>
  )
}
