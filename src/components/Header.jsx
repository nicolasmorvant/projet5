import React from 'react';
import '../styles/Header.css'
import logo from '../assets/logo.svg';  

const Header = () => {

    return (
        
        <header className='header'>
            <img src={logo} alt="Logo du site Kasa" className='header__logo' />
            <nav className='navbar'>
                <ul className='navbar__list'>
                    <li className='navbar__item'>
                        <a href="index.html" className='navbar__link navbar__link--selected'>Accueil</a>
                    </li>
                    <li className='navbar__item'>
                        <a href="index.html" className='navbar__link'>A Propos</a>
                    </li>
                </ul>
            </nav>
        </header>

    );

}

export default Header