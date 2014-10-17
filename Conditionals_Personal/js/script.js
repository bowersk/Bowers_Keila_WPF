/*
 Keila Bowers
 WDD144-0 Section 02
 Conditionals-Personal
 October 16, 2014
 */

//Figure out what gauge of cable to use based on electrical current.

alert("Welcome, we will figure out what gauge of cable you need based on current load. \nWe will first need to determine current.");

var watts = prompt("Please enter wattage.");
var volts = prompt("Please enter voltage.");
var current = (watts / volts);



console.log(watts);
console.log(volts);
console.log(current);