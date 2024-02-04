// generate max number from an array

let heights = [65, 66, 68, 72, 78, 90, 110, 40];

function getMaxNumber(numbers){
    let max = numbers[0];
    for(let num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}


let maxHeight = getMaxNumber(heights);
console.log( 'Maximum height is:', maxHeight);


//-----------------------------------------------------//


// -----another way to solve by using my logic-------
/* function getMax(arr){
    let max = [];
   
    for(let num of arr){
        if(num > max){
           max = num;
        }
    }
    return max;
}

const heights = [65, 66, 68, 72, 78, 90];
let maxHeight = getMax(heights);
console.log( 'maximum height is:', maxHeight); */