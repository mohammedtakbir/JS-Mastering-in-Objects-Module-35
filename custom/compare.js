/* const first = {a: 1, b: 2}
const second = {a: 1, b: 2};
const third = second;
if(third === second){
    console.log('same')
}
else{
    console.log('different')
}
 */

//* do not use this method for comparing object/array
/* const first = {b: 2, a: 1}
const second = {a: 1, b: 2};
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
// console.log(firstString, secondString)
if(firstString === secondString){
    console.log('same')
}else{
    console.log('different')
} */

//* compare object by object.keys()
const first = {a : 2, b: 3, c: 3};
const second = {a: 2, c: 4, b: 3};

function compareObject(first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length){
        for(const key of firstKeys){
            
        }
    }
}
compareObject(first, second)