import React from 'react'
import styles from './localisation.module.css'

export default function Localisation() {
  return (
    <section className={styles.localisation}>
        <h2 className={styles.h2}> Localisation</h2>
         <div style={{ width: '100%', height: '0', paddingBottom: '56%', position: 'relative' }}>
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89076.99376103446!2d4.752723721067681!3d45.75804085466221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea516ae88797%3A0x408ab2ae4bb21f0!2sLyon!5e0!3m2!1sfr!2sfr!4v1761229832521!5m2!1sfr!2sfr"
                height="100%"
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map - Diogène Nettoyage"
            ></iframe>


        </div>
        <div className={styles.description}>
            Chez <span className={styles.span}> Diogène Nettoyage </span>, nous intervenons rapidement et efficacement
            pour tous vos travaux de toiture, zinguerie, nettoyage de façades 
            et dallages dans les départements de <strong className={styles.strong}>
            Loire-Atlantique </strong> (44), <strong className={styles.strong}>Vendée</strong> (85), <strong className={styles.strong}>Maine-et-Loire </strong> (49) 
            et <strong className={styles.strong}>Deux-Sèvres </strong> (79). <br /> Que vous soyez à <strong className={styles.strong}> Nantes, Saint-Nazaire, Clisson, 
            La Roche-sur-Yon, Angers, Cholet, Niort </strong>   
            ou dans les communes environnantes, notre équipe de couvreurs et 
            spécialistes du nettoyage de bâtiments met tout son savoir-faire à 
            votre service.
            Nous assurons des prestations sur-mesure adaptées à chaque type
            de toiture et façade, en utilisant des matériaux durables et des 
            techniques respectueuses de l’environnement. Avec <span className={styles.span}> Éco Toit </span>, 
            bénéficiez d’une intervention rapide, de qualité et d’un suivi 
            personnalisé dans l’ensemble de la région Pays de la Loire et 
            Poitou-Charentes.
        </div>
    </section>
  )
}
