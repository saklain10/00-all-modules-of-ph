const disha = 56;
const salman = 95;

if (disha > salman) {
    console.log("disa get the strawberry")
}
else {
    console.log("salman get the strawberry")
}

// inside a function
function getMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}
const max = getMax(56, 79);
console.log(max)

const max1 = getMax(96, 79);
const max2 = getMax(56, 98);

const ultimateMax = getMax(max1, max2);
console.log("max of two is",ultimateMax)