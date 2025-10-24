import React from 'react'
import SimpleBanner from '@/components/SimpleBanner/SimpleBanner'
import Menu from '@/components/Menu/Menu'
import { servicesData } from '@/servicesData'

export const metadata = {
  title: "Syndrome de Diogène - Diogène Nettoyage",
  description: "Débarras et nettoyage pour syndrome de Diogène. Diogène Nettoyage intervient dans toute la France pour des logements assainis et sécurisés."
}

export default function page() {
  const { intro, solution, description } = servicesData.diogene;
  return (
   <>
    <SimpleBanner url = "/diogene2.png" txt = "Syndrôme de Diogène"/>
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
