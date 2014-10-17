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

if(current >= 200){
    alert("Your current load is: " + current + "amps. \nYou will need to use 4/0 gauge cable.");
    console.log("Your current load is: " + current + "amps. \nYou will need to use 4/0 gauge cable.");
}else if(current <= 100 ){
    alert("Your current load is: " + current + "amps. \nYou will need to use 1/0 gauge cable.");
    console.log("Your current load is: " + current + "amps. \nYou will need to use 1/0 gauge cable.");
}else{
    alert("Your current load is: " + current + "amps. \nYou will need to use 2/0 gauge cable.");
    console.log("Your current load is: " + current + "amps. \nYou will need to use 2/0 gauge cable.");
}

console.log(watts);
console.log(volts);
console.log(current);