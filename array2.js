const marvel=["ironman","thor","spiderman"]
const dc=["superman","superman","flash"]
// marvel.push(dc)
// console.log(marvel);

const heros=marvel.concat(dc)  // in concat method combine 2 array not more than 2
console.log(heros);  

const hero1=[1,2,3]
const allheros=[...marvel,...dc,...hero1]  // spred oprator use to combine more than 2 array
console.log(allheros);

console.log("***********");
const array=[1,2,3,[4,5],6,[7,8,[9,10],11]]
console.log(array);
console.log(array.flat(1));
console.log(array.flat(2));
console.log(array.flat(Infinity));

console.log(heros.reverse());
console.log(heros.length);
