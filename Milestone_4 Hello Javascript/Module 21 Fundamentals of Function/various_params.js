// //** for a given string tell me wether it has even number of characters or not*/

// function evenSeizedString(str){
//     console.log(str);
// }
// evenSeizedString("Dhaka")

// function evenSeizedString(str){
//     const size = str.length;
//     console.log(str, size)
// }
// evenSeizedString("Dhaka")
// evenSeizedString("Faka")

// function evenSeizedStr(str){
//     const sizee = str.length;
//     console.log(str, sizee)
//     if(sizee % 2 === 0){
//         console.log("even sizee")
//     }
//     else{
//         console.log("odd size")
//     }
// }
// evenSeizedStr("Dhaka")
// evenSeizedStr("Faka")


// function DoubleOrTriple(number, doDouble) {
//     if (doDouble === true) {
//         const result = number * 2;
//         return result
//     }
//     else {
//         const result = number * 3;
//         return result
//     }
// }
// console. log(DoubleOrTriple(5, true))
// console.log(DoubleOrTriple(5, false))

function numberOfElements(numbers){
    const len = numbers.length;
    return len;
}
const output = numberOfElements([12,45,78,121254,4,5]);
console.log(output)

function getAge(person){
    const age = person.age;
    return age;
}
