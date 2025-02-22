// const prices = [4000,30000,3400,4400,7700,6500,4350,7890]

// function getMin(numbers){
//    let min = numbers[0]
//     for(const number of numbers){
//         if(number < min){
//             min = number;
//         }
//     }
//     return min
// }

// const cheap = getMin(prices)
// console.log(cheap)


const phones = [
    {name:"Samsung", price: 20000, camera: '12mp', color:"black"},
    {name:"Xaomi", price: 18000, camera: '12mp', color:"black"},
    {name:"Oppo", price: 30000, camera: '12mp', color:"black"},
    {name:"Iphone", price: 100000, camera: '12mp', color:"black"},
    {name:"Walton", price: 31000, camera: '12mp', color:"black"},
    {name:"Vivo", price: 27000, camera: '12mp', color:"black"},
]

function getCheapestPhone(phones){
    // console.log(phones)
    let min = phones[0];
    for (const num of phones){
        if(num.price < min.price){
            min = num;
        }
    }
    return min;
}

const cheap = getCheapestPhone(phones)
console.log(cheap)