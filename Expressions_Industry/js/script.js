/*
 Keila Bowers
 WDD144-0 Section 02
 Expressions-Industry
 October 9, 2014
 */

//Figure out keyword density for search engine optimization.

alert("Welcome! We are going to figure out your keyword density for search engine optimization.")
var phraseWordCount = prompt("How many words are in your keyword phrase?");
var phrasePresence = prompt("How many times is your phrase shown in the text?");
var wordCountTotal = prompt("Please enter the total word count for your article.");

var phraseDensity = phrasePresence * phraseWordCount / wordCountTotal * 100;

console.log("Based on your phrase presence of " + phrasePresence + " times in a " + wordCountTotal + " word article, your SEO keyword density is " + phraseDensity + "%. " );
alert("Based on your phrase presence of " + phrasePresence + " times in a " + wordCountTotal + " word article, your SEO keyword density is " + phraseDensity + "%. " );


//completed