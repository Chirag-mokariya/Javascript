//date
let date=new Date()
console.log(typeof(date));
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log("***********************");

// let mydate=new Date(2023,0,18)
// let mydate=new Date(2023,0,18,5,3)
// let mydate=new Date("2024-01-15")
let mydate=new Date("2024-01-15,15:30")

console.log(mydate.toLocaleString());


console.log("**********************");
//time

let mytime=Date.now()
console.log(mytime/1000);
console.log(Math.floor(mytime/1000));

console.log("**********************");

let newDate=new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getMonth()+1);

