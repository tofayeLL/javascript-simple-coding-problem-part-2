
// generate min numbers from an array

const prices = [20000, 40000, 35000, 12000, 100000, 8000];

function getMin(numbers){
    let min = numbers[0];
    for(let num of numbers){
        if(num < min){
            min = num;
        }
    }
   return min;
}

const minPrice = getMin(prices);
console.log( 'Minimum price is:', minPrice);