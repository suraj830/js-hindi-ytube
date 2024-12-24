//singleton
//Object.create

// object literals
const mySym=Symbol("key1")

const Jsuser={
    name:"suraj",
    "fullname":"suraj prakash",
    [mySym]:"mykey1",
    age:25,
location:"jaipur",
email:"suraj@google.com",
isLoggedIn:false,
lastLoggedinDays:["monday","saturday"]

}
// myArray=["s","u"]
// myArray[1]

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["fullname"])
// console.log(typeof Jsuser.mySym)
// console.log(Jsuser[mySym])


Jsuser.email="prakash@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email="prakash@microsoft.com"
// console.log(Jsuser);

Jsuser.greeting=function(){
    console.log("Hello js user");
}
Jsuser.greetingtwo=function(){
    console.log(`Hello js user,${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());
