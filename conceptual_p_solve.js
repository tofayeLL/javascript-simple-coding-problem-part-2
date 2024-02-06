/* ----problem 1--- Ana to vori convert */

function AnaToVori(Ana) {

    let vori = Ana * 0.0625;
    return vori;



}
// console.log(AnaToVori(16));


//---------------------------------------------------//

/* ----problem 2-------- total cost of  singara, samucha, jilapi--*/

function pandaCost(singaraQuantity, samuchaQuantity, jilapiQuantity) {
    let singaraPrice = 7;
    let samuchaPrice = 10;
    let jilapiPrice = 15;
    let result = singaraQuantity * singaraPrice + samuchaQuantity * samuchaPrice + jilapiQuantity * jilapiPrice;

    return result;
}
// console.log(pandaCost(1, 1, 1));


//----------------------------------------------------------//


/* --problem 3 ---- layered discount --- total cost of picnic persons*/

function picnicBudget(person){
    let first100Price = 0 ;
    let second100Price = 0;
    let above200price = 0;
    let total = 0;

    if(person <= 100){
        first100Price = person * 5000;
        return first100Price;
    }
    else if(person <= 200){
        first100Price = 100 * 5000;
        second100Price = (person - 100) * 4000;
        total = first100Price + second100Price;
        return total;
    }
    else if(person > 200){
        first100Price = 100 * 5000;
        second100Price = 100 * 4000;
        above200price = (person - 200) * 3000;
        total = first100Price + second100Price + above200price;
        return total;
    }

}
console.log(picnicBudget(201));