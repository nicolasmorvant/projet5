import React from 'react'
import {useParams, Navigate} from 'react-router-dom'
import Banner from '../../components/Banner'
import Rating from '../../components/Rating'
import Tag from '../../components/Tag'
import '../../styles/Logement/Logement.css'
import logements from "../../logements.json"

const Logement = () => {

    //console.log(logements)

    const {logementId} = useParams();

    //console.log(logementId);

    const logementInfos =  logements.find( (logement) => logement.id === logementId )

    console.log(logementInfos);

    if(!logementInfos)
    {
      return <Navigate to='/404' replace/>
    }
    else
    {
      return (

        <main className="main">
          
          <Banner img={logementInfos.cover} alt={logementInfos.title} text="" nav={true}/>

          <section className="logement">
            <div className="logement__infos">
              <h2 className="logement__title">{logementInfos.title}</h2>
              <h3 className="logement__area">{logementInfos.location}</h3>
            </div>  
            <div className="logement__host">
              <h3 className='logement__name'>
                {logementInfos.host.name}
              </h3>
              <img className='logement__picture' src={logementInfos.host.picture} alt={`Profil de ${logementInfos.host.name}`} />
            </div>
            <Tag tags={logementInfos.tags}/>
            <Rating rate={logementInfos.rating} />
          </section>

        </main>

      )
      
    }

}

export default Logement