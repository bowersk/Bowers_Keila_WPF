/*
 Keila Bowers
 WDD144-0 Section 02
 Functions-Personal
 October 23, 2014
 */

//Christmas Budget

var totalBudget = prompt("How much money can you devote to Christmas this year?");
var totalChildren = prompt("How many children do you have to shop for?");

var resultPerChild = amountPerChild(totalBudget, totalChildren);
console.log("You will be able to spend " + resultPerChild + " dollars on each child.");

function amountPerChild(budget, children){
    return budget/children
}