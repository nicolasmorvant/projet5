import React from 'react'
import '../styles/Footer.css'
import logo from '../assets/logo.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <img src={logo} alt="Logo du site Kasa" className="footer__img" />
            <h2 className="footer__title">© 2020 Kasa. All rights reserved</h2>
        </footer>
    )
}

export default Footer
