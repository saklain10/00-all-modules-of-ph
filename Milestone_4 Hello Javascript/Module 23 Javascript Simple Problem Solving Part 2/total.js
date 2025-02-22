const numbers = [300,100,700,1200]

const products = [
    {name: "shampoo", price: 300, quantity: 5},
    {name: "chiruni", price: 100, quantity: 5},
    {name: "shirt", price: 700  , quantity: 5},
    {name: "pant", price: 1200  , quantity: 5},
]

function getShoppingTotal(products){
    let total = 0;
    for(const product of products){
        total = total + product.price
    }
    return total;   
}

const total = getShoppingTotal(products);
console.log("total ajke jabe:", total)