const friends = ["sakib", "rakib", "jabed"]
console.log(...friends)

// const newArray = ["hero alam", friends];
// console.log(newArray)

const newArray = ["hero alam", ...friends];
console.log(newArray)

const numbers = [1,5,7,4,78,56,345,678,4,56];

// for in palece of

console.log(Math.max(numbers)) //null
console.log(Math.max(1,5,7,4,78,56,345,678,4,56)) //null
console.log(Math.max(...numbers)) //most efficient and applicable
