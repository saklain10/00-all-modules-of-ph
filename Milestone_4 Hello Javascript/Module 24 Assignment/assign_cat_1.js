// function cashOut(money) {
//     if (typeof money !== 'number' || money <= 0) {
//         return "Invalid"
//     }
//     {
//         let charge = money * 1.75 / 100
//         return charge;
//     }

// }
// console.log(cashOut(100))
// console.log(cashOut(true))
// console.log(cashOut(2000))
// console.log(cashOut(100))
// console.log(cashOut('100'))



function validEmail(email) {
    if (typeof email !== 'string') {
        return "Invalid";
    }

    let atIndex = email.indexOf("@");

    // "@" must be present and NOT at the start (0th index) or at the end (before .com)
    if (atIndex <= 0 || atIndex >= email.length - 5) {
        return false;
    }

    // Must end with ".com"
    if (!email.endsWith(".com")) {
        return false;
    }

    // First character must NOT be ".", "-", "_", "+", or "@"
    if ([".", "-", "_", "+", "@"].includes(email[0])) {
        return false;
    }

    // Must not contain spaces
    if (email.includes(" ")) {
        return false;
    }

    return true;
}

// ✅ **Test Cases**
console.log(validEmail("ferdos@gmail.com"));     // ✅ true
console.log(validEmail("sakib67@gmail.com"));    // ✅ true
console.log(validEmail("-ggud6@yahoo.com"));     // ❌ false (Starts with "-")
console.log(validEmail(["jhankar@gmail.com"]));  // ❌ "Invalid" (Not a string)
console.log(validEmail("Mewo@cat.com"));         // ✅ true
console.log(validEmail("chat420@gpt.net"));      // ❌ false (Does not end with ".com")
console.log(validEmail(true));                   // ❌ "Invalid" (Not a string)
console.log(validEmail("@ggud6@yahoo.com"));     // ❌ false (Starts with "@")
console.log(validEmail("prog-hero-.com"));       // ❌ false (No "@")
console.log(validEmail("abc@.com"));             // ❌ false (Invalid placement of "@")
console.log(validEmail("hello@world.com"));      // ✅ true
console.log(validEmail("hello.world@com"));      // ❌ false (Does not end with ".com")
console.log(validEmail("hello@worldcom"));       // ❌ false (No dot before "com")

