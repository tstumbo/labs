function convertTemp(temp, unit) {
	if(unit==="F") {
		console.log(((temp-32)*(5/9))+" C");
} else {
		console.log((temp*(9/5)+32)+ " F");
}
}

var theTemp = 32;
var theUnit = "C";
convertTemp(theTemp,theUnit);

// Bonus 1:

// List integers 1-100.
// Numbers divisible by 3 should be replaced with the word "Fizz",
// those divisible by 5 replaced by the word "Buzz",
// and those divisible by both 3 and 5 replaced with the word "FizzBuzz".

 for (var i=1; i <= 100; i++) {

     if (i % 15 === 0) {
         console.log("FizzBuzz");
        } else if (i % 3 === 0) {
         console.log("Fizz");
        } else if (i % 5 === 0) {
         console.log("Buzz");
        } else {
         console.log(i);
        }
	}

//Bonus 2:

// Write a function that assigns a random integer between 1 and 10 to a variable. 
// Prompt the user to input a guess number. 
// If the user input matches with the random number, print a "Good Work" message. 
// Otherwise, display a "Not a Match" message and prompt the user to guess again.
// BONUS: If the user's guess is not a match. 
// Give a hint like "Nope, higher" or "Lower" based on the user's guess in relation to the target number.



var randomInteger = ;

console.log("Guess a number between 1 and 10."); 

function guessNumber() {
if (randomInteger === 3) {
	console.log("Good Work");
} else {
	console.log("Not a match");
}
}

guessNumber();




var randomInteger = Math.floor((Math.random()*10)+1);

console.log("Guess a number between 1 and 10."); 

function guessNumber() {
if (randomInteger === 3) {
	console.log("Good Work");
} else if (randomInteger < 3){
	console.log("Nope, higher");
} else {
	console.log("Nope, lower");
}
}

guessNumber();