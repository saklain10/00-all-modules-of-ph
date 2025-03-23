const a = 10;

const first = () =>{
    second()
    // console.log("1st")
}
const second = () =>{
    third()
    // console.log("2nd")
}
const third = () =>{
    // console.log("3rd")
}

const b = 20;
first();
// console.log("Last")