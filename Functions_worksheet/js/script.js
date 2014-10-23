/*
 Keila Bowers
 WDD144-0 Section 02
 Functions_worksheet
 October 23, 2014
 */

//Circumference - Calculate the circumference of a circle.
//Circumference = pi 3.14 * diameter of the circle

var radius = 5;
var pi = Math.PI;
var result = calculateArea(radius, pi);
console.log("The circumference of the circle is "  + result + ".");

function calculateArea(r, p )
{
    return r * p;
}