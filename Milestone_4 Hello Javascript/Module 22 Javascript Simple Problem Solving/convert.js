// inch to height
function inchToFeet(inch){
    const heightInFt = inch/12;
    return heightInFt;
}

//75
function inchToFeet2(inch){
    const feetFraction = inch/12;
    const feetNumber = parseInt(feetFraction)
    const inchRemaining = inch%12;
    const result = feetNumber + " ft " + inchRemaining + " inch."
    return result;
}



const shuvoHeight = inchToFeet(75)
console.log(shuvoHeight)
const shuvoHeight2 = inchToFeet2(75)
console.log(shuvoHeight2)


function mileToKilometer (mile){
    const kilo = mile * 1.60934;
    return kilo;
}
const inKilometer = mileToKilometer(2)
console.log(inKilometer)

function kiloMeterToMiles(kilo){
    const mile = kilo * 0.621371;
    return mile; 
}
const inMile = kiloMeterToMiles(2)
console.log(inMile)