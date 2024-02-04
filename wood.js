/* 
* chair ---> 3 cft            //cft (cubic feet)
* table ---> 10 cft
* bed   ---> 50 cft
*/

function woodQuantityCalculator(chairQuantity, tableQuantity, bedQuantity){
  
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood  = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    
    const woodNeeded = totalWood + ' cft'
    return woodNeeded;
}

const wood = woodQuantityCalculator(0, 0, 2);
console.log(wood);




/* home task similar wood
* shirt --> 500;
* pant --> 600;
* shoe --> 900;
 */