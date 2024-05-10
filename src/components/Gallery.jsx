import React from 'react'
import '../styles/Gallery/Gallery.css'
import Card from '../components/Card'
import logements from '../logements.json'
import { Link } from 'react-router-dom'

const Gallery = () => {
    //RÉCUPÉRATION DES 6 PREMIERS LOGEMENTS
    //logements = logements.slice(0, 6)

    return (

        <section className="gallery">
            {logements.map((logement) => (
                <Link to={`/logement/${logement.id}`} className='gallery__link'>
                    <Card
                        key = {logement.id}
                        title = {logement.title}
                        cover = {logement.cover} 
                    />
                </Link>
            ))}
        </section>
    )
}

export default Gallery
