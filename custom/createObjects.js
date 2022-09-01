//* create object using objecty literals
const person = {};
person.name = 'takbir';
person.age = 22;
person.activities = function(){ //? object method
    console.log('learning javascript!')
}
// person.activities()
// console.log(person)

//* 2. object constructor
function Person(first, last, age){ // ?It is considered good practice to name constructor functions with an upper-case first letter.
    this.firstName = first;
    this.lasName = last;
    this.age = age;
} 
const person1 = new Person('mohammed', 'takbir', 22);
// console.log(person1)

const person2 = new Object();
// console.log(person2)

//* 3. object create method (object.create)
const student = {
    name: 'pandey',
    job: 'khay andey'
}
const newStudent = Object.create(person);
// console.log(newStudent.name)

//* class
class Takbir{
    name = 'takbir';
    profession = 'programmer';
    constructor(age){
        this.age = age;
    }
}
const takbir = new Takbir(22);
// console.log(takbir)

//* 5. create object with function
function Car(model, version){
    this.model = model;
    this.version = version;
}
const tesla = new Car('Model S', 2022);
console.log(tesla)