import React from 'react'
import '../../styles/Error404/Error404.css'
import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <main className="main">
            <section className="error">
                <h2 className="error__titre">404</h2>
                <p className="error__message">
                    Oups! La page que <br />
                    vous demandez n'existe pas.
                </p>
                <Link to="/" className="error__link">
                    Retourner sur la page d'accueil
                </Link>
            </section>
        </main>
    )
}

export default Error404
