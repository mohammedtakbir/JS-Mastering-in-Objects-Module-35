const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
const person1 = {
    firstName: "John",
    lastName: "Doe"
};
const person2 = {
    firstName: "Mary",
    lastName: "Doe"
};
//* call()
const test = person.fullName.call(person1);
// console.log(test)

const kodomAli = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        // console.log(this.name, 'is participating the exam') 
         return this.name + ' is participating the exam' 
    },
    improvement: function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treat: function(amount, tips){ //? একাধিক পেরামিটার দেয়া যাবে। আবার পেরামিটার না দিলেও হবে
        this.money = this.money - amount - tips; //? chnahing the property value
        return this.money;
    }
}

const badamAli = {
    name: 'kacha badam',
    money: 8000
}
//* call()
const test1 = kodomAli.exam.call(badamAli)
// console.log(test1)
const test2 = kodomAli.treat.call(badamAli, 2000, 100)
console.log(test2)

//* apply()
const test3 = kodomAli.treat.apply(badamAli, [2000, 100])
console.log(test3)

//* bind
const test4 = kodomAli.treat.bind(badamAli);
console.log(test4(1000, 100))