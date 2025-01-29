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














