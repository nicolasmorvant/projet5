import React, { useState } from 'react'
import '../styles/Collapse/Collapse.css'

const Collapse = ({ title, text, array }) => { 

  const  [estOuvert, setEstOuvert] = useState(false);

  const toggleCollapse = () => {

    setEstOuvert(!estOuvert);
    
  }


  return (

      <div className="collapse__item">
        <h2 className={`collapse__title ${estOuvert ? "collapse__grandeMarge" : ""}`}>
          <span className='collapse__title__text'>{title}</span>
          <i className={`collapse__icon collapse__icon${estOuvert ? "--down" : "--up" } fa-solid fa-chevron-up`}  onClick={() => toggleCollapse}></i>
        </h2>
        {array ? 
          (
            <div className={`collapse__text collapse__text${estOuvert ? "--open" : "" }`}>
              <ul>
              {
              
                text.map( (ligne,index) => (

                  <li key={index + 1}>{ligne}</li>

                ))
              }
              </ul>
            </div>
          ) : (<p className={`collapse__text collapse__text${estOuvert ? "--open" : "" }`}>{text}</p>)
        }
      </div>
  )
}

export default Collapse
