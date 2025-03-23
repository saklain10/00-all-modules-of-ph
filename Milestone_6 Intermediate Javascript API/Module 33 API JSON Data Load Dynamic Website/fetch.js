// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => console.log(response))
// .then(data =>{
//     console.log(data)
// })

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => console.log(response.json()))
// .then(data =>{
//     console.log(data)
// })

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(data =>{
//     console.log(data)
// })


// const handleLoadData = () =>{
//     console.log("hello")
// }
const handleLoadData = () =>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(data =>{
    console.log(data)
})
}