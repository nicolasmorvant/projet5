import React, { useState } from 'react'
import '../styles/Slideshow/Slideshow.css'

const Slideshow = ({ images, text }) => {
    const [indexImg, setIndexImg] = useState(1)

    //RÉCUPÉRATION LONGUEUR IMAGES
    const indexMax = images.length

    /*console.log(images);    
    console.log(indexMax);*/

    const nextImg = () => {
        //GESTION DE L'INDEX
        indexImg === indexMax ? setIndexImg(1) : setIndexImg(indexImg + 1)
    }

    const prevImg = () => {
        //GESTION DE L'INDEX
        indexImg === 1 ? setIndexImg(indexMax) : setIndexImg(indexImg - 1)
    }

    return (
        <div className="slideshow">
            {images.map((img, index) => (
                <img
                    src={img}
                    alt={`${text}-${index + 1}`}
                    key={index + 1}
                    className={`slideshow__img ${index + 1 === indexImg ? 'active' : ''}`}
                />
            ))}

            {indexMax > 1 ? (
                <>
                    <nav className="slideshow__nav">
                        <i
                            className="fa-solid fa-chevron-left slideshow__nav--left"
                            onClick={prevImg}
                        ></i>
                        <i
                            className="fa-solid fa-chevron-right slideshow__nav--right"
                            onClick={nextImg}
                        ></i>
                    </nav>
                    <p className="slideshow__num">
                        {`${indexImg}/${indexMax}`}
                    </p>
                </>
            ) : (
                ''
            )}
        </div>
    )
}

export default Slideshow
