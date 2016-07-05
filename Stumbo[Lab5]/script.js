// alert("Hi!");

var f = ;
var c = ((f - 32) * (5/9));
  console.log("The temperature is " + c + " degrees Celsius");

var c = ;
var f = ((c * (9/5) + 32));
  console.log("The temperature is " + f + " degrees Fahrenheit");

// what to wear if:
// temp > 90
// temp is between 70 and 89
// temp is between 55 and 69
// temp is between 40 and 54
// temp < 40

var f = ;

if(f >= 90) {
	console.log("Wear your sunglasses");
} else if(f >= 70 && f <= 89) {
	console.log("Wear shorts");
} else if(f >= 55 && f <= 69) {
	console.log("Wear a cool t-shirt");
} else if(f >= 40 && f <= 54) {
	console.log("Wear a light jacket");
} else {
	console.log("Wear a thick coat");
}

// List integers 1-100.
// Numbers divisible by 3 should be replaced with the word "Fizz",
// those divisible by 5 replaced by the word "Buzz",
// and those divisible by both 3 and 5 replaced with the word "FizzBuzz".

 for (var i=1; i <= 100; i++) {

     if (i % 15 == 0) {
         console.log("FizzBuzz");
        } else if (i % 3 == 0) {
         console.log("Fizz");
        } else if (i % 5 == 0) {
         console.log("Buzz");
        } else {
         console.log(i);
        }
	}