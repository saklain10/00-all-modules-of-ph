const person = {
    name: "hena",
    1: "100", // for this case [] is applicable
    true: "isNaika", // for this case [] is applicable
    age: 30,
    friends: ["karim", "hero alam"],
    details: {
        job: "yes",
        isMarrid: true,
        status : "Not found",
        father:{
            name: "Anower",
        }
    }
}
// console.log(person.details.mother?.name) //undefined 
// console.log(person.details?.father?.name) //Anower
// // console.log(person[name])// not valid
// console.log(person["name"])// valid
// console.log(person["details"]["job"]) //method 2 by bracket notation
// console.log(person[1]) // for this case [] is applicable
// console.log(person[true]) // for this case [] is applicable
