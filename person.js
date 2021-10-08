// const person = {
//     fName: 'Jane',
//     lName: 'Doe',
// };

class Person {
    constructor( fName, lName){
        this.fName = fName;
        this.lName = lName;
    }

    greeting(){
        console.log(`My name is ${this.fName} ${this.lName}`);
    }
}


module.exports = Person;