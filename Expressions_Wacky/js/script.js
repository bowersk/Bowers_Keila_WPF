/*
 Keila Bowers
 WDD144-0 Section 02
 Expressions-Wacky
 October 9, 2014
 */

//Calculating if you will have enough pie to feed everyone PI 3.14 slices

alert("Do you have enough pie to feed everyone PI slices?")

var pies = prompt("How many pies do you have?");
var pieSlices = prompt("How many slices are in each pie?")
var people = prompt("How many people do you need to feed?");
var piSlices = 3.14

var totalSlices = pies * pieSlices;
var slicesPerPerson = people * piSlices;
var remainingPie = totalSlices % slicesPerPerson;

console.log("With " + pies + " pies and " + people + " to feed, you will have a remainder of "  + remainingPie + " slices left over.");


