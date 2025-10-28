import React from 'react'
import SimpleBanner from '@/components/SimpleBanner/SimpleBanner'
import Menu from '@/components/Menu/Menu'
import { servicesData } from '@/servicesData'

export const metadata = {
  title: "Nettoyage Extrême - Diogène Nettoyage",
  description: "Nettoyage extrême et débarras de logements insalubres. Diogène Nettoyage intervient dans toute la France pour un espace sain et sécurisé."
}

export default function page() {
  const { intro, solution, description } = servicesData.diogene;
  return (
    <>
     <SimpleBanner url = "/diogene.png" txt = "Nettoyage Extrême"/>
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
