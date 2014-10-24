/*
 Keila Bowers
 WDD144-0 Section 02
 Functions-Personal
 October 23, 2014
 */

//Christmas Budget

var totalBudget = prompt("How much money can you devote to Christmas this year?");
var totalChildren = prompt("How many children do you have to shop for?");
var totalOthers = prompt("How much do you wish to use for other people?");
var shoppingYet = prompt("Have you finished shopping yet? \nEnter Y for Yes and N for N");


var resultPerChild = amountPerChild(totalBudget,totalOthers, totalChildren);
console.log("You will be able to spend " + resultPerChild + " dollars on each child. This will leave " + totalOthers + " dollars to spend on other people.");

function amountPerChild(budget, others, children){
    return (budget - others )/children
}

if (shoppingYet === "Y"){
    var shoppingTotal = prompt("How much money did you spend?");
}else if(shoppingYet === "N"){
    alert("Good luck shopping this Christmas season.");
}else{
    var shoppingYet = prompt("Please enter 'Y' for Yes or 'N' for no to proceed.");
}