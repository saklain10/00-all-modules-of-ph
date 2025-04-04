// // "" '' - String
// // `` - template String

// const fName = "GIAS"
// const lName = "UDDIN"

// console.log(`I am MD ${fName} ${lName}`)

// // // arrow function
// // console.log(sum)
// // function sum(){
// //     console.log(arguments)
// // }

// // const sum=(a,b)=>{
// // return sum
// // } //multiple line e aslei return korte hbe

// // const sum = (a,b) => a+b

// // const sum = (...rest) => {
// //     console.log(rest)
// // }
// // sum(1,2,3) //parameter gula array er vitor recive korar upai

// // const sum = (a, b, c) => {
// //     // console.log(arguments) //not accessible in this method
// //     let s = a + b + c;
// //     console.log(s)
// // }
// // sum(1, 2, 3)

// const sum1 = (a,b) => a+b  //*****************
// const sum2 = sum1(1,3)
// console.log(sum2)

// const sum3 = (a,b) =>{
//     let add = a+b
//     return add
// }
// let result1 = sum3(1,5) //*********************
// console.log(result1)


// // ... - spread operator
// const numbers = [1,2,3,4,5,6]
// console.log(numbers) //whole array will be show
// console.log(...numbers) //only the elements will be console

// const newNumbers = [numbers, 10, 100]
// console.log(newNumbers) // show include the array
// const newNumbers1 = [...numbers, 10, 100]
// console.log(newNumbers1) //show only the all elements of the newNumbers