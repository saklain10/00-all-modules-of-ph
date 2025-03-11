const hena = {
    name: 'hena',
    age: 10,
    friends: ["hero alam", "bappa"],
    status: "not found"
}


// henaName = hena.name;
// henaAge = hena.age;
// henaFriends = hena.friends;
// const henaStatus = hena.status; //no need
// console.log(henaStatus)

const {name,age,friends,status} = hena;
// const {age,friends,status,name} = hena; //applicable
// const {status, friends} //applicable
console.log(age);
console.log(name)


const person = ["hero alom", {name: "gias"}, "hena", 'bapparaj']
console.log(person[0])

const [nayok,obj,naika,birohi] = person;
console.log(nayok)
console.log(obj)
console.log(naika)
console.log(birohi)