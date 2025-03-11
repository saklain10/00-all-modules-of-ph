// const person = {
//     name: "hena",
//     age: 10,
//     country: "BD"
// }
// // console.log(Object.keys(person))
// // console.log(Object.values(person))
// // console.log(Object.entries(person))
// person.status = "not found"


// console.log(Object.entries(person))



// const person = {
//     name: "hena",
//     age: 10,
//     country: "BD"
// }
// // for (let key in person){
// //     console.log(`key: ${key} value: ${person[key]}`)
// // }


// // console.log(Object.entries(person))
// for(let [key,value] of Object.entries(person)){
//     console.log(`key: ${key} value: ${value}`)
// }


const person = {
    name: "hena",
    age: 10,
    country: "BD"
}
person.gender = "female"
console.log(person)
// Object.seal(person) //no new value will add but the entire values are changeable
// Object.seal(person) //no new value will add and the entire values are not changeable