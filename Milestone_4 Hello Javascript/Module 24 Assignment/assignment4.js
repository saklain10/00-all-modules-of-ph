// function calculateVAT(price) {
//     if (typeof price === "number" && price > 0) {
//         let vat = price * 7.5 / 100
//         return vat;
//     }
//     else {
//         return "Invalid"
//     }
// }
// const vatt = calculateVAT(yu)
// console.log(vatt)


// function validContact(contact) {
//     if (typeof contact === 'string') {
//         for (let i = 0; i < contact.length; i++) {
//             if (contact[i] < '0' || contact[i] > '9') {
//                 return "invalid"; // Found a non-numeric character
//             }
//             if (contact.length === 11 && contact[0] === '0' && contact[1] === '1') {
//                 return true;
//             }
//             else {
//                 return false
//             }
//         }
//         return "invalid"


//     }



function validContact(contact) {
    if (typeof contact !== 'string') {
        return "invalid"
    }
    for (let i = 0; i < contact.length; i++) {
        if (contact[i] < "0" || contact[i] > "9") {
            return false;
        }
    }
    if (contact.length === 11 && contact[0] === '0' && contact[1] === '1' && !contact.includes(" ")) {
        return true;
    }

    return false


}

const a = validContact('0181.945677')
console.log(a)
const a6 = validContact('0181a945677')
console.log(a6)
const a4 = validContact('tgjxxk')
console.log(a4)

const a1 = validContact("01819234567")
console.log(a1)

const b = validContact("0181923 4567")
console.log(b)

const c = validContact("018192345679")
console.log(c)

const d = validContact(["01987654321"])
console.log(d)

const e = validContact("01345678900")
console.log(e)

const f = validContact("02145678900")
console.log(f)

const g = validContact(true)
console.log(g)

const m = validContact("abc45678")
console.log(m)

const a8 = validContact("12819234567")
console.log(a8)









// function willSuccess(marks) {
//     if (Array.isArray(marks)) {
//         let passingMarkCount = 0;
//         let failingMarkCount = 0;
//         for (let i = 0; i < marks.length; i++) {
//             if (typeof marks[i] !== "number"){
//                 return "Invalid"
//             }
//             if (marks[i] >= 50) {
//                 passingMarkCount++
//             }
//             else {
//                 failingMarkCount++
//             }
//         }
//         if(passingMarkCount > failingMarkCount){
//             return true
//         }
//         else{
//             return false
//         }
//     }
//     else {
//         return "Invalid";
//     }
// }
// console.log(willSuccess([60, 70, 80, "a", 30] ))
// console.log(willSuccess([48 , 48 , 92 , 100 ] ))
// console.log(willSuccess([48, 48, 50, 50, 100] ))
// console.log(willSuccess([ ] ))
// console.log(willSuccess([ 90 ] ))
// console.log(willSuccess([ 90 ,  99 , 87 , 48 , 34 , 49 ] ))
// console.log(willSuccess("100 , 100" ))
// console.log(willSuccess(90))

// function validProposal(person1, person2) {
//     if ((typeof person1 === "object" && typeof person2 === "object") && (("gender" in person1)&&("gender") in person2) && ("age" in person1)&&("age" in person2)) {

//         if ((person1.gender !== person2.gender) && Math.abs((person1.age - person2.age)) <= 7) {
//             return true;
//         }
//         else {
//             return false
//         }
//     }
//     else {
//         return "Invalid"
//     }
// }
// console.log(validProposal({ name: "Rahul", gender: "male", age: 28 },
//     { name: "Joya", gender: "female", age: 21 }))

// console.log(validProposal({ name: "milon", gender: "male", age: 20 },
//     { name: "sumi", gender: "female", age: 25 }))

// console.log(validProposal({ name: "shuvo", gender: "male", age: 20 },
//     { name: "joy", gender: "male", age: 25 }))

// console.log(validProposal({ name: "toya", gender: "female", age: 20 },
//     { name: "kader", gender: "male", age: 25 }))

// console.log(validProposal({ name: "toya", gender: "female", age: 24 },
//     { name: "bjoy", gender: "male", age: 32 }))

// console.log(validProposal("Mizan", { name: "mitu", gender: "male", age: 32 }))

// console.log(validProposal({ name: "mitu", gender: "male", age: 32 }, "Mizan"))




// function calculateSleepTime(times) {
//     if (!Array.isArray(times)) {
//         return "Invalid"
//     }
//     let sleepTimes = 0;
//     for (let i = 0; i < times.length; i++) {
//         if (typeof times[i] !== 'number') {
//             return "Invalid"
//         }

//         sleepTimes = sleepTimes + times[i];
//     }

//     let hour = Math.floor(sleepTimes / 3600);
//     let minute = Math.floor((sleepTimes % 3600) / 60);
//     let second = Math.floor(sleepTimes % 60);

//     return {
//         hour,
//         minute,
//         second
//     }
// }

// console.log(calculateSleepTime([1000, 499, 519, 300]));
// console.log(calculateSleepTime([1000, 2000, 725]))
// console.log(calculateSleepTime([100, 3800]))
// console.log(calculateSleepTime([]))
// console.log(calculateSleepTime([5600]))
// console.log(calculateSleepTime([100, 3800, "90"]))