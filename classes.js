// class user {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptpassword() {
//     return `${this.password}abc`
//   }
//   changeUsername(){
//     return `${this.username.toUpperCase()}`
//   }
// }
// const chai=new user("chai","chai@gmail.com","123")

// console.log(chai.encryptpassword());
// console.log(chai.changeUsername());

//.....behind the scene

function user(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}
user.prototype.encryptpassword=function(){
     return `${this.password}abc`
}

user.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}
const tea=new user("tea","tea@gmail.com","123")

console.log(tea.encryptpassword());
console.log(tea.changeUsername());