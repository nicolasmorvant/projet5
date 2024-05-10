import React from 'react'
import '../styles/Card/Card.css'

const Card = ({ key, title, cover }) => {

    return (
        <div className="card" key={key}>
            <img src={cover} alt={title} className='card__img'/>
            <h3 className="card__title">{title}</h3>
        </div>
    )
}

export default Card
