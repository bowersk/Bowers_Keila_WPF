/*
 Keila Bowers
 WDD144-0 Section 02
 Functions_worksheet
 October 23, 2014
 */

//Circumference - Calculate the circumference of a circle.
//Circumference = pi 3.14 * diameter of the circle

var radius = prompt("Please enter the radius of your circle");
console.log(radius);

var pi = Math.PI;
var result = calculateArea(radius, pi);
console.log("The circumference of the circle is "  + result + ".");

function calculateArea(r, p )
{
    return r * p;
}