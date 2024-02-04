
const products = [
    { name: 'shampoo', price: 700, quantity: 5},
    { name: 'chiruni', price: 120, quantity: 3},
    { name: 'shirt', price: 600  , quantity: 8},
    { name: 'pant', price: 800  , quantity: 2}
];

function getShoppingTotal(products){
    let total = 0;
    for(let product of products){
        let eachProduct = product.price * product.quantity;
        total = total + eachProduct;      
    }
    
    return total;
  
}

let shoppingCart = getShoppingTotal(products);
console.log( 'Total price of all products:', shoppingCart);