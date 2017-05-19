## Présentation

[Sickadelic Posters](http://sickadelicposters.netlify.com/) est un projet pensé et développé par [Gabriel Claveau-Baril](http://gabrielbaril.ca/). Il consiste en une application Web de vente d'affiches aux styles minimalistes. Ce projet a été développé à l'aide de React.js.

## Environnement de développement

Ce projet fait utilisation du Boilerplate [Create React App](https://github.com/facebookincubator/create-react-app).

## Structure de dossier

```
sickadelicPosters/
  README.md
  grunt/                // Utiliser pour compiler less
  node_modules/
  package.json
  public/
    index.html          // Page HTML dans lequel sera rendu l'application
    favicon.ico
    img/
  src/
    App.js              // Container de l'application
    App.test.js
    index.js
    css/                // Dossier contenant les fichiers css compilés
    js/                 // Dossier contenant les scripts JS compilés
    Pages/
      404/              // Composants React en lien avec la page 404
      About/            // Composants React en lien avec la page À propos
      Contact/          // Composants React en lien avec la page Contact
      Index/            // Composants React en lien avec la page d'Accueil
      Product/          // Composants React en lien avec la page de Produit
      Shop/             // Composants React en lien avec la page Boutique
    php/                // Dossier contenant une copie des différents API
    sources/
      images/
      js/               // Dossier contenant les scripts JS non compilés
      less/             // Dossier contenant tous les fichiers less
      sass/             // Personnalisation du thème Snipcart
      snipcart-theme/   // Fork de snipcart-theme
        
```

## API

Les API PHP utilisés pour ce projet sont tous de ma propre conception. Ils sont actuellement hébergés sur un serveur externe privé. Vous pouvez cependant retrouver une copie de ceux-ci dans le dossier `PHP/`.

## ECommerce

Ce projet fait utilisation de [SnipCart](https://snipcart.com/) pour ce qui est de la portion ECommerce ainsi que de [Stripe](https://stripe.com/ca) pour le Payment Gateway.

## LESS & GRUNT

Tout les styles de cette application ont été développés à l'aide de [LESS](http://lesscss.org/) et par la suite compilés à l'aide de [GRUNT](https://gruntjs.com/).

## Serveur Local

Pour lancer le serveur local, il suffit d'éxécuter la commande suivante: 
### `npm start`

## Déploiement

Le prototype final de ce projet a été déployé à l'aide [Netlify](https://www.netlify.com/). Il est mis à jour automatiquement selon les updates de la branche production.
