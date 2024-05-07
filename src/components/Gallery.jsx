import React from 'react'
import '../styles/Gallery/Gallery.css'
import Card from '../components/Card'
import logements from '../logements.json'

const Gallery = () => {
    //RÉCUPÉRATION DES 6 PREMIERS LOGEMENTS
    logements = logements.slice(0, 6)

    return (
        <section className="gallery">
            {logements.map((logement) => (
                <Card
                    key={logement.id}
                    id={logement.id}
                    title={logement.title}
                />
            ))}
        </section>
    )
}

export default Gallery
