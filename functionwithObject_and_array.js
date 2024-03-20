function price(val1, val2, ...num){      // ...(rest oprator)
    return num
}

// console.log(price(200,300,400,500,600));  //output:[ 400, 500, 600 ]


/* **************** object in function************* */
const user={
    name:"chirag",
    price:100
}

function handleobject(anyobject){
    console.log(`welcome ${anyobject.name}, price is: ${anyobject.price}`);
}
// handleobject(user)     // use object to call function

// direct create a object in argument
handleobject({            
    name:"chirag",
    price:780
})

/* **************** array in function************* */

const array=[100,200,500,800,450]

function example(getarray){
    console.log(`second value of my array is: ${getarray[1]}`);
}

// example(array)

// create array in argument
example([100,323,500,8,56])




