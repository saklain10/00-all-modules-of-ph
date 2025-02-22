/**array has some duplicate elements */

const biryanikhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'kabul', 'cabul'];
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61]

function noDuplicate(array) {
    const unique = []
    // console.log(array);
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}
const uniqueArray = noDuplicate(biryanikhor);
console.log(uniqueArray)
const uniqueNum = noDuplicate(numbers)
console.log(uniqueNum)
