
let jim = 76;
let kim = 69;
let tim = 70;

if(jim > kim && jim > tim){
    console.log('jim is the boss');
}
else if(kim > jim && kim > tim){
    console.log('kim is the boss');
}
else{
    console.log('tim is the boss');
}


// by using function
function maxOfThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    return num3;
}

// let max = maxOfThree(190, 490, 390);
// console.log(max);


// by using Math.max
const max = Math.max(2, 5, 8, 567, 3, 76, 198, 298);
console.log(max);