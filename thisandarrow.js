const user={
    username:"suraj",
    price:999,
    welcomeMessage:function(){
    //    console.log(`${this.username}, welcome to website`) 
    //    console.log(this);
    }

}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);



// function chai(){
//     let username="suraj"
//     console.log(this.username);
// }
// chai()


// const chai =function(){
//     let username="suraj"
//     console.log(this.username);
// }
// chai()


// const chai =()=>{
//     let username="suraj"
//     console.log(this.username);
// }
// chai()

const chai =()=>{
    let username="suraj"
    console.log(this);
}
chai()


//............pure arrow function...........
//explicit function

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4))



//implicit return arrow function  
// const addTwo=(num1,num2)=>num1+num2   
// const addTwo=(num1,num2)=>(num1+num2)
const addTwo=(num1,num2)=>({username:"suraj"})
console.log(addTwo(3,4))


