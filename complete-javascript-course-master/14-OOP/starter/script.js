'use strict';

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    
}

const jonas=new Person('Jonas', 1991);

// 1. New {} creates a new empty object
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}


console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack);

console.log(jonas instanceof Person); // true



 
