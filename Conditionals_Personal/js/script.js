/*
 Keila Bowers
 WDD144-0 Section 02
 Conditionals-Personal
 October 16, 2014
 */

//Figure out what gauge of cable to use based on electrical current.

alert("Welcome, we will figure out what gauge of cable you need based on current load. \nWe will first need to determine current.");

//Declared and Defined variable watts and prompted user to enter value
var watts = prompt("Please enter wattage.");

//validated watts and re-prompted user
if(watts === ""){
    watts = prompt("You will need to enter wattage before you can continue.");
}

//Declared and Defined variable volts and prompted user to enter value
var volts = prompt("Please enter voltage.");

//validated volts and re-prompted user
if(volts === ""){
    volts = prompt("You will need to enter voltage before you can continue.");
}

var current = (watts / volts);



if(current >= 200){ //If the current load is greater or equal to 200 use 4/0 cable; alert user and print to console
    alert("Your current load is: " + current + "amps. \nYou will need to use 4/0 gauge cable.");
    console.log("Your current load is: " + current + "amps. \nYou will need to use 4/0 gauge cable.");
}else if(current <= 100 ){ //If the current is equal to or less than 100 use 1/0 cable; alert user and print to console
    alert("Your current load is: " + current + "amps. \nYou will need to use 1/0 gauge cable.");
    console.log("Your current load is: " + current + "amps. \nYou will need to use 1/0 gauge cable.");
}else{ //for all other values use 2/0 cable; alert user and print to console
    alert("Your current load is: " + current + "amps. \nYou will need to use 2/0 gauge cable.");
    console.log("Your current load is: " + current + "amps. \nYou will need to use 2/0 gauge cable.");
}

//print vars to console
console.log(watts);
console.log(volts);
console.log(current);

//completed