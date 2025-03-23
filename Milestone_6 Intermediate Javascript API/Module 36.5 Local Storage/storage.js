const handleAddToStorage = () =>{
    const person = {
        name: "sakib",
        age: 24,
        friends: ["rohim"]
    }

    const convertedToString = JSON.stringify(person);
    localStorage.setItem("introduction", convertedToString)
}
const data = localStorage.getItem("introduction")
// console.log(data)
const converted = JSON.parse(data)
console.log(converted)