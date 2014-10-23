//JavaScript
//ScreenCast - Variable Scope

/*
The structure
    function functionName() {
    }

 */

var width = 5;

//creates the function (Defines)

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
   // console.log(area); // uses var within function
}

console.log(width); //use var outside function
// calling or invoking (runs)

calcArea();



