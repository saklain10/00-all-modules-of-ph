const collage ={
    name: "vnc",
    class: ['10','11'],
    events : ["science fair", "bijoy dibosh", '21 Feb'],
    unique : {
        color: 'blue' ,
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}
console.log(collage.unique.color)
console.log(collage.unique.result.merit)

collage.unique.result.merit = "top top top most"
console.log(collage.unique.result.merit)
console.log(collage['unique'].result.merit)

console.log(collage.events[1])
collage.events[1] = '16 december'
console.log(collage.events)

console.log(collage)
delete collage.class;
console.log(collage)
