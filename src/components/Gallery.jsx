import React from 'react'
import '../styles/Gallery/Gallery.css'
import Card from '../components/Card'
import logements from '../logements.json'
import { Link } from 'react-router-dom'

const Gallery = () => {
    return (
        <section className="gallery">
            {logements.map((logement) => (
                <Link to={`/logement/${logement.id}`} key={logement.id} className="gallery__link">
                    <Card
                        title={logement.title}
                        cover={logement.cover}
                    />
                </Link>
            ))}
        </section>
    )
}

export default Gallery
