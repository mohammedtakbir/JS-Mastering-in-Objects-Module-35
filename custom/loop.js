//* 1. for...of
const numbers = [12, 23, 34, 45, 56, 67, 78]
for(const number of numbers){
    // console.log(number)
}

//* for...of cannot use with object
/* const bottle = {color: 'Yellow', price: 50, isCleaned: true, capacity: 1}
for(const prop of bottle){
    // console.log(prop)
} */
//* first opiton to loop through an object----> using for..of loop
const bottle = {color: 'Yellow', price: 50, isCleaned: true, capacity: 1}
/* const keys = Object.keys(bottle);
// console.log(keys)
for(const key of keys){
    console.log(key ,bottle[key])
} */

//* for...in 
/* for(const key in bottle){
    const values = bottle[key];
    console.log(key, values)
} */

//* advance
const pair = Object.entries(bottle);
for(const element of pair){
    const [key, value] = element;
    console.log(key, value)
}