

// -----problem 1----
/* --question:  Find the lowest number in the array below.--*/

const heights2 = [167, 190, 120, 165, 137];

function findLowestNumber(numbers){
   let lowest = numbers[0];
   for(let num of numbers){
    if(num < lowest){
        lowest = num;
    }
   }
   return lowest;
}

// let lowestHeight = findLowestNumber(heights2);
// console.log('Lowest height is:', lowestHeight);


//--------------------------------------------------//

//---------problem 2---------
/* ----question: Find the friend with the smallest name. */

const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(names){
    let smallest = names[0];
    for(let name of names){
        if(name.length < smallest.length){
            smallest = name;
        }
    }
   return smallest;
}

let smallName = smallestName(friends);
console.log(smallName);


