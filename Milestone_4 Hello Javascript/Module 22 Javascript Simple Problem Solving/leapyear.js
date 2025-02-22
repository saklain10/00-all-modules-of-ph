// /**
//  * year will be a leap year if year is divided by 4
//  */

// function isLeapYear(year) {
//     if (year % 4 === 0) {
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const isLipi = isLeapYear(2043)
// console.log(isLipi)

// function isLeapYear2(year){
//     if(year % 100 !== 0 && year % 4 ===0){
//         return true;
//     }
//     else if(year% 100 === 0 && year % 400 ===0){
//         return true
//     }
//     else{
//         return false;
//     }
// }
// const isLipi1 = isLeapYear2(2100)
// const isLipi2 = isLeapYear2(2400)
// const isLipi3 = isLeapYear2(1900)
// const isLipi4 = isLeapYear2(2052)
// console.log(isLipi1,isLipi2,isLipi3,isLipi4)


for (var i = 0; i < 5; i++) {
    setTimeout(function () {
   console.log(i);
}, 100);
}