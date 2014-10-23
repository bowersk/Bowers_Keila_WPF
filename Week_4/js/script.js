//JavaScript
//ScreenCast - Anonymous Functions

/*
also called closures


 */


//more common structure
var calcArea = function(width, height){
   var area = width * height;
    return area;

}

var a = calcArea(20, 30);
console.log(a);

//downside have to be declared before they are called


//anoy is for code brevity and better scope
