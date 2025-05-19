'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var str = `Oh, you are a millenial, ${firstName}`;
    }
    console.log(str);
  }
  printAge();
  return age;
}
const firstName = 'Jonas';
calcAge(1991);

/* test and application of hoisting */

// Variables
console.log(me);
console.log(job);
console.log(year);


var me = 'Jonas';
let job = 'teacher';
const year = 1991;
// Functions

console.log(this);


