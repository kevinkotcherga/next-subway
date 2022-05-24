# README

## Installation et lancement de l'application en local 

```
git clone git@github.com:kevinkotcherga/next-subway.git
cd next-subway
npm i
npm start
```

## Version en ligne de l'application
https://nextsubway-7b41f.web.app/

# Mise en place

Début du projet à 14h20 

1- Recherche de l'API sur Google en tapant "API RATP", après 5 minutes de comparaisons et d'analyses j'ai décidé de chosir l'API https://github.com/pgrimaud/horaires-ratp-api qui est simple et rapide à utiliser.

2- Réflexion sur l'architecutre du projet et de la mise en page de l'application et des composants pendant 5 min, sur papier.

3- 15h50, après 1h30 l'application était fonctionnel. Je suis passé à la création des messages d'erreurs quand les horraires ne s'affichent pas

4- J'ai mis en place le responsive design 

5- Réflexion sur l'utilisation du paquet `react-router-dom@6.3.0` pour gérer les paramètres du formulaire via l'url

6- 16h20, je découvre et mets en place le déploiement avec firebase hosting

7- 16h45 fin du projet, application déployé et fonctionnel. J'aurais passé envion 2h20 sur le projet.

# Bilan

### Deux difficultés
- Sur l'application modèle, lorsque l'on clique sur "Sélectionner une ligne..." après avoir séléctionner une station, le formulaire se remet à 0. J'ai passé trop de temps à réfléchir comment faire cette fonctionnalité et je suis donc passer à la suite pour ne pas perdre trop de temps.
- J'ai compris l'utilité de react-router-dom@6.3.0 pour gérrer les paramètres du formulaire via l'url mais je n'ai pas rapidement trouver le moyen de l'installer et je suis donc passé à la suite.

### Deux réussites
- Je suis satisfait d'avoir réussi à rendre l'application fonctionnel en 1h30.
- J'ai découvert Firebase Hosting mais je n'ai finalement pas passé trop de temps dessus.

### Deux évolutions possibles
- Avec plus de temps j'aurais d'abord réaliser ce que je n'ai pas pu faire dans mes deux difficultés, j'aurais ensuite ajouté des tests et Typescript à l'application
- L'application pourrait évoluer en ajoutant des favoris 
