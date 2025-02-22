// function multiply (num1, num2){
//     const mult = num1 * num2;
//     return mult;
// }

// // const result = multiply(5,7);
// // console.log(result)
// // const result = multiply(5,'seven');
// // console.log(result) //error
// const result = multiply([5],[7]);
// console.log(result) //not give error

function fullName(first, second) {
    if (typeof first !== 'string') {
        return "Please provide a string"
    }
    else if (typeof second !== 'string') {
        return "Second name should be a string"
    }
    const full = first + ' ' + second;
    return full;
}

// const full = fullName("rahan", "sohan")
// console.log(full)
const full = fullName('akmal tyu')
console.log(full)

function getPrice(product){
    console.log(typeof product)
    if(typeof product !== "object"){
        return "please provide an object"
    }
    const price = product.price;
    return price
}
const price = getPrice({name: "grapes", price: 35, color: "blue"})
// const price = getPrice(5)
console.log(price)