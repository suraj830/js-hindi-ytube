const user={
    username:"suraj",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        // console.log("Got user details from database");
        // console.log(`username:${this.username}`);
        // console.log(this);
    }

}
// console.log(user.username)
// console.log.get(UserDetails());
// console.log(this);



function User(username,loginCount,isloggedIn) {
    this.username=username;
    this.loginCount=loginCount;
    this.isloggedIn=isloggedIn

    this.greeting=function(){
        console.log(`welcome ${this.username}`);
    }

    return this
}
// const userOne=User("suraj",12,true)
// const userTwo=User("suraj",12,true)
// console.log(userOne);
// console.log(userTwo);

const userOne=new User("suraj",12,true)
const userTwo=new User("suraj",12,true)
console.log(userOne.constructor);
// console.log(userTwo);





