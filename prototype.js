// let myName="suraj     "
// let mychannel="chai    "

// console.log(myName.trueLength);

let myHeros=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderpower:function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.suraj=function(){
    console.log(`suraj is present in all object`);
}
Array.prototype.heyHitesh=function(){
    console.log(`suraj says hello`);
}

//heroPower.suraj()
//myHeros.suraj()
//myHeros.heysuraj()
//heroPower.heysuraj()

//inheritance

const user= {
    name="chai",

    email:"chai@google.com"
}
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()