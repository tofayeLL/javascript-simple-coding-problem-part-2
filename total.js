
// total sum of the products prices

const products = [
    { name: 'shampoo', price: 700 },
    { name: 'chiruni', price: 120 },
    { name: 'shirt', price: 600 },
    { name: 'pant', price: 1200 }
]


function getShoppingTotal(products){
    let sum = 0;
    for(let product of products){
       sum = sum + product.price;
    }
    return sum;
}

let totalSum = getShoppingTotal(products);
console.log( 'Shopping total price is:', totalSum);