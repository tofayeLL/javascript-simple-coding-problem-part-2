

// problem 1---- generate cube number.

function cubeNumber(number){
    if(typeof number !== 'number' || number < 0){
        return 'please provide a number';
    }
    let result = Math.pow(number,3);
    return result;

}
// console.log(cubeNumber(3));
// console.log(cubeNumber(-3));
// console.log(cubeNumber('ashik'));

//-------------------------------------------------------//

/* ----problem 2---match string value with other string--- */

function matchFinder(string1, string2){
    if(typeof string1 !== 'string' || typeof string2 !== 'string' ){
        return 'please provide a string as a parameter';
    }
   
    let result = string1.includes(string2);
    return result;
}

// console.log(matchFinder( 'john Doe', 'john'));


//---------------------------------------------------------------------//

/* ----problem 3------sort  */
function sortMaker(array){
 let [a,b] = array;
 if(a < 0  || b < 0){
    return 'Invalid';
 }
 else if(a === b){
     return 'equal';
 }

 /* let result = array.sort(function (a, b) {return b - a});
 return result; */
 else if(a > b){
    return [a, b];
 }
 else if(b > a){
    return [b, a];
 }
}
// console.log(sortMaker([0, 1]));
// console.log(sortMaker([2, -2]));
// console.log(sortMaker([-2, -2]));
// console.log(sortMaker([2, 2]));



//------------------------------------------------------//


/* ------problem 4---object value return if object missing return (__) */

function findAddress(object){
    
    let street = object.street || '__';
    let house = object.house || '__';
    let society = object.society || '__';
    let str = street + ',' + house + ',' + society ;
   return str;
   
}
// console.log(findAddress({street: 10, house: '10A', society: 'earth society'}));

//------------------------------------------------------//


/* --problem 5----check if sum of array numbers more that number then output true otherwise false--  */


function canPay(array, number){
  if(array.length === 0 || Array.isArray(array) === false){
    return 'please provide array as a parameter';
  }
    let sum = 0;
    /* for(let item of array){
       sum = sum + item;
    } */

    for(let i = 0; i < array.length; i++){
        /* let num = array[i];
        sum = sum + number; */
        sum = sum + array[i];
    }
    // console.log(sum);
    if(sum >= number){
        return true;
    }
    else{
        return false;
    }
}

console.log(canPay([1, 2, 5], 10));