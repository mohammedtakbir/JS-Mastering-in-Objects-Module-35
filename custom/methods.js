const student = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
         return this.name + ' is participating the exam' 
    },
    improvement: function(subject){
        console.log(this.exam())
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treat: function(amount, tips){ 
        this.money = this.money - amount - tips; 
        return this.money;
    }
}

const output = student.exam();
// console.log(output);

const output2 = student.improvement('algebra');
console.log(output2)

const output3 = student.treat(1000, 100);
// console.log(output3)
// console.log(student)
