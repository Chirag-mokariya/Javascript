const marvel=["ironman","thor","spiderman"]
const dc=["superman","superman","flash"]
// marvel.push(dc)
// console.log(marvel);

const heros=marvel.concat(dc)  // in concat method combine 2 array not more than 2
console.log(heros);  

const hero1=[1,2,3]
const allheros=[...marvel,...dc,...hero1]  // spred oprator use to combine more than 2 array
console.log(allheros);