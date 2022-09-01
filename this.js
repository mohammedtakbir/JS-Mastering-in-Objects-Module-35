// console.log(this)

const kodomAli = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        console.log(this)
        // console.log(this.name, 'is participating the exam') 
         return this.name + ' is participating the exam' 
    },
    examArrow: () => {
        console.log(this)
    },
    exmNested:  () => {
        const arrrow = () => {
            console.log(this)
        }
        arrrow();
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
// kodomAli.exam()
// kodomAli.examArrow()


function clickhandler(){
    console.log(this)
}
document.getElementById('second-btn').addEventListener('click', function() {
    console.log(this)
}) 