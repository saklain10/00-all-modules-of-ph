function add(num1,num2){
    return num1+num2
}

function subtract(num1,num2){
    return num1 - num2;
}
function multiply(num1,num2){
    return num1 * num2;
}
function devide(num1,num2){
    return num1 / num2;
}

function calculator(a,b, operation){
    if (operation === "add"){
        const result = add(a,b)
        return result
    }
    if (operation === "subtract"){
        const result = subtract(a,b)
        return result
    }
    if (operation === "multiply"){
        const result = multiply(a,b)
        return result
    }
    if (operation === "devide"){
        const result = devide(a,b)
        return result
    }
    else{
        return "Only 'add', 'subtract', 'multiply', 'devide' is allowed"
    }
    
}

// const resultt = calculator(5,7,'add')
// console.log(resultt)
// const result = calculator(5,7,'subtract')
// console.log(result)
// const resul = calculator(5,7,'multiply')
// console.log(resul)
const resu = calculator(5,7,'devide')
console.log(resu)
