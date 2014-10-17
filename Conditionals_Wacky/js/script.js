/*
 Keila Bowers
 WDD144-0 Section 02
 Conditionals-Wacky
 October 16, 2014
 */

//Will you make it all around your trick or treat run in time?

alert("Will you make it all around your trick or treat run in time?");

var time = prompt("Please enter how many hours you have for trick or treat.");
if(time === ""){
    time = prompt("You will need to enter time before you can continue.");
}

var distance = prompt("Please enter the distance in miles that you need to travel.");
if(distance === ""){
    distance = prompt("You will need to enter distance before you can continue.");
}

var averageWalkingSpeed = (2);
var neededSpeed = (distance / time);

(neededSpeed <= averageWalkingSpeed) ? console.log("Yes! You will make it around in time!"): console.log("No, I am sorry. You won't be able to get all the yummy candy unless you can walk " + neededSpeed + " mph.");


console.log(time);
console.log(distance);
console.log(neededSpeed + "mph");

