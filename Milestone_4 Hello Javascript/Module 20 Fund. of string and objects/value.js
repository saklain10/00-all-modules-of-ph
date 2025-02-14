const person = {
    name: "sodor uddin",
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ["bandarban",'saintmartin', 'kuakata']
}

person.salary = 30000;
person['salary'] = 32000;

console.log(person)
person['fav places'] = ['thailand', 'america', 'australia']
console.log(person['fav places'])

const keyName = 'profession'
console.log(person[keyName])

const propName = "profession";
person[propName] = 'devops'
console.log(person)