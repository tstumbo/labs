// Write a simple shopping list program. We'll build on this in the next lab.
// 1. Create several grocery item objects with properties of name and price.
// 2. Store the grocery item objects in an array.
// 3. Loop through the array and print out the name
// and price on a new line.
// 4. Total up the amount with a label ‘total’.
// Be prepared to demo your work.


var groceryList = [

{
  name: "carrots",
  price: 1
},

{
  name: "milk",
  price: 3
},

{
  name: "apples",
  price: 2
}

];

var totalPrice = 0;

groceryList.forEach(function(item){
 console.log(item.name + ": $" + item.price.toFixed(2));
 totalPrice += item.price;
});

console.log("Total: $" + totalPrice.toFixed(2));

// Write a JavaScript function to generate an array. 
// The elements in the array should be integers in a range 
// between two integers given as arguments.



function makeArray(max, min, length) {
	var arr = [];

	for(var i = 0; i < length; i++) {
		var random = (Math.floor(Math.random()*(max-min + 1) + min);
	}
	arr.sort(
		function (a,b){
			return a - b;
		}
		);
	return arr;
}

console.log(makeArray(10,2,5));





function makeArray() {
  var maxNum = prompt('Tell me a number');
  var minNum = prompt('Tell me a smaller a number');
  maxNum = Number(maxNum);
  minNum = Number(minNum);
​
  console.log(maxNum);
  console.log(minNum);
​
  var arr = [];
  while(minNum <= maxNum) {
    arr.push(minNum);
    minNum++;
  }
  console.log(arr);
}
​
makeArray();