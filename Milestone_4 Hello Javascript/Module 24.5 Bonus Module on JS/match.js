const numbers = [45, 65, 23, 98, 19]
// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number)
// }


for (const number of numbers) {
    console.log(number)
}

const products = [
    { id: 1, name: "xiaomi phone", price: 190000 },
    { id: 2, name: "iphone", price: 190000 },
    { id: 3, name: "mack book air", price: 190000 },
    { id: 4, name: "lenovo yoga laptop 2025", price: 190000 },
    { id: 5, name: "Dell inspiron Laptop", price: 190000 },
    { id: 6, name: "samsung phone note 7", price: 190000 },
    { id: 7, name: "Nokia old age phone gone", price: 190000 },
    { id: 8, name: "One Phone", price: 190000 }

]
// for(const product of products){
//     console.log(product)
// }


function matchProducts(products, search) {
    const matched = []; //(parameter) products: any
    for (const product of products) {


        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product)
        }

        // console.log(product)
    }
    return matched;
}



const result = matchProducts(products, 'phone');
console.log(result);
