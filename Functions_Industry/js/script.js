/*
 Keila Bowers
 WDD144-0 Section 02
 Functions-Industry
 October 23, 2014
 */

//Formula to figure out cost of working a project
//hours contracted * hourly rate (if over so many hours introduce discount)


var hours = prompt("Estimate how many hours the project will take to complete.");
var hourlyRate = 20;
var discountHourlyRate = 18;

var discountPrice = discountPrice(hours,discountHourlyRate);
var normalPrice = normalPrice(hours,hourlyRate);



if(hours <= 75){
    function normalPrice(h,hRate){
        return h * hRate
    }
    console.log(normalPrice);
}else if(hours > 75){
    function discountPrice(h2,dRate){
        return h2 * dRate
    }
    console.log(discountPrice);
}




