const myArr=[0,1,2,3,4,5]
const myHeroes=["shaktiman","naagraj"]

const myArr2=new Array(1,2,3,4);

// console.log(myArr[0]);
// console.log(myHeroes[0]);
// console.log(myArr2[0]);


// Array methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);


myArr.unshift(9)
// console.log(myArr);
myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexof(3));
// console.log(myArr);


// const newArr= myArr.join()
// console.log(myArr);
// console.log(typeof newArr);



//slice and splice

console.log("A",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3);
console.log("c",myArr);
console.log(myn2);