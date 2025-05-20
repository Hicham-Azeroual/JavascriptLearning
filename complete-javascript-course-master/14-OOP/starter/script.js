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

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 2, 2, 2, 5, 5, 5, 5];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
    return [...new Set(this)];
}

console.log(arr.unique());
//console.log(Array.prototype);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car= function(make, speed){
    this.make=make;
    this.speed=speed;

}
Car.prototype.accelerate=function(){
    this.speed+=10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}
Car.prototype.brake=function(){
    this.speed-=5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

const bmw=new Car('BMW',120);
const mercedes=new Car('Mercedes',95);
bmw.accelerate();
mercedes.accelerate();
bmw.brake();
mercedes.brake();


// ES6 Classes
// class expression
/* const PersonCle = class {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
}
calcAge() {
    console.log(2037 - this.birthYear);
}

} */

//class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }
    get fullName() {
        return this._fullName;
    }
    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }
    static hello() {
        console.log('Hey there 👋');
    }


}
const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
PersonCl.hello();
console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
    
    console.log(`Hey ${this.fullName}`);
}

jessica.greet();

// 1. Classes are not hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

// static method
PersonCl.hey = function () {
    console.log('Hey there 👋');
    console.log(this);
}
PersonCl.hey();
// const jessica = new PersonCl('Jessica Davis', 1996);
// jessica.hey(); // undefined 


// Object.create

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge(); 

class Student extends PersonCl {
    constructor(fullName, birthYear, course) {
        // Always needs to happen first!
        super(fullName, birthYear);
        this.course = course;
    }
    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }
    calcAge() {
        console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`);
    }
}

