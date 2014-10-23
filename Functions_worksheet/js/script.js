/*
 Keila Bowers
 WDD144-0 Section 02
 Functions_worksheet
 October 23, 2014
 */

//Circumference - Calculate the circumference of a circle.
//Circumference = pi 3.14 * diameter of the circle

//Asks user for radius
var radius = prompt("Please enter the radius of your circle");
//Prints radius to console so teacher can view
console.log(radius);
//create variable for pi
var pi = Math.PI;
//var result collects the return answer from function. the calculateCir is the argument for the function that matches with its parameters.
var result = calculateCir(radius, pi);
//prints result variable to console in a string
console.log("The circumference of the circle is "  + result + ".");

function calculateCir(r, p )
{
    return r * p;
}