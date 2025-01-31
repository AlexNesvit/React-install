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


## Afficher des données dans un composant

### Petit retour sur le JSX

Comme nous l'avons dit dans la quête précédente, `JSX` te permet de mettre du balisage dans du `JavaScript`. Dans ce balisage, les accolades te permettent de "revenir" en `JavaScript` afin d'intégrer une `variable` de ton code et l'afficher :
```bash
function SayHello() {
  const message = "Hello !";

  return <p>{message}</p>
}
export default SayHello;
```
Attention, le `JSX` supporte uniquement l'affichage des `types primitifs` !

Tu peux également y exécuter du `JavaScript` :
```bash
function SayHello() {
  const message = "Hello !"
  return <p>{message.toUpperCase()}</p>
}
export default SayHello;
```
Comme tu peux le constater, nous avons mis la chaîne de caractères message en majuscules. Cela fonctionne car la méthode `toUpperCase` retourne une valeur de type `String` qui est un type `primitif`.

Attention, néanmoins, tu ne peux pas exécuter n'importe quel code `JavaScript` dans du `JSX`.

Ce qui est important de retenir ici c'est que lorsque que tu écris du code `JavaScript` entre accolades `{}` dans du `JSX`, celui-ci va être interprété.

### Expressions VS Instructions

En `JavaScript`, tu dois bien distinguer les expressions qui retournent une valeur des instructions qui peuvent servir à tester des valeurs comme un `if` ou bien à répéter d'autres instructions comme un `for`.

Maintenant que nous distinguons bien la différence entre `expressions` et `instructions`, et bien, tu dois retenir que dans le `JSX`, tu peux uniquement utiliser des `expressions` !

### Démonstration

Prenons un exemple. Si en fonction d'un mot particulier nous souhaitons afficher une icône correspondante dans du `JSX` nous procéderions comme suit :
```bash
function WeatherIcon() {
  const weather = "sunny";
  return <p>{weather === "sunny" ? "☀️" : "☁️"}</p>
}
export default WeatherIcon;
```
Ici, nous avons mis une condition grâce à `l'opérateur ternaire` qui est une `expression JavaScript`.
Change la valeur de la `variable weather` ("rainy" par exemple) et tu verras apparaitre le nuage à la place du soleil.

Comment faire lorsque nos conditions sont plus complexes ou lorsque nous devons utiliser plusieurs `instructions` ?

Tu peux créer une fonction qui renvoie une valeur !
```bash
function WeatherIcon() {
  const weather = "sunny";
  const printIcon = (name) => {
    const weatherMap = {
      sunny: "☀️",
      cloudy: "☁️",
      rainy: "🌧️",
      stormy: "🌩️"
    }  
    return weatherMap[name]
  }
  return <p>{printIcon(weather)}</p>
}
export default WeatherIcon;
```
Ici, nous avons utilisé une fonction comme `expression` pour gérer la logique en dehors du `JSX`. L'appel de fonction `printIcon`(weather) est une `expression` et retourne une `valeur primitive` : elle peut être utilisée à l'intérieur du `JSX`.

Tu peux t'amuser à changer la `valeur` de la `variable` weather pour voir les icônes changer.


## Passer des `props`

### Passer des données d'un `composant` à un autre grâce aux `props`

Si tu te souviens bien, nous avons vu la hiérarchie des `composants` dans `React`. Les `props` dans `React` permettent de faire passer des informations d'un `composant` à un autre. Mais attention : les `props` peuvent être transmises uniquement d'un `composant parent` vers un `composant enfant`.

Tu peux voir que `App` peut transmettre des `props` à chacun de ses `composants Card`. Chaque `composant Card` peut lui-même transmettre des `props` à son `composant Button`.

### Comment procéder ?

Garde en tête que les `composants React` sont des `fonctions`. Tu peux imaginer le code suivant en `JavaScript "vanilla"` :
```bash
import App from "./App";
App();
```
Dans `App.js`, nous avons créé une `fonction App` et `importé` une `fonction SayHello` depuis un autre fichier (`SayHello.js`). La fonction `SayHello` attend en paramètre une chaine de caractère que nous lui passons lors de l'appel dans `App` :
`SayHello("Wilder")`

En `React`, la même chose donnerait :
```bash
import SayHello from "./SayHello";
function App() {
  return SayHello("Wilder");
}
export default App;
```
Une grosse différence : c'est `React` qui gère la manipulation du `DOM` à notre place. Cette partie du code dans le premier exemple a disparu :
`document.body.innerText =`

Dans `React`, tu dois passer les `props` au travers d'un `objet` et non pas directement la valeur comme dans `SayHello("Wilder")`. Si par le plus grand des hasards tu appelles cet `objet props` dans le composant `SayHello`, cela donne :
```bash
import SayHello from "./SayHello";
function App() {
  return SayHello({name: "Wilder"});
}
export default App;
```
Dans `React`, le nom `props` est une convention pour le premier paramètre d'une `fonction composant`. Ici, c'est le paramètre qui représente `l'objet` avec toutes les `valeurs` envoyées du `composant` parent `App` au `composant` enfant `SayHello`.

Dernier point : dans `React`, tu manipules tes `composants` avec la syntaxe `JSX`. Plutôt que la syntaxe `JS SayHello({name: "Wilder"})`, tu peux appeler tes `composants` avec la syntaxe `JSX` et passer tes `props` comme tu utiliserais des attributs en `HTML` :
```bash
import SayHello from "./SayHello";
function App() {
  return <SayHello name="Wilder" />;
}
export default App;
```
Dans notre `composant App`, nous avons appelé notre `composant SayHello` en lui passant en props un couple `clé/valeur` : la `clé` est name et la `valeur` est `"Wilder"`.

En fait, `props` est un `objet` qui contient toutes les `clés/valeurs` passées au `composant`. Tu peux le voir dans cet exemple :
```bash
import SayHello from "./SayHello";
function App() {
  return <SayHello name="Alice" age={25} />;
}
export default App;
```
Tu peux voir que la syntaxe est différente pour `name` et pour `age`. Les chaînes de caractères peuvent être passées dans les `props` avec des `""` comme les attributs `HTML`. C'est le cas pour `name="Alice"`.

Pour toutes les autres `valeurs` (`nombre`, `objet`, `variable`...), tu dois utiliser des `{}` pour entourer ta `valeur` `JavaScript`. C'est le cas pour `age={25}`.

### Quelles valeurs je peux faire passer en props ?

Dans `react`, tu peux passer n'importe quel type de `valeur` en `props` à tes `composants`. Des `types primitifs` (`string`, `number`, `boolean`...) et `non primitifs` (`function`, `object`) :
```bash
import Cart from "./Cart"
function App() {
  const product = {
    name: "apples",
    price: 1.5,
    quantity: 2
  }
  const calculate = (product) => product.price * product.quantity
  return <Cart product={product} calculate={calculate} />;
}
export default App;
```
Attention cependant à la façon dont tu passes tes `props`. Seules les chaînes de caractères statiques comme `"Hello wilder !"` peuvent être passées entre guillemets. `Expressions`, `variables`, `fonctions` et même les `template strings` doivent être passées entre accolades.

### Rendre les choses plus lisibles

Une dernière chose : tu peux déstructurer `l'objet` `props` dans le `composant` qui l'utilise.

Reprenons notre `composant Cart` qui actuellement ressemble à ceci :
```bash
function Cart(props) {
  return `You bought ${props.product.quantity} ${props.product.name} for ${props.calculate(props.product)}€`;
}
export default Cart;
```
Tu peux déstructurer l'objet `props` afin d'améliorer la lisibilité :
```bash
function Cart(props) {
  const { product, calculate } = props;
  return `You bought ${product.quantity} ${product.name} for ${calculate(product)}€`;
}
export default Cart;
```
Le `JSX` est plus lisible de cette manière. Pour aller plus loin, tu peux déstructurer tes `props` directement dans les paramètres de ta `fonction composant` :
```bash
function Cart({ product, calculate }) {
  return `You bought ${product.quantity} ${product.name} for ${calculate(product)}€`;
}
export default Cart;
```
C'est cette syntaxe nous utiliserons par défaut.

### Récapitulatif

Les `props` sont toujours passées d'un `composant parent` vers un `composant enfant`.

Le mot-clé `props` est une `convetion` pour l'objet en `paramètre` d'une `fonction composant`.

Les `props` peuvent être de n'importe quel `type`.

Les `props` sont toujours en lecture seul.


## Une histoire de contrats

Tu as peut-être déjà entendu parler d'interfaces en programmation, sans rentrer dans les détails de la `programmation orienté objet`, une interface en programmation est un contrat (un ensemble de conditions) que doivent remplir deux parties afin de pouvoir interagir ensemble.

Comme dans le monde réel lorsque tu loues quelque chose : tu signes (et respectes !) un contrat qui te permet d'accéder à un bien ou à un service.

Qu'est-ce que ces histoires de contrat ont à voir avec `React` alors !? `TypeScript` fournit un système d'interfaces !

Pour le moment, lorsque tu passes tes `props` d'un composant à un autre, tu peux passer n'importe quel type de données :
```bash
function SayHello({name, age}) {
  return <p>Hello, my name is {name}, and i'm {age}.</p>;
}
function App() {
  return <SayHello name="Wilder" age={22} />;
} 
export default App;
```
En tant qu'être humain, tu peux te tromper sur les types ou bien omettre de passer des `props` qui sont nécessaires au bon fonctionnement de ton composant :
```bash
function SayHello({name, age}) {
  return <p>Hello, my name is {name}, and i'm {age}.</p>;
}
function App() {
  return <SayHello name={22} age="Wilder" />;
} 
export default App;
```

### Comment ça marche ?

Prenons un premier exemple (tiré de la doc officielle de `TypeScript`) :
```bash
function printCoord(pt) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
printCoord({ X: 100, Y: 100 }); // can you see the problem ?
```
J'ai volontairement fait une faute de frappe sur la dernière ligne : `X` et `Y` sont en majuscules. Ce sont des choses qui arrivent, mais rien en JavaScript ne permet de détecter ce genre d'erreur : la syntaxe du code est valide.

Avec `TypeScript`, tu peux déclarer explicitement le type d'une `variable` ou d'un `paramètre` de fonction. Par exemple, tu peux préciser qu'un paramètre est un nombre en ajoutant : number derrière le nom du paramètre :
```bash
function foo(x: number) {
  console.log(x);
}
foo(42); // ok
foo("42"); // no !!!
```
Pour tes déclarations, tu peux également utiliser les types `string`, `boolean`... et des `types complexes` comme les `tableaux` et `objets`. Pour un `objet`, tu peux déclarer une interface avec toutes ses `propriétés`. Par exemple, pour un point avec des coordonnées `x` et `y` :
```bash
interface Point {
  x: number;
  y: number;
}
```
Tu peux ensuite utiliser ton interface `Point` pour typer une `variable` ou un paramètre en précisant : `Point.` C'est la même syntaxe que pour les `types primitifs` `number` ou `string` :
```bash
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
```
Le code complet :
```bash
interface Point {
  x: number;
  y: number;
}
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
} 
printCoord({ x: 100, y: 100 });
printCoord({ X: 100, Y: 100 }); // error !!!
```

Tu peux utiliser le même genre de contrat pour typer les `props` d'un composant `React` :
```bash
interface SayHelloProps {
  name: string;
  age: number;
}
function SayHello({name, age}: SayHelloProps) {
  return <p>Hello, my name is {name}, and i'm {age}.</p>;
}
function App() {
  return <SayHello name="Wilder" age={22} />;
} 
export default App;
```
Cette fois, `TypeScript` vérifie la cohérence de ton code et te prévient en cas d'erreur.



Comme tu as vu dans l'exemple précédent, nous avons forcé le passage des `props`, qui sont donc désormais obligatoires. Mais comment faire si des propriétées sont optionnelles ?

Dans `TypeScript`, tu peux ajouter le signe `?` sur ces propriétés pour préciser qu'elle sont optionnelles :
```bash
interface SayHelloProps {
  name: string;
  age?: number;

function SayHello({ name, age }: SayHelloProps) {
  return (
    <p>
      Hello, my name is {name}
      {age != null && `, and I'm ${age}.`}
    </p>
  );
}
function App() {
  return (
    <>
      <SayHello name="Wilder" age={22} />
      <SayHello name="Toto" /> {/* Pas d'âge fourni ici */}
    </>
  );
}
export default App;
```

### Récapitulatif

Tu as vu comment typer les props avec `TypeScript` avec une interface. Tu peux utiliser des types primitifs pour tes `props` comme `number`, `string` `boolean`... Mais également des `tableaux`, des `objets` et bien plus encore :
```bash
interface SayHelloProps {
  name: string;
  address: {
    city: string;
  };
}

function SayHello({ name, address }: SayHelloProps) {
  return (
    <p>
      Hello, my name is {name}, and I live in {address.city}.
    </p>
  );
}
function App() {
  return <SayHello name="Wildo" address={{ city: "Reims" }} />;
} 
export default App;
```


## 👩‍🏫 React Basics 06 - Utiliser un state


### Le state

Nous avons vu au travers des quêtes précédentes comment récupérer des valeurs venant de l'extérieur d'un `composant` grâce aux `props`. Nous allons maintenant voir comment gérer des valeurs dynamiques à l'intérieur d'un `composant` grâce au `state`.

Dans `React`, un "`state`" est géré avec des fonctions de type "`hook`" : ce sont des fonctions dont le nom commence par `use`. Dans le cas d'un `state`, tu vas "prévenir" `React` que tu veux utiliser un `état` à l'intérieur de ton `composant` avec le `hook useState` (littéralement, "utiliser un état"). Comment ça se présente ?

Regardons déjà ce que nous retourne ce fameux `hook useState` :
```bash
import { useState } from "react";
function App() {
  const state = useState("hello");
  console.log(state)
  return <p>Hello world !</p>;
}
export default App;
```

Tu peux voir que `useState` te renvoie un `tableau` avec deux éléments : le premier est une `valeur`, et le second est une `fonction dispatchSetState`.

Le premier élément de ce `tableau` est en fait la `valeur dynamique` que nous voulons manipuler dans notre `composant` : cela pourrait être un état coché/décoché par exemple. La `chaine de caractères` "`hello`" en pramètre du `useState` est la `valeur initiale` : vois ça comme la valeur par défaut d'une case à cocher.

Le second élément est une `fonction` qui va te permettre de mettre à jour la première `valeur` qui représente le `state`.

Pour modifier la valeur d'un state tu dois toujours utiliser la fonction prévue à cet effet.

Tu peux récupérer ces 2 éléments du tableau retourné par `useState` dans des variables pour plus de lisibilité :
```bash
  const state = useState("hello");
  const message = state[0];
  const setMessage = state[1];
  ```
Pour aller plus vite, l'usage dans React est d'utiliser cette écriture avec une destructuration du tableau :
`  const [message, setMessage] = useState("hello");`

Par convention, tu dois nommer le "setter" d'un `state` par le nom de la variable précédé du mot set : si le state est stocké dans une variable `foo`, alors tu dois nommer le setter `setFoo`.

Un autre exemple avec un état "compteur" (`count`) (valeur initiale : `0`) :
```bash
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  console.log(count);
  return <p>Hello world !</p>;
}
export default App;
```

### Comment utiliser le `state` ?

Avant de commencer, nous allons introduire une notion que nous verrons plus en détail dans la suite du parcours : les event listeners.

En `React` pour placer un event listener sur un bouton par exemple, tu peux procéder comme suit :
```bash
function App() {
  const handleClick = () => {
    console.log("you clicked");
  };
  return <button type="button" onClick={handleClick}>Click</button>;
}
export default App;
```
Comme tu peux le voir, nous avons placé un attribut `onClick` sur le button rendu par notre `JSX`, auquel nous avons assigné une `fonction de callback` qui prend en paramètre l'événement déclenché au click.

Tu as défini la fonction `handleClick` et tu l'as ensuite transmise à `<button>` en tant que paramètre. `handleClick` est un gestionnaire d'évènements. Les fonctions de gestion d'évènements :

Doivent être définies à l'intérieur des composants si elles utilisent un ou plusieurs setters de `state`.
Par convention, elles ont un nom qui commence par `handle`, suivi du nom de l'événement.

Tu verras ainsi souvent `onClick={handleClick}`, `onMouseEnter={handleMouseEnter}`, etc.

Si tu transposes ça à du `JavaScript vanilla`, cela revient exactement au même de faire :
```bash
const btn = document.createElement("button");
btn.textContent = "Click";
const handleClick = () => {
  console.log("you clicked");
};
btn.addEventListener("click", handleClick);
document.body.appendChild(btn);
```
Les fonctions transmises aux gestionnaires d'événements doivent être transmises et non appelées. Par exemple :

le passage d'une fonction est correct :` <button onClick={handleClick}>`
l'appel d'une fonction est incorrect : `<button onClick={handleClick()}>`

La différence est subtile. Dans le premier exemple, la fonction `handleClick` est transmise en tant que gestionnaire d'évènement. Cela indique à `React` de s'en souvenir et de n'appeler notre fonction que lorsque l'utilisateur clique sur le bouton (`onClick`).

Dans le deuxième exemple, le () à la fin de `handleClick()` lance la fonction immédiatement pendant le rendu, sans aucun `clic`. Cela s'explique par le fait que le `JavaScript` contenu dans les `JSX {` et `}` s'exécute immédiatement.

Revenons-en maintenant au state.

Si nous souhaitons modifier le state d'un composant, nous pouvons le faire, par exemple, suite à une action de l'utilisateur :
```bash
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1)
  };
  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={handleClick}>Click</button>
    </div>
  );
}
export default App;
```
Dans cet exemple, lorsque tu cliques sur le bouton, le compteur est incrémenté de 1. Et... L'affichage se met automatiquement à jour !

C'est là tout l'intérêt du `state` : lorsque tu modifies un `state` avec son setter, alors ton `composant` est rendu à nouveau : tout le code qui se trouve à l'intérieur est re-exécuté et l'affichage est mis à jour avec le nouveau `JSX` retourné.

### Primitive / Non Primitive

Nous avons vu précédemment comment mettre à jour un `state` avec des valeurs `primitives` (des nombres). Qu'en-est-il des valeurs `non primitives` comme les `objets` ?

Eh bien souviens-toi qu'une variable ne contient pas réellement l'objet, mais plutôt une référence vers celui-ci. Nous devons donc produire un nouvel objet pour rendre la modification "visible", comme suit :
```bash
import { useState } from "react";
function App() {
  const [user, setUser] = useState({name: "Bob"});
  const handleClick = () => {
    // user.name = "Alice"; => NO !!!
    setUser({ name: "Alice" })
  }
  return (
    <div>
      <p>{user.name}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
export default App
```
Rappel : Pour modifier la valeur d'un `state`, tu dois toujours utiliser le setter de ce `state`.


## `React` Basics 07 - Pokédex - Répéter un bloc d'affichage avec `map`

### Petit retour sur les expressions

Tu as appris que pour répéter des instructions, tu dois utiliser des boucles (`for/while`).

Malheureusement, dans le return d'une fonction composant, tu peux uniquement te servir d'expressions. Quelque soit la façon de l'écrire, une construction `return` for ne fonctionne pas en `JS/TS` :
```bash
function App() {
  const cart = ["apple", "banana", "grape", "watermelon"];
  return (
    <div>
      <h1>shopping list</h1>
      <ul>
        {for (const article of cart) {
          <li>{article}</li>
        }}
      </ul>
    </div>
  );
}
export default App;
```
Heureusement, le `JavaScript` nous fournit de nombreuses `méthodes` pour interagir avec les tableaux (listes de données). Ces `méthodes` sont des expressions puisqu'elles retournent une valeur. Une méthode des tableaux qui va beaucoup nous intéresser dans React est la `méthode map`.

### Comment ça marche ?
```bash
function App() {
  const cart = ["apple", "banana", "grape", "watermelon"];
  return (
    <section>
      <h1>shopping list</h1>
      <ul>
        {cart.map((article) => (
          <li>{article}</li>
        ))}
      </ul>
    </section>
  );
}
export default App;
```
Dans cet exemple, nous avons utilisé la méthode `map()` sur notre tableau d'articles. Pour chaque article, l'expression construit un `<li>` avec la valeur contenue à cet index `🪄`.

Tu peux faire la même chose avec des structures de données plus complexes (tout en respectant la règle selon laquelle, entre des accolades `{}`, le `JSX` ne peut afficher que des types primitifs) :
```bash
function App() {
  const cart = [
    { name: "apple", emoji: "🍏" },
    { name: "banana", emoji: "🍌" },
    { name: "grape", emoji: "🍇" },
    { name: "watermelon", emoji: "🍉" },
  ];
  return (
    <section>
      <h1>shopping list</h1>
      <ul>
        {cart.map((product) => (
          <li>
```
Tu peux aussi le faire avec des composants react en passant les valeurs en props :
```bash
interface ArticleProps {
  name: string;
  emoji: string;
}
function Article({ name, emoji }: ArticleProps) {
  return (
    <li>
      {emoji} {name}
    </li>
  );
}
function App() {
  const cart: ArticleType[] = [
    { name: "apple", emoji: "🍏" },
    { name: "banana", emoji: "🍌" },
    { name: "grape", emoji: "🍇" },
    { name: "watermelon", emoji: "🍉" },
  ];
  return (
    <section>
      <h1>shopping list</h1>
      <ul>
        {cart.map((article) => (
          <Article name={article.name} emoji={article.emoji} />
        ))}
      </ul>
    </section>
  );
}
export default App;
```
Dans la littérature, cela s'appelle le `component mapping` !

Regarde le dernier exemple : dans la console, un message y apparaît 🤨 (il apparaît en réalité sur tous les exemples précédents).

Le message t'indique que dans les éléments produits par notre `map`, tu dois renseigner une prop `key`. Aussi, le message te renvoie vers une page de la documentation.


### Comprendre les clés

Afin que `React` puisse identifier quel élément d'une liste de données (un tableau) est contenu dans le `JSX`, il a besoin d'un identifiant unique. Cet identifiant prend la forme d'une `props` que tu dois passer à chaque noeud `JSX` produit par un `map`. Cette `props` se nomme `key` (c'est un mot-clé réservé).

Concrètement ça donne :
```bash
function App() {
  const cart = [
    { name: "apple", emoji: "🍏" },
    { name: "banana", emoji: "🍌" },
    { name: "grape", emoji: "🍇" },
    { name: "watermelon", emoji: "🍉" },
  ];
  return (
    <section>
      <h1>shopping list</h1>
      <ul>
        {cart.map((article, index) => (
          <li key={index}>
            {article.emoji} {article.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
export default App;
```
Ici nous avons pris l'index du tableau auquel se trouve l'élément que l'on injecte dans le `JSX`, et comme tu peux le constater, l'erreur n’apparaît plus !

Cependant...

!!! Utiliser l'index d'un tableau est acceptable uniquement si le tableau n'est pas amené à être muté.

Pour faire simple, la plupart du temps c'est une mauvaise pratique.

Considère le code suivant :
```bash
import { useState } from "react";
const initialCart = [
  { name: "apple", emoji: "🍏" },
  { name: "banana", emoji: "🍌" },
  { name: "grape", emoji: "🍇" },
  { name: "watermelon", emoji: "🍉" },
];
function App() {
  const [cart, setCart] = useState(initialCart);
  const removeArticle = (article) => {
    setCart(cart.filter((item) => item !== article));
  };
  return (
    <section>
      <h1>shopping list</h1>
      <ul>
        {cart.map((article, index) => (
          <li key={index}>
            {article.emoji} {article.name}
            <input type="text" defaultValue={article.name} />
            <button onClick={() => removeArticle(article)}>remove</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default App;
```
Dans cet exemple, j'ai implémenté une fonction qui permet de supprimer l'élément avec un bouton à cliquer.

Supprime un élément de la liste et tu va constater un bug évident : le texte présent dans l'input ne correspond plus à l'item du tableau !

Pourquoi ? Parce que React optimise le rendu en ne recalculant l'affichage que des éléments dont la key a changé. Comme tu décales tous les indexes du tableau au moment de la suppression, c'est l'élément présent à l'ancien index qui s'affiche.

Ce que tu dois retenir :

    Utilise un identifiant unique et invariant à chaque élément que tu veux mapper.

Voici un exemple qui fonctionne :
```bash
import { useState } from "react";
const initialCart = [
  { name: "apple", emoji: "🍏" },
  { name: "banana", emoji: "🍌" },
  { name: "grape", emoji: "🍇" },
  { name: "watermelon", emoji: "🍉" },
];
function App() {
  const [cart, setCart] = useState(initialCart);
  const removeArticle = (article) => {
    setCart(cart.filter((item) => item !== article));
  };
  return (
    <section>
      <h1>shopping list</h1>
      <ul>
        {cart.map((article) => (
          <li key={article.name}>
            {article.emoji} {article.name}
            <input type="text" defaultValue={article.name} />
            <button onClick={() => removeArticle(article)}>remove</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default App;
```
Ici, nous avons utilisé le nom de l'article comme clé. Il est unique, donc le rendu est cohérent.

Dans ce cas, nous avons eu de la chance car tous les noms des articles sont uniques. Avec un jeu de données réelles, tu dois t'assurer que chaque donnée possède bien un identifiant unique.

### Et c'est tout ?

Bien-sûr que non ! Qui dit tableau, dit méthode de tableau. Voici un petit exemple :
```bash
function Article({ name, emoji }) {
  return (
    <li>
      {emoji} {name}
    </li>
  );
}
function App() {
  const cart = [
    { name: "apple", emoji: "🍏" },
    { name: "banana", emoji: "🍌" },
    { name: "grape", emoji: "🍇" },
    { name: "watermelon", emoji: "🍉" },
  ];
  return (
    <section>
      <h1>shopping list</h1>
      <ul>
        {cart
          .filter((article) => article.name.includes("e"))
          .map((article) => (
            <Article
              key={article.name}
              name={article.name}
              emoji={article.emoji}
            />
          ))}
      </ul>
    </section>
  );
}
export default App;
```
Dans cet exemple, nous avons filtré le tableau du state afin de ne récupérer que les fruits contenants la lettre "e", avant de faire le `map` servant à l'affichage.

De nombreuses `méthodes` de tableau existent : tu peux en essayer d'autres en `fonction` de tes besoins.


## React Basics 08 - Le CSS dans React

### Introduction

Le style de notre application a un impact très important sur l'apparence des `composants`, l’interaction utilisateur et son ressenti. Nous allons aborder des premières méthodes simples pour styliser une application `React`.

Il y a de multiples façons de styliser une application `React`, et nous allons en examiner seulement quelques-unes. Garde en tête qu'il n'y a pas de bonne ou de mauvaise façon de styliser : utilise la façon qui s'adapte le mieux à ton projet !


### Sommaire

Appliquer du `CSS` avec des classes
Utiliser l'attribut "`style`"
Utiliser des modules `CSS`
What `else` ?

Appliquer du `CSS` avec des classes

Dans `React`, tu peux spécifier une classe `CSS` sur un élément `JSX` avec la prop `className`. Cela fonctionne exactement comme l'attribut class en `HTML`.

Pourquoi ne pas utiliser class comme en `HTML` ? Parce que le mot class est déjà un mot-clé en `JavaScript`. Les personnes qui ont conçu `React` ont donc choisi d'utiliser `className` pour éviter de générer des erreurs.

Par exemple :
`<img className="avatar" />`

Tu peux ensuite écrire le code `CSS` correspondant dans un fichier `CSS` séparé, comme tu en as l'habitude :
```bash
.avatar {
  border-radius: 50%;
}
```
React n'impose pas la façon d'intégrer tes fichiers `CSS` dans ton application. Dans le cas le plus simple, tu peux ajouter une balise `<link>` à ton code `HTML`.

Une autre option : la plupart des frameworks basés sur `React` te permettent d'importer des fichiers `CSS` directement dans un `composant`. Quelque chose comme ça :
```bash
import "./App.css";
function App() {
  return <p className="my-class">Hello world</p>
}
```
👍 Avantages : facile à mettre en œuvre, car tu connais déjà le `CSS`. S'adapte également bien avec des framework `CSS` comme `Tailwind CSS` (tu peux voir le guide d'installation avec Vite, ou choisis un autre framework `CSS` sur `State` of `CSS` survey).

👎 Inconvénients : difficile à maintenir, plus difficile à faire évoluer. Impossible de calculer des styles dynamiques.

🔬 Expérimente :

Tu peux faire des essais dans le "bac à sable" ci-dessous en modifiant `App.css` :
```bash
import PokemonCard from "./PokemonCard";
import "./App.css";
function App() {
  return <PokemonCard />;
}
export default App;
```
Voici ma version si tu veux voir un résultat fini :
```bash
import PokemonCard from "./PokemonCard";
import "./App.css";
function App() {
  return <PokemonCard />;
}
```

### Utiliser l'attribut "style"

Tout comme en `HTML`, tu peux utiliser l'attribut `style` dans ton application `React` pour appliquer du `CSS`. Mais avec quelques légères différences : au lieu d'écrire le `CSS "inline"`, tu dois le passer sous la forme d'un objet. Dans cet objet, les noms des propriétés doivent être en `camelCase`, et les valeurs doivent être des chaines de caractères :
```bash
function App() {
  const container = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <section style={container}>
      <h1 style={{color: "#0d1a26", fontWeight: "400"}}>Hey! We're using inline style!</h1>
    </section>
  );
}
```
Dans l'exemple ci-dessus, `style={{}}sur` le `h1` n'est pas une syntaxe spéciale, mais un `objet {}` littéral à l'intérieur des accolades de l'attribut `style={}`. `React` recommande d'utiliser l'attribut `style` uniquement lorsque les styles dépendent de variables `JavaScript` :
```bash
<img
  className="avatar"
  style={{
    width: user.imageSize,
    height: user.imageSize,
  }}
/>
```

👍 Avantages : comme nous avons affaire à un objet, nous pouvons l'étendre et ajouter d'autres propriétés, changer les valeurs de manière conditionnelle.

👎 Inconvénients : impossible d'utiliser les media queries et les pseudo-classe.


### Utiliser des modules CSS

Les `Modules CSS` peuvent t'aider à déclarer tes classes `CSS` avec une portée locale pour un `composant`. Concrètement, cela signifie que les noms de classes vont être générés par un algorithme pour obtenir des noms uniques pour chaque `composant`. Cela permet d'éviter les conflits de noms de classes que tu pourrais répéter dans ton application (avoir plusieurs classes `.button` qui se contredisent par exemple).

Un module est un fichier `CSS` normal. Par exemple, un fichier `MyComponent.module.css` :
```bash
.container {
    display: flex;
    flex-direction: column;
    align-items: center
    justify-content: center;
}
.title {
    color: #0d1a26;
    font-weight: 700;
}
```

Ensuite, tu peux l'importer dans ton composant. Le composant utilisera les styles importés avec l'attribut `className` :
```bash
import styles from './MyComponent.module.css';
function MyComponent() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Hey! We're using CSS modules!</h1>
    </section>
  );
};
```

👍 Avantages : pas de conflit dans les noms de classe.

👎 Inconvénients : difficile de partager le même style entre les composants.
















