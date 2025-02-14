// lopping tecnique:
// 1. for loop
// 2.while loop
// 3.do while -- less
// for of --array lopp korar jnno
// for in -- object loop korar jnno

const friends = ["Elon", "Bill", "Mark","Waren"];
// for(const friend of friends){
//     console.log(friend)
// }

// for(let i = 0; i < 10; i++){
//     console.log(i);
//     console.log(friends[i])
// }
// for(let i = 0; i <friends.length; i++){
//     console.log(i);
//     console.log(friends[i])
// }

const numbers = [3,53,5,335,35,675,35,35,53]
// for(let i =0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }


let i = 0;
while(i < friends.length){
    console.log(friends[i])
    i++;
}

let n = 0;
while(n < numbers.length){
    console.log(numbers[n])
    n++;
}