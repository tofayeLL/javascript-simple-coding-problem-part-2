/* 
* Q: first 100 ---> 100 price
* Q: 101 to 200 ---> 90 price
* Q: 201 to above --> 70 price
*/

function layeredDiscountedTotal(quantity){
    
    const first100Price = 100 ;
    const second100Price = 90 ;
    const above200Price = 70 ;
    
    if(quantity <= 100){
        let total = quantity * first100Price;
        return total;
    }
    else if(quantity <= 200){
      let firstTotal = 100 * first100Price;
      let remainingQuantity = quantity - 100;
      let remainingTotal  = remainingQuantity * second100Price;
      let total = firstTotal + remainingTotal;
      return total;
    }
    else{
        let firstTotal = 100 * first100Price;
        let secondTotal = 100 * second100Price;
        let remainingQuantity = quantity - 200;
        let remainingTotal = remainingQuantity * above200Price;
        let total = firstTotal + secondTotal + remainingTotal;
        return total; 
    }
    
}

let discountedPrice = layeredDiscountedTotal(202);
console.log(discountedPrice);