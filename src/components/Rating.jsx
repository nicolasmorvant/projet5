import React from 'react'
import '../styles/Rating/Rating.css'

const Rating = ({rate}) => {
  return (
    <div className='logement__rating'>
    
        {
            Array.from( {length: 5}).map( (_,index) => (

                index < rate ? <i className="fa-solid fa-star rating--red"></i> :  <i className="fa-solid fa-star rating--grey"></i>

            ))

        }
    
    </div>
  )
}

export default Rating