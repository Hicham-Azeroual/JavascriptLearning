// Fonctions de première classe en JavaScript

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
add(2, 3);

// Fonctions anonymes
/* const multiply = function (a, b) {
    return a * b;
}

multiply(2, 3); */

// Fonctions fléchées
const divide = (a, b) => {
  return a / b;
};

divide(2, 3);

// Fonctions fléchées simplifiées
const modulo = (a, b) => a % b;

modulo(2, 3);
const afficher = console.log;
afficher(modulo(2, 3));

// select all buttons exist in the html
const buttons = document.querySelectorAll("button");
function handleClick() {
  alert("Button clicked");
}
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleClick);
}

function multiply(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}
const res= multiply(2);
console.log(res(5));

const operations = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
}
console.log(operations.add(2, 3));
/* 
var a=5;
delete a;
console.log("hicham",a); */

// Error: Delete of an unqualified identifier

/* var bin=confirm("Are you sure you want to delete this item?")
alert(bin); */

console.log("------------------------")

console.log(typeof 5);
// affiche number
console.log(typeof true);
// affiche boolean

console.log(typeof "bonjour");
//string
console.log(typeof 'c');
//string

var m;
console.log(typeof m);


// Créer un tableau de tâches
var taches = ["coder", "tester", "déployer"];
console.log("Tableau initial :", taches); // Affiche : ["coder", "tester", "déployer"]

// Ajouter une tâche à la fin avec push()
taches.push("documenter");
console.log("Après push :", taches); // Affiche : ["coder", "tester", "déployer", "documenter"]

// Supprimer la dernière tâche avec pop()
var supprimee = taches.pop();
console.log("Tâche supprimée :", supprimee); // Affiche : documenter
console.log("Après pop :", taches); // Affiche : ["coder", "tester", "déployer"]

// Ajouter une tâche au début avec unshift()
taches.unshift("planifier");
console.log("Après unshift :", taches); // Affiche : ["planifier", "coder", "tester", "déployer"]

// Vérifier si une tâche existe avec indexOf()
var index = taches.indexOf("tester");
console.log("Index de 'tester' :", index); // Affiche : 2

// Extraire une partie avec slice()
var sousTaches = taches.slice(1, 3);
console.log("Sous-tableau :", sousTaches); // Affiche : ["coder", "tester"]

// Remplacer une tâche avec splice()
taches.splice(2, 1, "déboguer"); // Remplace "tester" par "déboguer"
console.log("Après splice :", taches); // Affiche : ["planifier", "coder", "déboguer", "déployer"]

// Parcourir avec forEach()
console.log("Liste des tâches :");
taches.forEach(function(tache, i) {
  console.log(`Tâche ${i + 1} : ${tache}`);
});
// Affiche :
// Tâche 1 : planifier
// Tâche 2 : coder
// Tâche 3 : déboguer
// Tâche 4 : déployer
