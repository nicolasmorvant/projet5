import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Slideshow from '../../components/Slideshow'
import Rating from '../../components/Rating'
import Tag from '../../components/Tag'
import Collapse from '../../components/Collapse'
import '../../styles/Logement/Logement.css'
import logements from '../../logements.json'

const Logement = () => {
    //console.log(logements)

    //RÉCUPÉRATION DU PARAMÈTRE DYNAMIQUE DU LIEN
    const { logementId } = useParams()

    //console.log(logementId);

    //RÉCUPÉRATION DES DONNÉES DU LOGEMENT AYANT L'ID logementId
    const logementInfos = logements.find(
        (logement) => logement.id === logementId,
    )

    //console.log(logementInfos);

    //SI LES INFORMATIONS N'ONT PAS ÉTÉ RÉCUPÉRÉES
    if (!logementInfos) {
        return <Navigate to="/404" replace={true} />
    }
    //LES INFORMATIONS ONT ÉTÉ RÉCUPÉRÉES
    else {
        return (
            <main className="main">
                <Slideshow
                    images={logementInfos.pictures}
                    text={logementInfos.title}
                />

                <section className="logement">
                    <div className="logement__infos">
                        <h2 className="logement__title">
                            {logementInfos.title}
                        </h2>
                        <h3 className="logement__area">
                            {logementInfos.location}
                        </h3>
                    </div>
                    <div className="logement__host">
                        <h3 className="logement__name">
                            {logementInfos.host.name}
                        </h3>
                        <img
                            className="logement__picture"
                            src={logementInfos.host.picture}
                            alt={`Profil de ${logementInfos.host.name}`}
                        />
                    </div>
                    <div className="logement__tags">
                        {logementInfos.tags.map((tag, index) => (
                            <Tag key={index + 1} text={tag} />
                        ))}
                    </div>
                    <div className="logement__rating">
                        <Rating rate={logementInfos.rating} />
                    </div>
                    <div className="logement__descEquip">
                        <div className="logement__description">
                            <Collapse
                                title={'Description'}
                                text={logementInfos.description}
                                array={false}
                            />
                        </div>
                        <div className="logement__equipments">
                            <Collapse
                                title={'Équipements'}
                                text={logementInfos.equipments}
                                array={true}
                            />
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Logement
