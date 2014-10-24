/*
 Keila Bowers
 WDD144-0 Section 02
 Functions-Wacky
 October 23, 2014
 */

//What temperature will your hot pockets be at when you cook them?
//Cooking time / number of hot pockets = temperature level (Base level will be 2.50 recommended for 1 hot pocket)

var baseTemp = 2.50 / 1;
var cookingTime = prompt("Please enter cooking time in decimal format.");
var pocketNumber = prompt("How many Hot Pockets are you cooking at one time?");

var pocketTemp = pocketTemp(cookingTime, pocketNumber);
console.log(pocketTemp + " is the pocket temperature level");

function pocketTemp(time, number){
    return time / number
}

if(pocketTemp >= 2.5){
    console.log("The temperature level of your Hot Pocket will be similar to that of Mordor. Good Luck!")
}else if(pocketTemp < 2.5){
    console.log("The temperature level of your Hot Pocket will be similar to that of The Lands of Winter. On the plus side, at least you won't melt your tongue!")
}

