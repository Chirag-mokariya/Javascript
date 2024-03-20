function addtwonumbers(Number1,Number2){
    // console.log(Number1+Number2);

    // let result=Number1+Number2
    // return result

    return Number1+Number2
}

// addtwonumbers(3,6)

let result=addtwonumbers(3,2)
// console.log("result: ",result);     //  output: result: 5

function login(username){         //(username="user")  defined default value
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(login())
// console.log(login("chirag"))