// function sum(num1, num2){
//     console.log(arguments)
//     return num1+num2;
// }
// const result = sum(10,20)
// console.log(result)

// const sum2 = function(num1,num2){
//     return num1 + num2;
// }

// console.log(sum2(10,20))

// //arrow function method 1
// const sum2 = (num1, num2) => num1+num2

// console.log(sum2(10,20))

// //arrow function method 2 
// const sum3 = (num4, num5) => {
//     return num4 + num5
// }
// console.log(sum3(10,30))

// const strAndInt = (num) => {
//     console.log("number=",num)
// }
// strAndInt(10)


const test = () => console.log("hello empty")
console.log(test()) //undefined


// for single line task
const square=x=>x*x
console.log(square(10))

//for multi line task
const squaree=x=>{
    return x*x
}
console.log(squaree(10))

const sum = (n1, n2) => n1 + n2
// console.log(sum)


// document.getElementById("title").addEventListener("click", function(){
//     console.log("sakib")
// })


document.getElementById("title").addEventListener("click", () =>{
    console.log("sakib")
})