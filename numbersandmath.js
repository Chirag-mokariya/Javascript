let score=200
let score1=new Number(100)  // another way to define a number
// console.log(score);
// console.log(score1);

// console.log(score1.toString());
// console.log(score1.toString().length);
console.log(score1.toFixed(2));

const balance=21.9903
console.log(balance.toPrecision(3));

const hundreds=100000
// console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));


/************Maths*************/
console.log(Math);
console.log(Math.abs(-34));  // the absolute value of -5 is the same as the absolute value of 5.
console.log(Math.round(4.6));  //Returns a supplied numeric expression rounded to the nearest integer
console.log(Math.ceil(4.2)); // return top value
console.log(Math.floor(4.9)); // return lowest value
console.log(Math.min(4,5,1,7)); // return low value
console.log(Math.max(4,5,1,7)); // return high value
console.log("************************");



// console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log("************************");

let min=1
let max=6
console.log(Math.floor(Math.random()*(max-min+1)+min))





