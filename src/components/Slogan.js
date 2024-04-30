import React from 'react'
import "../styles/Slogan.css"
import imgBackground from "../assets/img/falaise.png"

const Slogan = () => {
  
  return (
    <section id='slogan'>
      <img src={imgBackground} alt="Falaise en bord de mer" />
      <h1>Chez vous, partout et ailleurs</h1>
    </section>
  )

}

export default Slogan
