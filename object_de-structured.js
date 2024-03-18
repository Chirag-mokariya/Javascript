const course={
    coursename:"javascript",
    courseprice:900,
    courseinstructor:"chirag"
}

const {coursename:name,courseinstructor:instructor}=course // object destructured
console.log(name);
console.log(instructor);