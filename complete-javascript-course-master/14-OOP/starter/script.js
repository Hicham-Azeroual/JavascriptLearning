'use strict';

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
   // never do this becouse it will create a new function every time
/*     this.calcAge = function () {
        console.log(2025 - this.birthYear);
    } */
}

const jonas=new Person('Jonas', 1991);

// 1. New {} creates a new empty object
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}
console.log("hicham");


console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack);

console.log(jonas instanceof Person); // true


// Prototypes
Person.prototype.calcAge = function () {
    console.log(2025 - this.birthYear);
}

jonas.calcAge();
matilda.calcAge();
jack.calcAge();
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

 
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));
