

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

// let totalBudget = calculateElectronicsBudget(1, 1, 1);
// console.log(totalBudget);


// ---------------------------------------------------------------//

//-----problem 4 --------
/* ---question: You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone. */



const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },

];


function findAveragePhonePrice(array) {
    let total = 0;

    for (let phone of array) {
        total = total + phone.price;


    }
    console.log(total);
    let length = array.length;
    console.log(length);
    let average = total / length;
    return average;

}

// let avgPhonePrice = findAveragePhonePrice(phones);
// console.log(avgPhonePrice);


//-------------------------------------------------------//

//-----problem 5----
/* question: For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month. */

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function getTotalSalary(employees) {
    let total = 0;
    for (let employee of employees) {

        let eachEmployeeTotal = employee.starting + (employee.experience * employee.increment);

        total = total + eachEmployeeTotal;
    }
    return total;

}

let totalMonthlySalary = getTotalSalary(employees);
console.log('The total salary has to be provided by the company in a month:', totalMonthlySalary);


