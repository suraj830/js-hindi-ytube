//primitive
//7 types:string,Number,Boolean,null,undefined,symbol,BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);

const bigNumber=5445145485485454n


//Reference type(Non Primitive)

//Array,Objects,Functions

const heros=["shaktiman","naagraj","doga"]

let myobj={
    name:"suraj",
    age:25,
}

const myFunction = function(){
console.log("hello")
}

console.log(typeof myFunction);

