// object singleton
const obj=new Object()
obj.name="chirag"
obj.id=11
obj.email="chirag@gmail.com"

// console.log(obj);

const myobj={
    name:"rahul",
    fullname:{
        userfullname:{
            firstname:"kishan",
            lastname:"saran"
        }
    }
}
// console.log(myobj);
// console.log(myobj.fullname.userfullname.firstname);

const obj1={1:"A",2:"B"}
const obj2={3:"C",4:"D"}
const obj5={5:"E",6:"F"}

// const obj3={obj1,obj2}
// const obj4={...obj1,...obj2}
// console.log(obj3);
// console.log(obj4);

const allobj=Object.assign({},obj1,obj2,obj5)
console.log(allobj);

const user={
    name:"rahul",
    id:101,email:"r@gail.com",
    isLogddin:true
}
console.log(Object.keys(user));  //output: [ 'name', 'id', 'email', 'isLogddin' ]
console.log(Object.values(user));  //output: [ 'rahul', 101, 'r@gail.com', true ]
console.log(Object.entries(user));  
/*output: [
    [ 'name', 'rahul' ],
    [ 'id', 101 ],
    [ 'email', 'r@gail.com' ],
    [ 'isLogddin', true ]
  ]
*/
console.log(user.hasOwnProperty("name"))
console.log(user.hasOwnProperty("surname"))
  
