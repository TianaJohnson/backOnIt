//Node Crash Course
console.log('Hello from node.js');

const Person = require('./person')
const person1 = new Person('Jane', 'Doe');

person1.greeting();