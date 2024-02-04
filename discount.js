/* 
* ticket q:1-100----> 100 price
* ticket more than 100 that means q:101 - 200 ---> 90 price
* ticket more than 200 that means q: 201- more ---> 70 price
*/

function discountedPrice(quantity){
    if(quantity <= 100){
        let totalPrice = quantity * 100;
        return totalPrice;
    }
    else if(quantity > 100 && quantity <= 200){
        let totalPrice = quantity * 90;
        return totalPrice;
    }
    else{
        let totalPrice = quantity * 70;
        return totalPrice;
    }
}

let ticketPrice = discountedPrice(101);
console.log(ticketPrice);