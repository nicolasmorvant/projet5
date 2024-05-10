import React from 'react'
import '../styles/Tag/Tag.css'

const Tag = ({tags}) => {
  return (
    <div className="logement__tags">
    {
        tags.map((tag,index) => 
        (
            <span className='tag' key={index}>{tag}</span>
        ))
    }
    </div>
  )
}

export default Tag