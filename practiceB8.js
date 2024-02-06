

//  check to match string or not problem 2.

function matchFinder(string1, string2) {
    let result = string1.includes(string2);
    return result;

}

//  let result = matchFinder('john Doe', 'doe');
//  console.log(result);


//  problem 3 about sort number from array ----sort maker()--

/* function sortMaker(array){
    if(Array.isArray(array) === false){
        return 'provide a array';
    }
    else if(array[0] < 0 || array[1] < 0){
        return 'invalid';
    }
    else if(array[0] === array[1]){
        return 'equal';
    }
   let result = array.sort(function(a, b) {return b - a});
   return result;
}
console.log(sortMaker([2, 66]));
console.log(sortMaker([6, 6]));
console.log(sortMaker([5, -4]));
console.log(sortMaker('string', 'akij')); */


// another way to sole problem 3
function sortMaker(arr) {

    let [a, b] = arr;

    if (Array.isArray(arr) === false) {
        return 'provide a array';
    }
    else if (a < 0 || b < 0) {
        return 'invalid';
    }
    else if (a === b) {
        return 'equal';
    }
    /*  let result = arr.sort(function(a, b) {return b - a});
     return result; */
    //    another way to sort 
    if (a > b) {
        return [a, b];
    }
    else {
        return [b, a];
    }
}
// console.log(sortMaker([0, 1]));
// console.log(sortMaker([7, 7]));
// console.log(sortMaker([-5, -6]));
// console.log(sortMaker('string', 'akij'));







// problem 4 find address from an object --- that means show output object values but if any input is missing in object then show output (__)  ///

function findAddress(object) {
    let street = object.street || '__';
    let house = object.house || '__';
    let society = object.society || '__';

    let str = street + ',' + house + ',' + society;
    return str;

}

console.log(findAddress({ street: 10, house: '10A', society: 'earth society'}));











// problem five 

function canPay(array, number) {
    if (Array.isArray(array) === false || array.length === 0) {
        return 'your array is empty';
    }
    let sum = 0;
    let num;


    /* for(let item of array){
        sum = sum + item; 
    }*/
    for (let i = 0; i < array.length; i++) {
        num = array[i];
        sum = sum + num;
    }
    console.log(sum);

    if (sum >= number) {
        return true;
    }
    return false;
}


// console.log(canPay([1, 2, 5], 10));