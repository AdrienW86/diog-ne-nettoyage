import React from 'react'
import SimpleBanner from '@/components/SimpleBanner/SimpleBanner'
import Menu from '@/components/Menu/Menu'
import { servicesData } from '@/servicesData'

export const metadata = {
  title: "Nettoyage Post Mortem - Diogène Nettoyage",
  description: "Nettoyage post mortem professionnel et bio-nettoyage. Diogène Nettoyage assure la désinfection complète dans toute la France."
}

export default function page() {
  const { intro, solution, description } = servicesData.diogene;
  return (
    <>
     <SimpleBanner url = "/post-mortem.png" txt = "Nettoyage Post-Mortem"/>
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
