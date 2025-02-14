const mobile = { 
    brand : 'samsung',
    price : 25000,
    color : "black",
    camera : "12mp",
    isNew : true,
}
// for of : array
// for in : object

// for( const prop in mobile){
//     console.log(prop) //for see the keys
//     console.log(mobile[prop]) //for see the value
// }

const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){
    // console.log(key)
    console.log(key, ":" ,mobile[key])
}

    
