// console.log(1)
// console.log(2)
// console.log(3)

// setTimeout(()=>{console.log("hello")
// },4000) //call after each 3 sec

let count = 0;
const clockID = setInterval(()=>{
    count++;
    console.log(count)

    if(count >= 5)
    clearInterval(clockID)
},3000) 

// console.log(4)
// console.log(5)
// console.log(6)