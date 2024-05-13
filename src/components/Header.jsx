import React, { useState, useEffect } from 'react'
import '../styles/Header/Header.css'
import logo from '../assets/logo.svg'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    //DÉFINITION D'UN STATE POUR LA PAGE ACTIVE
    const [estActive, setEstActive] = useState('Accueil')

    //OBJET DE L'EMPLACEMENT ACTUEL (window.location)
    const objetPage = useLocation()

    //ÉQUIVALENT window.location.pathname
    const pageActive = objetPage.pathname

    useEffect(() => {
        if (pageActive === '/') {
            setEstActive('Accueil')
        } else if (pageActive === '/about') {
            setEstActive('A Propos')
        } else {
            setEstActive('')
        }
    }, [pageActive])

    return (
        <header className="header">
            <img src={logo} alt="Logo du site Kasa" className="header__logo" />
            <nav className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <Link
                            to="/"
                            className={`navbar__link ${estActive === 'Accueil' ? 'navbar__link--selected' : ''}`}
                            onClick={() => setEstActive('Accueil')}
                        >
                            Accueil
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link
                            to="/about"
                            className={`navbar__link ${estActive === 'A Propos' ? 'navbar__link--selected' : ''}`}
                            onClick={() => setEstActive('A Propos')}
                        >
                            A Propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
