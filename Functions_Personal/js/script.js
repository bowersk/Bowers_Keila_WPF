/*
 Keila Bowers
 WDD144-0 Section 02
 Functions-Personal
 October 23, 2014
 */

//Christmas Budget
//How much do you have to spend per child and how many toys will that get based on average cost of hot toys

alert("It's that time of year again! Which means it is time to figure out your Christmas Budget. Please follow along with the prompts to figure out how much per child you can spend and how many toys that will buy based on average cost.")

var totalBudget = prompt("How much money can you devote to Christmas this year?");
var totalChildren = prompt("How many children do you have to shop for?");
var totalOthers = prompt("How much do you wish to use for other people?");
var averageCostToy = 55;

var resultPerChild = amountPerChild(totalBudget,totalOthers, totalChildren);
alert("You will be able to spend " + resultPerChild + " dollars on each child. This will leave " + totalOthers + " dollars to spend on other people.");
console.log("You will be able to spend " + resultPerChild + " dollars on each child. This will leave " + totalOthers + " dollars to spend on other people.");

function amountPerChild(budget, others, children){
    return (budget - others )/children
}

//Anonymous Function
var toysPerChild = function(perChild, toyCost){
    var toys = perChild / toyCost;
    return toys;

}

var toysChild = toysPerChild(resultPerChild, averageCostToy);
console.log(toysChild);

console.log(totalBudget + " Total Budget");
console.log(totalChildren + " Total Children");
console.log(totalOthers + " Other people to budget for");
console.log(averageCostToy + " Average cost of popular toys");

