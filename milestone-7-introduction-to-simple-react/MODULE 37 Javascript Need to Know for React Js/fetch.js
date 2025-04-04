// const person = {
//     name: "Hero Alom",
//     age: 40,
//     friends: ["bd", "CN", "rahim"],
//     family: {
//         fathername: "kolim uddin",
//         mothername: "jorina"
//     }
// }

// const jsonData = JSON.stringify(person)
// console.log(jsonData)
// const planData = JSON.parse(jsonData)
// console.log(planData)

// // fetch
// fetch("url")
//     .then(res > res.json())
//     .then(data=>console.log(""))

const person = {
    name: "Hero Alom",
    age: 40,
    friends: ["bd", "CN", "rahim"],
    family: {
        fathername: "kolim uddin",
        mothername: "jorina"
    }
}

const keys=Object.keys(person)
console.log(keys)
const values = Object.values(person)
console.log(values)


//array of object
const products = [
    {name:"redmi", brand: "xiaomi", price: 3000, color:"black"},
    {name:"samsung", brand: "samsung", price: 5000, color:"white"},
    {name:"apple1", brand: "apple", price: 5000, color:"gold"},
    {name:"apple2", brand: "apple", price: 5000, color:"gold"},
    {name:"redmi2", brand: "xiaomi", price: 2000, color:"black"},
]

const newData = {
    name: "walton",
    brand: "walton",
    price: "3000",
    color: "gray"
}

const newArray = [...products,newData]
console.log(newArray)

const remainingProducts=products.filter(p=>p.brand!=="xiaomi")
console.log(remainingProducts)

const newArray2 = [...remainingProducts,newData]
console.log(newArray2)