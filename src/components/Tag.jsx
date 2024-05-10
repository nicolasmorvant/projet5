import React from 'react'
import '../styles/Tag/Tag.css'

const Tag = ({text}) => {
  return (
      <span className='tag'>{text}</span>
    )
}

export default Tag