
function add(num1, num2){
    sum = num1 + num2;
    return sum;
}
function subtract(num1, num2){
    sub = num1 - num2;
    return sub;
}
function multiply(num1, num2){
    mul = num1 * num2;
    return mul;
}
function divide(num1, num2){
    div = num1 / num2;
    return div;
}


function simpleCalculator(num1, num2, operation){
   if(operation === 'add'){
    let result = add(num1, num2);
    return result;
   }
   else if(operation === 'sub'){
    let result = subtract(num1, num2);
    return result;
   }
   else if(operation === 'multiply'){
    return multiply(num1, num2);

   }
   else if(operation === 'divide'){
    return divide(num1, num2);
   }
}

let calculate = simpleCalculator(12, 14, 'sub');
console.log(calculate);