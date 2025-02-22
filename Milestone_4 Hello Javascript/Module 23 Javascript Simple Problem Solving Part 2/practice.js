// // Task -1:
// // Find the lowest number in the array below.
// // const heights2 = [167, 190, 120, 165, 137];

// const heights2 = [167, 190, 120, 165, 137];

// function findLowestNumber(heights){
//     let min = heights[0]
//     for(const num of heights){
//         // console.log(num)
//         if(num < min)
//             min = num;
//     }
//     return min;
// }
// const lowest = findLowestNumber(heights2)
// console.log(lowest)


// Task -2:
// Find the friend with the smallest name.


// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

// function lowestArrayLength(names) {
//     let min = names[0]
//     for (const len of names) {
//         if (len.length < names.length)
//             min = len;
//         // console.log(len)
//     }
//     return min;

// }
// const lowestName = lowestArrayLength(heights2)
// console.log(lowestName)


// Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

//  const employees = [
//             { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//             { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//             { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//             { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
//         ];


const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function calculateTotalSalary(){
    for(let employee of employees){
        console.log(employee)
    }
}