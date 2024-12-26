const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,curval){
//     console.log(`acc:${acc} and curval:${curval}`);
//     return acc + curval
// },0)

const myTotal=myNums.reduce((acc,curval)=>acc+curval,0)

console.log(myTotal);


const shoppingcart=[
    {
        itemName:"js cource",
        price:2999
    },
    {
        itemName:"py cource",
        price:999
    },
    {
        itemName:"mobiledev cource",
        price:5999
    },
    {
        itemName:"data science cource",
        price:12999
    }
]

const priceTopay=shoppingcart.reduce((acc,item)=>acc+item.price,0)

console.log(priceTopay);