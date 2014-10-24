/*
 Keila Bowers
 WDD144-0 Section 02
 Functions-Wacky
 October 23, 2014
 */

//What temperature will your hot pockets be at when you cook them?
//Cooking time / number of hot pockets = temperature level (Base level will be 2.50 recommended for 1 hot pocket)

var baseTemp = 2.50 / 1;
var cookingTime = prompt("Please enter counting time in decimal format.");
var pocketNumber = prompt("How many Hot Pockets are you cooking at one time?");

var pocketTemp = pocketTemp(cookingTime, pocketNumber);
console.log(pocketTemp);

function pocketTemp(time, number){
    return time / number
}




