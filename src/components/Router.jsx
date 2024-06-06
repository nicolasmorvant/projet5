import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from '../pages/Home'
import About from '../pages/About'
import Logement from '../pages/Logement'
import Error404 from '../pages/Error404'

const Router = () => {
    return (
        <BrowserRouter basename="/projet5">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/logement/:logementId" element={<Logement />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router
