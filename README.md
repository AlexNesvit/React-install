# 🟣 Projet d’apprentissage React avec TypeScript 🟣

## Ce projet a été conçu pour apprendre et pratiquer les concepts essentiels de React, le framework incontournable pour le développement d’interfaces utilisateur dynamiques et modernes. 🚀✨

### Objectifs du projet
•	Découvrir les composants React : apprendre à créer et réutiliser des composants de manière efficace.

•	Manipuler les props : comprendre leur rôle et apprendre à les typer avec TypeScript pour un développement robuste.

•	Utilisation du state : gérer l’état local des composants et explorer les hooks comme useState.

•	Affichage dynamique avec map : apprendre à répéter des blocs d’affichage en parcourant des listes.

•	Intégration du CSS dans React : styliser vos composants avec des fichiers CSS ou des modules CSS.

•	Partage de l’état global : utiliser useContext ou des solutions comme Redux pour partager l’état entre les composants.

•	Interaction avec les événements : comprendre et gérer les événements utilisateurs (clics, saisies, etc.).

### Public cible

Ce dépôt est parfait pour :
•	Les débutants qui souhaitent se lancer dans React avec des bases solides.

•	Les développeurs ayant une première expérience en JavaScript qui veulent découvrir les concepts avancés du développement frontend.

•	Ceux qui veulent s’initier à l’utilisation de TypeScript pour sécuriser et améliorer leur code React.

•	Les passionnés de développement frontend curieux d’explorer les mécanismes derrière les interfaces dynamiques.

### Structure du projet

Chaque étape de ce projet est conçue avec des explications claires et des exemples concrets pour renforcer vos compétences en :
1.	Création de composants réutilisables.
2.	Typage des props avec TypeScript.
3.	Gestion des états locaux et globaux.
4.	Application de styles personnalisés.
5.	Construction d’interfaces dynamiques avec des données.

## N’hésitez pas à explorer ce dépôt, suivre les étapes et construire vos premières applications React interactives ! 🌟


## `React` (aussi appelé `React.js` ou `ReactJS`) est une bibliothèque open source `JavaScript` pour créer des interfaces utilisateurs. Elle est maintenue par `Meta` (anciennement `Facebook`) ainsi que par une communauté de développeurs individuels et d'entreprises depuis 2013.

Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de `composants` dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état.

React est une bibliothèque qui ne gère que l'interface de l'application [...]


### Installation REACT

La commande d'installation peut changer en fonction de la version de npm que tu utilises !

N'hésite pas à regarder la documentation officielle en cas de doute.
`npm create vite@latest my-react-app`

À la question Select a framework, choisis `React`.
Puis, à la question Select a variant, choisis `Typescript`.
Rends-toi dans le répertoire créé avec la commande `cd`. Tu peux lister les fichiers créés par l'installateur avec la commande `ls`. 
Pour vérifier si ton installation fonctionne, tape la commande suivante pour lancer l'application React en mode "développement" :
`npm run dev`


## Ton premier composant

### La hiérarchie des composants

Dans `React`, les composants forment une hiérarchie. C'est-à-dire que certains composants sont imbriqués dans d'autres composants.

Souviens-toi au chapitre précédent : le composant App était le composant principal de notre application. C'est en fait le composant racine : App va contenir tous les composants de l'application, et ces composants seront imbriqués dans App.

Dans cette hiérarchie :

`App` contient les composants `Header`, `CardList` et `Footer`.
`CardList` contient plusieurs composants `Card`.

Point de vocabulaire : `App` est le composant parent de `Header`, `CardList` et `Footer`. Les composants `Header`, `CardList` et `Footer` sont conséquent des enfants de `App`.

Pourquoi utiliser des `composants` ?

Tu as plusieurs raisons d'utiliser des `composants` :

Les `composants` sont réutilisables et extensibles. Dans notre schéma précédent, nous allons créer une fois le `composant Card` et l'appeler plusieurs fois.

Le fait de pouvoir découper une interface complexe en `composants` permet de gagner du temps lors du développement (il est plus facile de répartir des `composants` à développer entre les membres d'une équipe) et lors des phases de debug (il est plus facile de s'y retrouver dans une architecture de fichiers où tout est bien rangé que dans un immense et unique fichier `HTML`).

Lorsque tu as des `composants` interactifs, le fait qu'ils aient leur propre code `JavaScript` permet de grandement limiter les bugs éventuels.

### Le `JSX`

Dans la suite des quêtes, nous allons parler régulièrement de `JSX`. Qu'est-ce que c'est ?

Le `JSX` est un language de balisage qui ressemble au `HTML`. Tu peux d'ailleurs y utiliser toutes les balises `HTML` existantes ou presque, ainsi que les attributs qui peuvent compléter ces balises.

Mais attention, le `JSX` n'est pas du `HTML` et il comporte des différences. Il est impossible d'utiliser des mots-clés réservés de `JavaScript` dans du `JSX` comme par exemple l'attribut class qui est également le mot-clé qui sert à déclarer une classe en `JavaScript`.

Le `JSX` permet d'inclure directement du code `JavaScript`, pour afficher le contenu d'une variable, rendre une liste d'éléments depuis un tableau, ajouter des conditions, etc.

Enfin, le `JSX` est ce que va retourner ton composant `React`.

Ouvre ton projet dans ton `IDE`. Commence par nettoyer ton composant `App` en remplaçant le code existant par celui-ci :
```bash
import "./App.css";

function App() {
  return (
    <section>
      <h1>Hello React</h1>
    </section>
  );
}
export default App;
```
Pour le moment, il affiche uniquement un titre `h1` dans une `section` (lance `npm run dev` pour voir l'application dans ton navigateur). Pour expérimenter, nous pouvons "exporter" ce `titre` sous forme d'un `composant` dans un fichier à part. Cela nous permettra de l'importer pour l'utiliser dans `App` ensuite.

Crée un fichier `MyTitle.tsx` et écris dedans le code suivant pour créer ton composant :
```bash
function MyTitle() {
  return <h1>Hello React</h1>;
}
export default MyTitle;
```

Dans `React`, il est impératif d'utiliser le `Pascal case` pour créer tes `composants`.

Une bonne pratique consiste à créer nos `composants` dans un répertoire `components` dans le dossier `src` du projet.

### Vous avez dit `import` / `export` ?

Dans l'exemple précédent, tu as déclaré le `composant` `MyTitle` avec le mot-clé function. Puis, tu as exporté ce `composant` avec les mots-clés `export` default. En faisant cela, tu as rendu disponible le ``composant MyTitle` à l'extérieur de ce fichier.

Maintenant si tu souhaites pouvoir utiliser ce `composant` dans le `composant App`, tu dois importer `MyTile` dans `App` en procédant comme suit :
```bash
import "./App.css";
import MyTitle from "./components/MyTitle";

function App() {
  return (
    <section>
      <h1>Hello React</h1>
    </section>
  );
}
export default App;
```
Maintenant, tu peux remplacer ton titre `h1` par le composant `MyTitle` que tu viens d'importer :
```bash
import "./App.css";
import MyTitle from "./components/MyTitle";

function App() {
  return (
    <section>
      <MyTitle />
    </section>
  );
}
export default App;
```
Si tu regardes dans ton navigateur, il n'y a aucune différence. Mais côté développeur, nous venons de créer notre premier `composant` réutilisable !

### Récapitulatif

Tu peux découper une interface utilisateur en plusieurs `composants`.
Un `composant` est un bloc réutilisable et extensible.
Tu peux créer une arborescence de `composants` potentiellement infinie dont la racine sera toujours `App`.
Pour pouvoir utiliser tes `composants`, tu utilises les `imports` et les `exports`.
Dans du `JSX`, tu peux appeler un `composant` par son nom comme si c'était une balise `HTML` auto-fermante.







