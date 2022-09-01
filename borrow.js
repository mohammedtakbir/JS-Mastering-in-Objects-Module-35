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
// const exm = kodomAli.exam()
// console.log(exm)
const badam = {
    name: 'kacha badam',
    money: 8000
}

const test = kodomAli.exam();
// console.log(test)
//* call() function
const result = kodomAli.exam.call(badam);
// console.log(result)
const badamMoney = kodomAli.treat.call(badam, 1000, 100);
console.log(badamMoney)

//* apply() function
const badamMoney2 = kodomAli.treat.apply(badam, [2000, 200]);
console.log(badamMoney2)

//* bind()
const badamMoney3 = kodomAli.treat.bind(badam);
const remaining = badamMoney3(1000, 100);
console.log(remaining)