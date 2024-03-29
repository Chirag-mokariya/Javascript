var c=100
let a=202
if(true){
    let a = 100
    const b = 200
    // var c = 300
    // console.log("inner:", a);
}

// console.log(a);
// console.log(b);      //error
// console.log(c);

function one(){
    const username="chirag"

    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);   //error
    two()
}
one()

if(true){
    const username="rahul"
    if(username==="rahul"){
        const website=" youtube"
        console.log(`username: ${username}, website:${website}`);
    }
    // console.log(website);   //error
}
// console.log(username);   //error

console.log("*********************");


console.log(fun1(5));    // call before function is run perfectly

function fun1(num){
    return num+1

}

//console.log(fun2(5));  //Cannot access 'fun2' before initialization

const fun2=function(num){
    return num+2
}
