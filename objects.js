//* 1. create object using object literals
const player = {};
player.name = 'pakna mushfik'
player.speciallity = 'so called batsman'
player['age'] = 32;
player.bat = function paknaPlayer(){ //* object method
    console.log('swing your bat');
}
// player.bat()
// console.log(player)

const student = {
    name: 'pandey',
    job: 'khay andey'
}

//* 2. object constructor
const person = new Object();
// console.log(person)

//* 3. object create method (object.create)
/* const item = Object.create(null)
console.log(item) */
const alien = Object.create(student)
// console.log(alien.name, alien.job)
// console.log(alien.friend) //? undefined-----> property na thakle undefined dekhabe

//* 4. class 
class persons{
    name = 'abul';
    profession = 'programmer';
    constructor(age){
        this.age = age;
    }
}
const person1 = new persons(34);
// console.log(person1)

//* 5. create object with function
function car(model, price){
    this.model = model
    this.price = price
}
const nissan = new car('GTR35', 12000000);
console.log(nissan)