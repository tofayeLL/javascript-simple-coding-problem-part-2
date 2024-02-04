/* 
* Q: first 100 ---> 100 price
* Q: 101 to 200 ---> 90 price
* Q: 201 to above --> 70 price
*/


function layerDiscountTotal(quantity){
 let first100Price = 100;
 let second100Price = 90;
 let above200Price = 70;
 if(quantity <= 100){
    let total = quantity * first100Price;
    return total;
 }
 else if(quantity <= 200){
    let remainingQuantity = quantity - 100;
    let remainingTotal = remainingQuantity * second100Price;
    let total = (100 * first100Price) + remainingTotal;
    return total;
    
 }
 else{
    let remainingQuantity = quantity - 200;
    let remainingTotal = remainingQuantity * above200Price;
    let total = (100 * first100Price) + (100 * second100Price) + remainingTotal;
    return total;
 }
}


let discountedPrice = layerDiscountTotal(280);
console.log(discountedPrice);