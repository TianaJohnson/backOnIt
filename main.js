// const firstName = "Tiana";
// const age = 35;
// const s = "hello world"


// // console.log(`My name is ${firstName} and I am ${age}`);
// console.log(s)
// console.log(s.toUpperCase);
// console.log(s.substring(0,5));
// console.log(s.length);
// console.log(s.split(''));

// const fruit = ['apple', ' pear', 'pineapple', 'orange']

// fruit[3]='grapes';
// fruit.push('mangos');
// fruit.pop();

// console.log(Array.isArray('fruit'));
// console.log(fruit.indexOf('grapes'))
// console.log(fruit);

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies:['music','dance','paint'],
//     address: {
//         street: '5 Tejon st',
//         city: 'Denver',
//         state: 'CO'
//     }
// }

// // console.log(person.address.street);

// const {firstName, age} = person
// console.log(firstName)

// person.email = " john@gmail.com";

// console.log( person)
// const toDos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true,
//         },
//     {
//         id: 2,
//         text: 'Clean litter box',
//         isCompleted: false,
//         },
//      {
//         id: 3,
//         text: 'make bed',
//         isCompleted: true,
//      }
// ];

// toDos.forEach((todo) => console.log(todo));

// console.log(toDos[1].text)

// const todoJSON = JSON.stringify(toDos);
// console.log(todoJSON)

//loop classic
// for (let i = 0; i < toDos.length; i ++){
//     console.log(toDos[i].text)
// }

// //while
// let i = 0;
// while( i< 10){
//     console.log(`while loop ${i}`);
//     i ++    // remember to increment by 1 or else you you will be in an infinite loop
// }

//better loop!
// for( let todo of toDos){
//     console.log(todo.text);

// }

//high order arrays

// forEach
// toDos.forEach(function(todo){
//     console.log(todo.text)
// })

//map
// const todoText= toDos.map(function(todo){
//     return todo.text;
// });
// console.log(todoText)

//filter
// const todoCompleted= toDos.filter(function(todo){
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text;
// })
// console.log(todoCompleted);

//if conditional
// const x = 2;
// const y = 15;

// if( x > 5 && y > 10){   // == only equals value not data type === is data type( more accurate)
//     console.log(' x is more than 5 or y is more than 10')
// } else {
//     console.log('Nope')
// }


//turnery operator
// const x =  13;
// // // if x is greater than 10 then set the color to red, or else set it to blue
// const color = x > 10 ? 'red' : 'blue';

// //switch
// switch(color){
//     case 'red':
//         console.log('Color is red');
//         break;
//     case 'blue':
//         console.log('Color is blue');
//         break;
//     default:
//         console.log('Color is not red or blue')
// }

// functions
// function addNums( num1 = 1, num2 = 1){
//     return num1 + num2
// };

// console.log(addNums(5,3));

//arrow functions // removed brackets 
// const addNums = ( num1 = 1, num2 = 1) => num1 + num2

// console.log(addNums(5,5));

//object oriented programing 
// Constructor function

function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);


};

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}


// Instantiate object
const person1 = new Person('John', 'Doe', '07/08/1986');
const person2 = new Person('Paul', 'Ridge', '6/6/2020');

console.log(person1.getBirthYear());
console.log(person2.getFullName());
console.log(person1);







