

// -----problem 1----
/* --question:  Find the lowest number in the array below.--*/

const heights2 = [167, 190, 120, 165, 137];

function findLowestNumber(numbers) {
    let lowest = numbers[0];
    for (let num of numbers) {
        if (num < lowest) {
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

function smallestName(names) {
    let smallest = names[0];
    for (let name of names) {
        if (name.length < smallest.length) {
            smallest = name;
        }
    }
    return smallest;
}

let smallName = smallestName(friends);
console.log(smallName);



// -----------------------------------------------------------------//

// ------problem 3--------
/* question: Your task is to calculate the total budget required to buy electronics */

function calculateElectronicsBudget(laptopQnt, tabletsQnt, mobilesQnt) {
    let laptopPrice = 35000;
    let tabletsPrice = 15000;
    let mobilesPrice = 20000;
    let totalMoneyRequired = 0;


    let laptopTotalCost = laptopPrice * laptopQnt;
    let tabletTotalCost = tabletsPrice * tabletsQnt;
    let mobileTotalCost = mobilesPrice * mobilesQnt;

    totalMoneyRequired = laptopTotalCost + tabletTotalCost + mobileTotalCost;

    /* ---another way---
     totalMoneyRequired = (laptopPrice * laptopQnt) + (tabletsPrice * tabletsQnt) + (mobilesPrice * mobilesQnt); */

    return totalMoneyRequired;


}

let totalBudget = calculateElectronicsBudget(3, 2, 3);
console.log(totalBudget);


