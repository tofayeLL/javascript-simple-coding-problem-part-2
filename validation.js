// ---------validation means check the input arguments of the function by use  (typeof)------- //


// for number
function multiply(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'number should be a number';
    }
    let mult = num1 * num2;
    return mult;
}
// let result = multiply(6, 'mofij');
// console.log(result);


// for string

function fullName(first, second){
    if(typeof first !== 'string'){
        return 'first should be a string';
    }
    else if(typeof second !== 'string'){
        return 'second should be string';
    }
   let fullName = first + ' ' + second;
   return fullName;
}

// let name = fullName('ashik', 6);
// console.log(name);


// for object

function getPrice(products){
    if(typeof products !== 'object'){
        return 'please provide an object';
    }
    const price = products.price;
    return price;
}
let product = getPrice({name: 'chulkanir dandi', price: 60, color: 'blue'});
// let product = getPrice(5);
console.log(product);



// but for array have somr issue

function getSecond(numbers){
    if(Array.isArray(numbers )  === false){
        return 'should provide an array';
    }
    let second = numbers[1];
    return second;
}
// let second = getSecond([1, 3, 4, 5, 7, 10]);
let second = getSecond(45);
console.log(second);