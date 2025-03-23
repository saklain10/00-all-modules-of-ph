// // const loadData = () => {
// //     fetch("https://jsonplaceholder.typicode.com/todos/1")
// //     .then(res => res.json())
// //     .then(data=> console.log(data))
// //     .catch(err => console.log("error",err))
// // }

// // const { reject } = require("async");

// // loadData()

// // const fetchData = () => {
// //     return new Promise((resolve, reject) => {
// //     const status = true;
// //     if (status) {
// //         resolve({ name: "hero" })
// // }
// // else{
// //    reject("server error") 
// // }

// // })
// // }

// // fetchData()
// // .then(res => console.log(res))
// // .catch(err => console.log(err))


// // const fetchData = () => {
// //     return new Promise((resolve, reject) => {
// //     const status = true;
// //     if (status) {
// //         const mockData = {
// //             json:()=>Promise.resolve({name: "hero"})
// //         }
// //         resolve(mockData)
// // }
// // else{
// //    reject("server error") 
// // }

// // })
// // }

// // fetchData()
// // .then(res => res.json())
// // .then(data => console.log(data))
// // .catch(err => console.log(err))

// // // promiseALL

// const urls = [

//     'https://jsonplaceholder.typicode.com/posts/1',

//     'https://jsonplaceholder.typicode.com/comments/1',

//     'https://jsonplaceholder.typicode.com/albums/1',

//     'https://jsonplaceholder.typicode.com/photos/1',

//     'https://jsonplaceholder.typicode.com/todos/1',

//     'https://jsonplaceholder.typicode.com/users/1'

// ];

// Promise.all(urls.map(url => {
//     return fetch(url).then(res =>res.json()).then(data => data)
// }))
//     .then(res => res)
//     .then(data => console.log(data))
// .catch(error=>console.log("error", error))