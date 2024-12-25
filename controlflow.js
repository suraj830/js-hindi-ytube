//if-else

// const isUserloggedIn=true
// const temperature=41

// if(temperature===41){
// console.log("less then 50")
// }
// console.log("temperature is greater than 50")

// <,>,<=,>= ,2<=2,==,!=,
// 3!=2

const isUserloggedIn = true;
const temperature = 41;

// if(temperature===40){
// console.log("less then 50")
// }else{
//     console.log("temperature is greater than 50")
// }
// console.log("Execute");

// const score=200
// if(score>100){
//     const power="fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

// const balance=1000

// if (balance<500) {
//     console.log("less than 500")
// } else if (balance<750) {
//     console.log("less than 750")
// } else if (balance<900) {
//     console.log("less than 900")
// } else {
//     console.log("less than 1200")
// }

// const userLoggedIn=true
// const debitcard=true
// const loggedInFromGoogle=false
// const loggedInFromEmail=true
// if (userLoggedIn && debitcard && 2==3) {
//     console.log("Allow to buy courses");
// }
// if (loggedInFromGoogle||loggedInFromEmail) {
//     console.log("user logged in");
// }

//........switch case...........//

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// const month=3

// switch (month) {
//     case 1:
//         console.log("january")
//         break;
//     case 2:
//         console.log("Feb")
//         break;
//     case 3:
//         console.log("march")
//        // break;
//     case 4:
//         console.log("April")
//         break;

//     default:
//         console.log("default cast match")
//         break;
// }

// const month = "march";

// switch (month) {
//   case "jan":
//     console.log("january");
//     break;
//   case "feb":
//     console.log("Feb");
//     break;
//   case "march":
//     console.log("march");
//     break;
//   case "April":
//     console.log("April");
//     break;
//   default:
//     console.log("default cast match");
//     break;
// }



//...........truthy valuse.................

const userEmail=[]
if (userEmail) {
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

 //falsy value

// false, 0, -0,BigInt 0n,",null",undefined,NaN

//truthy value
// "0","false"," ",[],{},function(){} 


// if (userEmail.length===0) {
//     console.log("Array is empty");
// }


const emptyObj={}
if (Object.keys(emptyObj).length===0) {
    console.log("Object is empty");
}

//Nullish Coalescing Operator(??):null undefined
let val1;
// val1=5??10
// val1=null??10
// val1=undefined??15
val1=null??10??20

console.log(val1);

//terniary operator

// Condition ? true:false

const iceTeaPrice=100
iceTeaPrice<=80?console.log("less than 80"):console.log("more than 80")