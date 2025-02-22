function calculateVAT(price) {

    if (typeof price === "number" && price > 0) {

        let vat = price * 7.5 / 100

        return vat;

    }

    else {

        return "Invalid"

    }

}

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

function willSuccess(marks) {

    if (Array.isArray(marks)) {

        let passingMarkCount = 0;

        let failingMarkCount = 0;

        for (let i = 0; i < marks.length; i++) {

            if (typeof marks[i] !== "number") {

                return "Invalid"

            }

            if (marks[i] >= 50) {

                passingMarkCount++

            }

            else {

                failingMarkCount++

            }

        }

        if (passingMarkCount > failingMarkCount) {

            return true

        }

        else {

            return false

        }

    }

    else {

        return "Invalid";

    }

}

function validProposal(person1, person2) {

    if ((typeof person1 === "object" && typeof person2 === "object") && (("gender" in person1) && ("gender") in person2) && ("age" in person1) && ("age" in person2)) {

        if ((person1.gender !== person2.gender) && Math.abs((person1.age - person2.age)) <= 7) {

            return true;

        }

        else {

            return false

        }

    }

    else {

        return "Invalid"

    }

}


console.log(validProposal({ name: "Rahul", gender: "male", age: 28 },
    { name: "Joya", gender: "female", age: 21 }))

console.log(validProposal({ name: "milon", gender: "male", age: 20 },
    { name: "sumi", gender: "female", age: 25 }))

console.log(validProposal({ name: "shuvo", gender: "male", age: 20 },
    { name: "joy", gender: "male", age: 25 }))

console.log(validProposal({ name: "toya", gender: "female", age: 20 },
    { name: "kader", gender: "male", age: 25 }))

console.log(validProposal({ name: "toya", gender: "female", age: 24 },
    { name: "bjoy", gender: "male", age: 32 }))

console.log(validProposal("Mizan", { name: "mitu", gender: "male", age: 32 }))

console.log(validProposal({ name: "mitu", gender: "male", age: 32 }, "Mizan"))


function calculateSleepTime(times) {

    if (!Array.isArray(times)) {

        return "Invalid"

    }

    let sleepTimes = 0;

    for (let i = 0; i < times.length; i++) {

        if (typeof times[i] !== 'number') {

            return "Invalid"

        }

        sleepTimes = sleepTimes + times[i];

    }

    let hour = Math.floor(sleepTimes / 3600);

    let minute = Math.floor((sleepTimes % 3600) / 60);

    let second = Math.floor(sleepTimes % 60);

    return {

        hour,

        minute,

        second

    }

}

// console.log(calculateSleepTime([1000, 499, 519, 300]));
// console.log(calculateSleepTime([1000, 2000, 725]))
// console.log(calculateSleepTime([100, 3800]))
// console.log(calculateSleepTime([]))
// console.log(calculateSleepTime([5600]))
// console.log(calculateSleepTime([100, 3800, "90"]))

