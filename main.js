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
const toDo = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true,
        },
    {
        id: 2,
        text: 'Clean litter box',
        isCompleted: false,
        },
     {
        id: 3,
        text: 'make bed',
        isCompleted: false,
     }
];

// console.log(toDo[1].text)

// const todoJSON = JSON.stringify(toDo);
// console.log(todoJSON)

//loop classic
for (let i = 0; i < 10; i ++){
    console.log(i)
}

// //while
let i = 0;
while( i< 10){
    console.log(`while loop ${i}`);
    i ++    // remember to increment by 1 or else you you will be in an infinite loop
}