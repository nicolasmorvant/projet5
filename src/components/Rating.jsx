import React from 'react'
import '../styles/Rating/Rating.css'

const Rating = ({ rate }) => {
    return (
        <>
            {Array.from({ length: 5 }).map((_, index) =>
                index < rate ? (
                    <i className="fa-solid fa-star rating--red" key={index}></i>
                ) : (
                    <i
                        className="fa-solid fa-star rating--grey"
                        key={index}
                    ></i>
                ),
            )}
        </>
    )
}

export default Rating
