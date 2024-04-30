import React from 'react'

const Card = (props) => {
  
    /* EXEMPLE 
        {
            "id": "c67ab8a7",
            "title": "Appartement cosy",
            "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
            "pictures": [
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
            ],
            "description": "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
            "host": {
                "name": "Nathalie Jean",
                "picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
            },
            "rating": "5",
            "location": "Ile de France - Paris 17e",
            "equipments": [
                "Équipements de base",
                "Micro-Ondes",
                "Douche italienne",
                "Frigo",
                "WIFI"
            ],
            "tags": [
                "Batignolle",
                "Montmartre"
            ]
        },
    */
    
    const titre = props.title;
    const photo = props.pictures[0];

    return (

        <div className='card'>
            <img src={photo} alt={titre} />
            <h3>{titre}</h3>
        </div>

    )

}

export default Card