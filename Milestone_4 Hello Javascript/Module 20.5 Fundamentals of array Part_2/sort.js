const persons = ["rakib", "nokib", "sakib", "akib", "dakib"];
const sortedPersons = persons.sort();
console.log(sortedPersons)

//sort -->
// const numbers = [4,7,12,8,38,6, 1];
// const numbers_asc = numbers.sort()
// console.log(numbers_asc) //no working properly

// const numbers = [4,7,12,8,38,6, 1];
// const numbers_asc = numbers.sort(function(a,b) {return a-b})
// const numbers_dsc = numbers.sort(function(a,b) {return b-a})
// console.log(numbers_asc)
// console.log(numbers_dsc)

//for mittigate coping array
const numbers = [4,7,12,8,38,6, 1];
const numbers_asc = [...numbers].sort(function(a,b) {return a-b})
const numbers_dsc = [...numbers].sort(function(a,b) {return b-a})
console.log(numbers_asc)
console.log(numbers_dsc)
