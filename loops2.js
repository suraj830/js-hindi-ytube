//........for of .........

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num)
}
const greetings="Hello World"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

//.......Maps........

const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN', "India")
// console.log(map);

for (const [key,value] of map) {
    // console.log(key,':-',value);
}



// const myObject={
//     'game1':'NFS',
//     'game2':'Spiderman'
// }
// for (const [key,value] of myObject) {
//     // console.log(key,':-',value);

// }


//................

const myObject2={
    js:'javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by app"
}
for (const key in myObject2) {
//    console.log(`${key} shortcut is for ${myObject2[key]}`);   
}


const programming=["js","rb","py","java","cpp"]
for (const key in programming) {
//    console.log(programming[key]);
}
//................

// const map2=new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")
// map.set('IN', "India")

// for (const key in map2) {
//    console.log(key);
// }

//.........forEach..loop.............

const coding=["js","rb","py","java","cpp"]

// coding.forEach( function (val){
// console.log(val);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })


// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })


const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"python"
    },
]
myCoding.forEach((item)=>{
    
    console.log(item.languageName);
})