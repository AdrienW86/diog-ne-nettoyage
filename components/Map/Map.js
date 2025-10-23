'use client';

import React from 'react';
import styles from './map.module.css';

export default function GoogleMap() {
  return (
    <section className={styles.container}>
       <h2 className={styles.h2}> Localisation </h2>
      <div style={{ width: '100%', height: '0', paddingBottom: '56%', position: 'relative' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89076.99376103446!2d4.752723721067681!3d45.75804085466221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea516ae88797%3A0x408ab2ae4bb21f0!2sLyon!5e0!3m2!1sfr!2sfr!4v1761229832521!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map - Eco toit"
        ></iframe>
      </div>     
    </section>
  );
}
