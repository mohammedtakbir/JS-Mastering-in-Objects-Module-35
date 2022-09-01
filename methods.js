const student = {
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
        this.money = this.money - amount - tips; //? chnaging the property value
        return this.money;
    }
}
// student.exam(); //? call the property of function
// const output = student.exam();
// console.log(output)

// const reExm = kodomAli.improvement('geography');
// console.log(reExm)

// const remaining = kodomAli.treat(900, 100);
// console.log(remaining);
// const againRemaing = kodomAli.treat(500, 50);
// console.log(againRemaing);