import React from 'react';
import '../styles/Header.css'
import logo from '../assets/logo.svg';  

const Header = () => {

    return (
        
        <header>
            <img src={logo} alt="Logo du site Kasa" id='logo' />
            <nav>
                <ul>
                    <li>
                        <a href="index.html" className='selected'>Accueil</a>
                    </li>
                    <li>
                        <a href="index.html">A Propos</a>
                    </li>
                </ul>
            </nav>
        </header>

    );

}


export default Header 