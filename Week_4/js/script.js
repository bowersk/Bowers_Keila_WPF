//JavaScript
//Weekly GTT Video

/*
the 4 types: Sequential(Expressions); Conditional(If Statements, Ternaries); Repetitive(loops); Reusable (Functions);

 */

var min = prompt("please type in a min number");

/*
//will keep prompting until it is entered!
while(min==""){
   min = prompt("please enter a number!!")
}

//not a Number: NaN, checks to see if the value is a number
while(isNaN(min)){
    min = prompt("please enter a number");
}
*/

//combine with and or or (does both of the above in one phrase
while(isNaN(min)|| min==""){
    min = prompt("please enter a number");
}

var max = prompt("Please enter a max number");

while(isNaN(max) || max ==""){
    min = prompt("please enter a number");
}
//call our function
randomizer(5,20);
//holds it
var result = randomizer(min, max);

console.log(result);

//function to generate a random number between the min and max
function randomizer(minNumber, maxNumber){
  var randomNumber = Math.round(Math.random() * (maxNumber - minNumber)+ minNumber);
  return randomNumber;
}

//create a loop to generate 15 random numbers from our function


for(var i = 0; i<15; i++){
   console.log(randomizer(min,max));
}