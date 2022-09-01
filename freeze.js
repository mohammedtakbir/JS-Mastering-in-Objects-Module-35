//* 1. object.keys()
const bottle = {color: 'Yellow', price: 50, isCleaned: true, capacity: 1}
const keys = Object.keys(bottle); //? return keys in a array

// console.log(keys)
//* 2. object.values()
const values = Object.values(bottle); //? return values in a arry
// console.log(values)

//* 3. object.entries()
const pair = Object.entries(bottle)
// console.log(pair)

//* 4. object.delete(), seal(), freeze
console.log(bottle)
// Object.seal(bottle)
Object.freeze(bottle) //? can't add or remove property and modify because of object.freeze()
delete bottle.isCleaned; //? can't remove the property because of object.seal()
bottle.price = 500; //? but you can modify the property value
bottle.height = '1feet' //? can't add the property because of object.seal()
console.log(bottle)