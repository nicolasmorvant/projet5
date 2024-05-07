import React from 'react'
import '../styles/Header/Header.css'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Logo du site Kasa" className="header__logo" />
            <nav className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <Link to="/" className="navbar__link navbar__link--selected">Accueil</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/about" className="navbar__link">A Propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
