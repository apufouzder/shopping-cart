// First Item Price Calculations selected id.
var deCreaseItem1 = document.getElementById("deCreaseItem1");
var inputItem1 = document.getElementById("inputItem1");
var inCreaseItem1 = document.getElementById("inCreaseItem1");
var priceItem1 = document.getElementById("priceItem1");


// First item deCreaseItem1.addEventListener..
deCreaseItem1.addEventListener("click", function () {
    decreaserItemFun(1219, inputItem1, priceItem1);
})

// First item inCreaseItem1.addEventListener..
inCreaseItem1.addEventListener("click", function () {
    increaserItemFun(1219, inputItem1, priceItem1)
})


// Second Item Price Calculations selected id.
var deCreaseItem2 = document.getElementById("deCreaseItem2");
var inputItem2 = document.getElementById("inputItem2");
var inCreaseItem2 = document.getElementById("inCreaseItem2");
var priceItem2 = document.getElementById("priceItem2");


// Second item deCreaseItem2.addEventListener..
deCreaseItem2.addEventListener("click", function () {
    decreaserItemFun(59, inputItem2, priceItem2);
})

// Second item inCreaseItem2.addEventListener..
inCreaseItem2.addEventListener("click", function () {
    increaserItemFun(59, inputItem2, priceItem2);
})


// all DecreaserItem Function
function decreaserItemFun(price, inputItem, priceItem) {
    // Only item decrease
    var firstParser1 = parseInt(inputItem.value);
    firstParser1--;
    inputItem.value = firstParser1;
    priceItem.innerText = price * parseInt(inputItem.value);
    // Total cost calculation
    subTotalCost.innerText = parseInt(priceItem1.innerText) + parseInt(priceItem2.innerText);
    taxCost.innerText = parseInt(subTotalCost.innerText / 100);
    totalCost.innerText = parseInt(subTotalCost.innerText) + (taxCost.innerText);
}

// all IncreaserItem Function
function increaserItemFun(price, inputItem, priceItem) {
    // Only item increase
    var firstParser1 = parseInt(inputItem.value);
    firstParser1++;
    inputItem.value = firstParser1;
    priceItem.innerText = price * parseInt(inputItem.value);
    // Total cost calculation
    subTotalCost.innerText = parseInt(priceItem1.innerText) + parseInt(priceItem2.innerText);
    taxCost.innerText = parseInt(subTotalCost.innerText / 100);
    totalCost.innerText = parseInt(subTotalCost.innerText) + (taxCost.innerText);
}

// subTotalCost, taxCost, totalCost, Calculation selected Id.
var subTotalCost = document.getElementById("subTotalCost");
var taxCost = document.getElementById("taxCost");
var totalCost = document.getElementById("totalCost");


// Cancel a item selected id.
const firstItem = document.getElementById("firstItem");
const cancelItem1 = document.getElementById("cancelItem1");
const secondItem = document.getElementById("secondItem");
const cancelItem2 = document.getElementById("cancelItem2");

// First item cancel addEventListener..
cancelItem1.addEventListener("click", function(){
    firstItem.style.display = "none";
    priceItem1.innerText = 0;
    // Total cost calculation
    subTotalCost.innerText = parseInt(priceItem1.innerText) + parseInt(priceItem2.innerText);
    taxCost.innerText = parseInt(subTotalCost.innerText / 100);
    totalCost.innerText = parseInt(subTotalCost.innerText) + (taxCost.innerText);
})

// Second item cancel addEventListener..
cancelItem2.addEventListener("click", function(){
    secondItem.style.display = "none";
    priceItem2.innerText = 0;
    // Total cost calculation
    subTotalCost.innerText = parseInt(priceItem1.innerText) + parseInt(priceItem2.innerText);
    taxCost.innerText = parseInt(subTotalCost.innerText / 100);
    totalCost.innerText = parseInt(subTotalCost.innerText) + (taxCost.innerText);
})


// Check Out  related selected id.
const checkOutButton = document.getElementById("checkOutButton");
const section = document.getElementById("section");
const conformOrder = document.getElementById("conformOrder");

checkOutButton.addEventListener("click", function(){
    section.style.display = "none";
    conformOrder.style.display = "block";
})



