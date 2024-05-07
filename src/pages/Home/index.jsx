import React from 'react'
import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'
import imgBackground from '../../assets/img/falaise.webp'

const Home = () => {
  return (

    <main className="main">
      <Banner img={imgBackground} alt="Falaise en bord de mer" text="Chez vous, partout et ailleurs"/>
      <Gallery />
    </main>
  
  )
}

export default Home

