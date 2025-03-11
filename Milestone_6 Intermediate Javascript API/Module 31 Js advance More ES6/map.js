const numbers = [1,2,3,4,5,6]

let temp = [];
for (let index = 0; index < numbers.length; index++){
    const element = numbers[index];
    const sum = element + 1;
    temp.push(sum)
}


// console.log(temp)
const newArray = numbers.map(value => value + 1)
// console.log(newArray)





