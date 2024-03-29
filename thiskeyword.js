const user = {
    username: "chirag",
    price: 999,
    welcomemsg: function () {
        console.log(`${this.username}, Welcome to our website`);
        console.log(this);
    }
}
console.log(this);

user.welcomemsg()
// user.username="rahul"
// user.welcomemsg()
