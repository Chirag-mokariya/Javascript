//object literals

const mysym=Symbol("key")

const myobj={
    name:"chirag",
    age:21,
    [mysym]:"mykey",
    address:"porbander",
    "full name":"chirag mokariya"
}
console.log(typeof myobj);
console.log(myobj);
console.log(myobj.address);
console.log(myobj["address"]);
// console.log(myobj.full name);    //wrong syntax
console.log(myobj["full name"]);
console.log(myobj[mysym]);

myobj.address="vadodara"
console.log(myobj);
console.log("***********");

myobj.greeting=function(){
    console.log("hello user")
}
myobj.greetingtwo=function(){
    console.log(`hello user: ${this.name}`)
}
console.log(myobj);
console.log(myobj.greeting());
console.log(myobj.greetingtwo());

