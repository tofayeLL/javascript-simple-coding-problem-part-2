
// inside array thakte pare number, string, object and array o thakte pare

const mobiles = [
    {brand: 'samsung', price: 20000, camera: '12mp', color: 'black'},
    {brand: 'Nokia', price: 20000, camera: '12mp', color: 'black'},
    {brand: 'Apple', price: 100000, camera: '12mp', color: 'black'},
    {brand: 'Xioami', price: 15000, camera: '12mp', color: 'black'},
    {brand: 'Oneplus', price: 45000, camera: '12mp', color: 'black'},
    {brand: 'Htc', price: 29000, camera: '12mp', color: 'black'}
];

function cheapestPhone(phones){
    let min = phones[0];
  
    for(let phone of phones){
      if(phone.price < min.price){
        min = phone;
      }
       
    }
    return min;
}

let cheapestMobile = cheapestPhone(mobiles);
console.log(cheapestMobile);