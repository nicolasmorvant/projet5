import React from 'react'
import '../styles/Gallery.css'
import Card from '../components/Card'
import logements from '../logements.json'

const Gallery = () => {

  //RÉCUPÉRATION DES 6 PREMIERS LOGEMENTS
  logements = logements.slice(0,6);

  return (
    <div className='gallery'>
      {
        logements.map( (logement) => (

          <Card 
            
            key = {logement.id}
            id = {logement.id}
            title = {logement.title}
  
          />
        ))
      }
    </div>
  )
}

export default Gallery
