import React from 'react'
import styles from './zone.module.css'

export default function Zone() {
  return (
    <section className={styles.container}>
  <h2 className={styles.h2}>Zone d'intervention</h2>
  <div className={styles.intervention}>
    <p className={styles.p}>
      Nous intervenons rapidement et efficacement dans toute la moitié sud de la France :
    </p>
    <table border="1" cellPadding="10" cellSpacing="0">
      <thead>
        <tr>
          <th className={styles.th}>Département</th>
          <th className={styles.th}>Villes principales desservies</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={styles.region}>Pyrénées-Orientales (66)</td>
          <td className={styles.td}>
            Perpignan, Canet-en-Roussillon, Saint-Cyprien, Argelès-sur-Mer, Elne,
            Le Soler, Prades, Céret, Rivesaltes, Thuir, Banyuls-sur-Mer
          </td>
        </tr>
        <tr>
          <td className={styles.region}>Aude (11)</td>
          <td className={styles.td}>
            Narbonne, Carcassonne, Castelnaudary, Lézignan-Corbières, Limoux,
            Coursan, Gruissan, Trèbes, Quillan
          </td>
        </tr>
        <tr>
          <td className={styles.region}>Haute-Garonne (31)</td>
          <td className={styles.td}>
            Toulouse, Blagnac, Colomiers, Muret, Tournefeuille, Cugnaux, Balma,
            Saint-Gaudens, Labège, L’Union, Plaisance-du-Touch
          </td>
        </tr>
        <tr>
          <td className={styles.region}>Rhône (69)</td>
          <td className={styles.td}>
            Lyon, Villeurbanne, Vénissieux, Caluire-et-Cuire, Bron, Oullins,
            Écully, Tassin-la-Demi-Lune, Meyzieu, Saint-Priest, Décines-Charpieu
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

  )
}