
/* -------maximum number------- */
let disha = 40;
let salman = 50;
if (disha > salman){
    console.log('disha will get the strawberry');
}
else{
    console.log('salman will eat the strawberry');
}

// by using function
function maximumNumber(num1, num2){
    if(num1 > num2){
        return num1;
    }
    return num2
}

let max = maximumNumber(35, 45);
console.log(max);