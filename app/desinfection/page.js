import React from 'react'
import SimpleBanner from '@/components/SimpleBanner/SimpleBanner'
import Menu from '@/components/Menu/Menu'
import { servicesData } from '@/servicesData'

export const metadata = {
  title: "Désinfection Professionnelle - Diogène Nettoyage",
  description: "Désinfection complète après sinistre, décès ou syndrome de Diogène. Diogène Nettoyage intervient dans toute la France."
}

export default function page() {
  const { intro, solution, description } = servicesData.diogene;
  return (
   <>
    <SimpleBanner url = "/desinfection.png" txt = " Service de Désinfection"/>
    <Menu
      intro={intro}
      solution={solution}
      description={description}
      backgroundImage="/diogene.png"
      backgroundImage2="/extreme.png"
    />
   </>
  )
}
