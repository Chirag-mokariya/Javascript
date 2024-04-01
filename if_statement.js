// in if statement condtion use like, <, >, <=, >=, ==, ===, &&, ||, !=

// IF statement

age=20
if (age>18) {
    console.log("young");
}


// else

age=17
if (age>18) {
    console.log("young");
}else{
    console.log("not young")
}
console.log("*********************");

// else if statement
 
let balance = 900
if (balance < 500) {
    console.log("your balance is lessthan 500");
} else if (balance <1000) {
    console.log("Your balance is lessthan 1000");
} else if (balance <= 1000) {
    console.log("you can shopping now!!");
}

let debitcard=true
let creditcard=false

if (debitcard && creditcard) {          //  when both condition are true to print the msg 
    console.log("allow to buy a course");    
}else{
    console.log("not allowed");
}

if (debitcard || creditcard) {            //  when single condition are true to print the msg
    console.log("allow to buy course");
}
