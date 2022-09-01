// const first = {a : 2};
// const second = {a: 2};
// const third = second;
/* if(third === second){
    console.log('same')
}else{
    console.log('different')
} */

//* do not use this method to compare object or array
const first = {a : 2, b: 3, c: 3};
const second = {a: 2, c: 4, b: 3};
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
/* console.log(firstString, secondString)
if(firstString === secondString){
    console.log('same')
}else{
    console.log('different')
} */

//* compare object by object.keys()
function compareObject(first, second){
    const firstKeys = Object.keys(first)
    const secondKeys = Object.keys(second)
    if(firstKeys.length === secondKeys.length){
        for(const key of firstKeys){
            if(first[key] !== second[key]){
                return false;
            }
            else{
                return true;
            }
        }
    }else{
        return false;
    }
}
const result = compareObject(first, second);
console.log(result)