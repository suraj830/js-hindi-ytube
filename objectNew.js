function multipleBy5(num){

    return num*5
}
multipleBy5.power=2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username,Score){
    this.username=username
    this.Score=Score
}

createUser.prototype.increment=function(){
    this.Score++
}
createUser.prototype.printMe=function(){
    console.log(`Price is ${this.Score}`)
}
const chai=new createUser("chai",25)
const tea=createUser("tea",250)

chai.printMe()