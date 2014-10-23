/*
 Keila Bowers
 WDD144-0 Section 02
 Functions_worksheet
 October 23, 2014
 */

//Circumference - Calculate the circumference of a circle.
//Circumference = 2 * pi 3.14 * diameter of the circle

//Asks user for radius
var radius = prompt("Please enter the radius of your circle");
//Prints radius to console so teacher can view
console.log(radius);
//create variable for pi
var pi = 2 * Math.PI;
//var result collects the return answer from function. the calculateCir is the argument for the function that matches with its parameters.
var result = calculateCir(radius, pi);
//prints result variable to console in a string
console.log("The circumference of the circle is "  + result + ".");


//Basic function structure to calc circumference.
//the function is given a name and in the "()" are the parameters to store the information given by the var
function calculateCir(r, p )
{   //In the brackets is the action. We are using the return to send the answer back out of the function
    return r * p;
}

//completed


//Figure out how many bee stings would it take to kill an animal based on weight
//Weight * Bee stings per pound (8.666666667)