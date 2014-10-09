/*
Keila Bowers
WDD144-0 Section 02
Expressions Worksheet
October 9, 2014
 */

//Dog Years - Calculate how old Sparky is in dog years based on his actual age.
var ageYears = 2;
var dogYears = 7;

//Multiply current age in years by 7 dog years to get current age in dog years
var ageDogYears = ageYears * dogYears;

//Print to console the output of current age in dog years.
console.log("Sparky is " + ageYears + " human years old which is " + ageDogYears + " in dog years.")




//Slice of Pie Part 1 - Figure out how many slices of pizza each person at the party gets.

var slices = 6;
var people = 8;
var pizzas = 10;


// Number of pizzas order multiplied by slices per pizza divided by the amount of people to get slices per person.
var resultSlices =  pizzas * slices / people;

//Print to console the output of slices per person.
console.log("Each person ate " + resultSlices + " slices of pizza at the party.");




//Slice of Pie Part 2 - Figure out how many leftover slices Sparky gets.

//Number of pizzas multiplied by slices per pizza % (modulo) to figure out the remainder of slices.
var resultsSparky = pizzas * slices % people;

//Print to console the output of remainder of slices for Sparky.
console.log("Sparky got " + resultsSparky + " slices of pizza.");



