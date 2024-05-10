import React from 'react'
import Collapse from '../../components/Collapse'
import Banner from '../../components/Banner'
import imgBanner from '../../assets/img/montagnes.webp'

const aboutInfos = 
[
  {
    "title" : "Respect",
    "text" : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation de voisinage entrainera une exclusion de notre plateforme." 
  },
  {
    "title" : "Service",
    "text" : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation de voisinage entrainera une exclusion de notre plateforme."
  },
  {
    "title" : "Fiabilité",
    "text" : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
  },
  {
    "title" : "Sécurité",
    "text" : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs. Chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." 
  }
]

const About = () => {
  
  return (

      <main className="main">

        <Banner img={imgBanner} alt="Paysage de montagne avec de la forêt et une vallée en contrebas" text=""/>

        <section className="collapse__container">
          {aboutInfos.map( (info, index) => (
            <Collapse
              key = {index + 1} 
              title = {info.title}
              text = {info.text} 
              array = {false}
            />
          ))}
        </section>

      </main>

  )
}

export default About