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
 console.log(item.name + ": $" + item.price);
 totalPrice += item.price;
});

console.log("Total: $" + totalPrice);