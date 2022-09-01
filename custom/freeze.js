//* Object.keys()
const bottle = {color: 'Yellow', price: 50, isCleaned: true};
const keys = Object.keys(bottle);
// console.log(keys)

//* Object.values()
const values = Object.values(bottle);
// console.log(values)

//* Object.entries
const pair = Object.entries(bottle);
// console.log(pair)

//* delete()
/* console.log(bottle)
delete bottle.isCleaned;
console.log(bottle) */

//* Object.seal()
// delete bottle.isCleaned
/* Object.seal(bottle)
bottle.price = 1000;
delete bottle.isCleaned;
console.log(bottle) */

//* Object.freeze()
// bottle.price = 1000;
Object.freeze(bottle);
bottle.price = 1000;
console.log(bottle)