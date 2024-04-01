// Immediately Invoked Function Expressions (IIFE)

// named iife

(function code(){
    console.log("code adeed");
}) ();                   //IIFE is called without function name and whole function are raped in perentheses
                      // one or more iffe  without semicolon  is not working

(function codetwo(){
    console.log("code two adeed");
}) ();



// without name iife

 ( () =>{
    console.log("hey user!");
 }) (); // without perameter



 ((num1,num2)=>{
    console.log(`result of addition: ${num1+num2}`);
 }) (2,3);   //with parameter