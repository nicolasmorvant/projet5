import React, { useState } from 'react'
import '../styles/Collapse/Collapse.css'

const Collapse = ({ title, text }) => { 

  const  [estOuvert, setEstOuvert] = useState(false);

  const toggleCollapse = () => {

    setEstOuvert(!estOuvert);
    
  }

  return (

      <div className="collapse__item">
        <h2 className={`collapse__title ${estOuvert ? "collapse__grandeMarge" : ""}`}>
          <span className='collapse__title__text'>{title}</span>
          <i className={`collapse__icon collapse__icon${estOuvert ? "--up" : "--down" } fa-solid fa-chevron-down`}  onClick={toggleCollapse}></i>
        </h2>
        <p className={`collapse__text collapse__text${estOuvert ? "--open" : "" }`}>{text}</p>
      </div>
  )
}

export default Collapse
