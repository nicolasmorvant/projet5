# Kasa

![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white)
![](https://img.shields.io/badge/fontawesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)
![](https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white)
![](https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white)

## Contexte
## _Vous êtes développeur front-end en freelance pour Kasa, une entreprise de location d’appartements entre particuliers. Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d’appartements entre particuliers en France. Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel, qui est en freelance. Un gros chantier pour cette année !_

### 
###
## Mission
- Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives).

### 
###
## 🛠 Outils
- Create React App
- React Router
- Styling: Tout le style CSS doit être codé en utilisant Sass.
- Pas de librairie React externe


### 
###
## ⚙ Contraintes techniques
###
### React
_Il est impératif d’utiliser ces éléments de React pour un code de qualité :_

- Découpage en composants modulaires et réutilisables ;
- Un composant par fichier ;
- Structure logique des différents fichiers ;
- Utilisation des props entre les composants ;
- Utilisation du state dans les composants quand c'est nécessaire ;
- Gestion des événements ;
- Listes : React permet de faire des choses vraiment intéressantes avec les listes, en itérant dessus, par exemple avec map. Il faut les utiliser autant que possible.
###
### React Router
- Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement.
- Il existe une page par route.
- La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées.
- La logique du routeur est réunie dans un seul fichier
###
### Général
- Le code ne doit pas produire d'erreur ou de warning dans la console.


### 
###
## ⚙ Contraintes fonctionnelles
###
 - Pour le défilement des photos dans la galerie (composant Gallery) :
    - Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image. 
    - Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image. 
    - S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" ainsi que la numérotation n'apparaissent pas.
    - La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
###  
- Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page. 
    - Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
    - Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.



### 
###
## Recommandations
- Il est également recommandé, mais pas imposé, d’utiliser des composants
fonctionnels plutôt que des composants classes



### 
###
## Objectifs pédagogiques
- Configurer la navigation entre les pages de l'application avec React Router
- Développer des éléments de l'interface d'un site web grâce à des composants React
- Mettre en œuvre des animations CSS
- Développer une interface web avec Sass
- Initialiser une application avec Create React App



### 
###
## Projet de base

- URL du fichier JSON (servant de bdd) : https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json
- Outils et contraintes techniques : https://course.oc-static.com/projects/D%C3%A9veloppeur+Web/IW_P8+React+Kasa/Kasa+coding+guidelines+-+IW+-+DW.pdf
- Maquettes Figma : https://www.figma.com/file/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?type=design&node-id=0-1&mode=design
- Prototype : https://www.figma.com/proto/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?type=design&node-id=3-0&t=x8RBKuR4UiE3hhBW-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A0&show-proto-sidebar=1





### 
###
## Installation

```sh
# Création du répertoire
mkdir projet5
cd projet5

# Création de l'application avec create-react-app
npx create-react-app kasa
cd kasa

# Initialisation du répertoire github
git remote add origin git@github.com:nicolasmorvant/projet5.git
git add README.md
git commit -m "Création du README"
git push origin main
```

### 
###
## Ressources
- [Create React App](https://create-react-app.dev/docs/getting-started/)
- [React Router](https://reactrouter.com/en/main)


### 
###
## Cours

- [Débutez avec React](https://openclassrooms.com/fr/courses/7008001-debutez-avec-react) 
- [Créez une application React complète](https://openclassrooms.com/fr/courses/7150606-creez-une-application-react-complete)
- [Creéz des animations css modernes](https://openclassrooms.com/fr/courses/5919246-creez-des-animations-css-modernes)
- [Simplifiez vous le css avec Sass](https://openclassrooms.com/fr/courses/8069761-simplifiez-vous-le-css-avec-sass)
- [Écrivez la documentation technique de votre projet](https://openclassrooms.com/fr/courses/6398056-ecrivez-la-documentation-technique-de-votre-projet)


### 
###
## Réalisation

| Date | Réalisation |
| ------ | ------ |
| 29/04/2024| Création du projet|
|||
|||