import React from 'react'
import '../styles/Footer.css'
import logo from "../assets/logo.svg"

const Footer = () => {
  return (

    <footer>
        <img src={logo} alt="Logo du site Kasa" />
        <h2>© 2020 Kasa. All rights reserved</h2>
    </footer>
  
    )
}

export default Footer