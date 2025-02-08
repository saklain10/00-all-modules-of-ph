const age = 212;
// if(age >= 18){
//     console.log('you can vote')
// }
// else{
//     console.log("You can't vote")
// }

// //  ternary - 3 parts
/**
 * ? :
 * condition ? do something when true : do something when false
 */
// simple ternary
// age >= 18 ? console.log("Vote dio") : console.log("Ghumai")


let price = 500;
const isLeader = true;
if(isLeader == false){
    price = 0;
}
else {
    price = price + 100
}
console.log(price)

price = isLeader === true ? 0 : price + 100;


//semi advance
if (isLeader === true){
    if (price > 1000){
        price = price/ 2;
    }
    else{
        price = 0;
    }
}
else{
    price = price;
}