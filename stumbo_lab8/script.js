// Extend the shopping list program from the last lab.
// 1. Set up a basic HTML page.
// 2. Append the items and their prices from the
// shopping list to the page.
// 3. Show the total somewhere on the page.


var carrots = 

{
  name: "carrots",
  price: 1
};

var milk = 

{
  name: "milk",
  price: 3
};

var apples = 

{
  name: "apples",
  price: 2
};

var groceryList = [carrots, milk, apples];

var totalPrice = 0;



groceryList.forEach(function(item){
 (item.name + ": $" + item.price.toFixed(2) + "<br />");
 totalPrice += item.price;
});

var newElement = document.createElement("div");
newElement.innerHTML = "<li>" + carrots.name + ": $" + carrots.price.toFixed(2) + "</li>"; 
document.body.appendChild(newElement);

var newElement = document.createElement("div");
newElement.innerHTML = "<li>" + milk.name + ": $" + milk.price.toFixed(2) + "</li>"; 
document.body.appendChild(newElement);

var newElement = document.createElement("div");
newElement.innerHTML = "<li>" + apples.name + ": $" + apples.price.toFixed(2) + "</li>"; 
document.body.appendChild(newElement);

// function grocery (itemName, price) {
// 	this.itemName = itemName;
// 	this.price = price;

// 	this.newItem = function(){
// 		return this.itemName + ": $" +this.price;
// 	};

var newElement = document.createElement("div");
newElement.innerHTML = "<br />"; 
document.body.appendChild(newElement);

var item;
var priceTag;


function addOn() {

 item = document.getElementById("addItem").value;
 priceTag = document.getElementById("addPrice").value;

 var obj = [item, priceTag];
 list.push(obj);
}
document.write("Total: $" + totalPrice.toFixed(2));

// var newElement = document.createElement("div");
// newElement.innerHTML = "<li>" + groceryList.name + groceryList.price + "</li>"; 
// document.body.appendChild(newElement);


// Add a form with text inputs for 
// Name and Price and a button that allows you to add elements to the shopping list.
// Clicking 'Add' updates the list on the page. 
// Clicking 'Add' also updates the total.
