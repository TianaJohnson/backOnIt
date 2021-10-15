//Node Crash Course
console.log('Hello from node.js');
//import Person from './person' will only work with babble (ES6)

const Person = require('./person')   ///common js
const person1 = new Person('Jane', 'Doe');

person1.greeting();