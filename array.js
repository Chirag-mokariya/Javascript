const myarr=["heelo",1,2,3,4,"hi",6]
console.log(myarr[2]);
const newarr=new Array("welcome",2,3,5,6,8) 
console.log(newarr[0]);

myarr.push("added")
console.log(myarr);

myarr.pop();
console.log(myarr);

myarr.unshift("first")
console.log(myarr);

myarr.shift()
console.log(myarr);

console.log(myarr.includes(5));
console.log(myarr.indexOf("hi"));
console.log("*********************");

const array= myarr.join()
console.log(myarr);
console.log(array);
console.log(typeof array);
console.log("*************");

// slice , splice
const arr1=[10,20,30,40,50,60,70,80,90,100]
console.log("A",arr1);
console.log("slice",arr1.slice(1,5))

console.log("spilce",arr1.splice(1,5))
console.log("B",arr1);
