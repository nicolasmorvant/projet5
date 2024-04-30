import React from 'react'
import '../styles/Slogan.css'
import imgBackground from '../assets/img/falaise.webp'

const Slogan = () => {
    return (
        <section className="slogan">
            <img
                src={imgBackground}
                alt="Falaise en bord de mer"
                className="slogan__img"
            />
            <h1 className="slogan__titre">Chez vous, partout et ailleurs</h1>
        </section>
    )
}

export default Slogan
