import React from 'react'
import '../styles/Banner/Banner.css'


const Banner = ({img, alt, text}) => {
    return (
        <section className="banner">
            <img
                src={img}
                alt={alt}
                className="banner__img"
            />
            <h1 className="banner__title">{text}</h1>
        </section>
    )
}

export default Banner
