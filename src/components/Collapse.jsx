import React from 'react'
import '../styles/Collapse/Collapse.css'

const Collapse = ({id, title, text}) => {
  return (

      <div className="collapse__item" id={id}>
        <h2 className="collapse__title">
          <span className='collapse__title__text'>{title}</span>
          <i className="collapse__title__icon fa-solid fa-chevron-down"></i>
        </h2>
        <p className="collapse__text collapse__text--closed">{text}</p>
      </div>

  )
}

export default Collapse
