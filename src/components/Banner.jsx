import React from 'react'
import '../styles/Banner/Banner.css'


const Banner = ({img, alt, text, nav }) => {
    return (
        <section className="banner">
            <img
                src={img}
                alt={alt}
                className="banner__img"
            />
            <h1 className="banner__title">{text}</h1>
            {
                nav === true ? 
                
                <nav className='banner__nav'>
                    <i className="fa-solid fa-chevron-left"></i>
                    <i className="fa-solid fa-chevron-right"></i>
                </nav>

                : ""
            }
        </section>
    )
}

export default Banner
