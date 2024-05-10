import React from 'react'
import '../styles/Card/Card.css'

const Card = ({ title, cover }) => {

    return (
        <div className="card">
            <img src={cover} alt={title} className='card__img'/>
            <h3 className="card__title">{title}</h3>
        </div>
    )
}

export default Card
