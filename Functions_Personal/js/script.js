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
var averageCostToy = 55;

var resultPerChild = amountPerChild(totalBudget,totalOthers, totalChildren);
console.log("You will be able to spend " + resultPerChild + " dollars on each child. This will leave " + totalOthers + " dollars to spend on other people.");

function amountPerChild(budget, others, children){
    return (budget - others )/children
}

var toysPerChild = function(perChild, toyCost){
    var toys = perChild / toyCost;
    return toys;

}

var toysChild = toysPerChild(resultPerChild, averageCostToy);
+console.log(toysChild);


