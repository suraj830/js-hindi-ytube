// function addTwoNumbers(number1,number2){  //parameters 
//     console.log(number1+number2);
// }

function addTwoNumbers(number1,number2){  //parameters 
    // let result=number1+number2
    // return result
    // console.log("suraj"); //after return nothing will be printed

    return number1+number2
}


const result=addTwoNumbers(3,5) //arguments

// console.log("Result:", result);



function loginUserMessage(username){
    if(username===undefined){
    // console.log("please enter a username");
    return 
    }
    return`${username} just logged in`
}


function loginUserMessage(username="sam"){
    if(!username){
    console.log("please enter a username");
    return 
    }
    return`${username} just logged in`
}

// console.log(loginUserMessage("suraj"))
// console.log(loginUserMessage("suraj"))



function calculatecartprice(val1,val2, ...num1){
    return num1
}
// console.log(calculatecartprice(200,400,500,2000))

const user={
    username:"suraj",
    price:199
}
function handleObject(anyobject){

console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
};
// handleObject(user)

handleObject({
    username:"sam",
    price:399
})

const myNewArray=[200,400,100,600]

function returnsecondvalue(getArray){
return getArray[1]
}
// console.log(returnsecondvalue(myNewArray));
console.log(returnsecondvalue([200,400,500,1000]));


