const numbers = [12, 23, 34, 45, 56, 67, 78]
//* 1. for...of
/* for(const number of numbers){
    console.log(number)
} */
const bottle = {color: 'Yellow', price: 50, isCleaned: true, capacity: 1}
//* for...of cannot used with objects
/* for(const prop of bottle){
    // console.log(prop)
} */
//* first opiton to loop through an object----using for..of loop
const keys = Object.keys(bottle);
// console.log(keys)
/* for(const key of keys){
    console.log(key, bottle[key])
}
 */
//* for..in
/* for(const key in bottle){
    const value = bottle[key]
    console.log(key, value)
} */

//* advance
const pair = Object.entries(bottle);
// console.log(pair)
const [a, b] = [12, 23, 34, 45]
//* [ [ 'color', 'Yellow' ], [ 'price', 50 ], [ 'isCleaned', true ], [ 'capacity', 1 ] ]
for(const test of Object.entries(bottle)){
    // console.log(test)
    const [key, value] = test
    console.log(key, value)
}