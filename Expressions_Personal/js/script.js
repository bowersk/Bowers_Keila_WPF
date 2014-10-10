/*
 Keila Bowers
 WDD144-0 Section 02
 Expressions-Personal
 October 9, 2014
 */

//Figure out how much it will cost to consume pop over a time frame.

var name = prompt("Hello, Please enter your name:");
alert("Welcome, " + name + ", we are going to figure out how much it will cost you to drink pop over a certain time frame.");


var popDaily = prompt("How many cans of pop do you drink daily?");
var popDays = prompt("How many days would you like to budget for?");
var popCostPack = prompt("How much money does it currently cost for a twelve pack of your pop?");

var popCostSingle = popCostPack / 12;
var popTotal = popCostSingle * popDaily * popDays;

console.log(name + ", if you continue to drink " + popDaily + " cans of pop per day, for " + popDays + " days, it will cost you a total of $" + popTotal + ".");
alert(name + ", if you continue to drink " + popDaily + " cans of pop per day, for " + popDays + " days, it will cost you a total of $" + popTotal + ".");


//completed