// First Item amount
// 1
var deCreaseItem1 = document.getElementById("deCreaseItem1");
var inputItem1 = document.getElementById("inputItem1");

deCreaseItem1.addEventListener("click", function () {
    var firstParser1 = parseInt(inputItem1.value);
    firstParser1--;
    inputItem1.value = firstParser1;
    priceItem1.innerText = 1200 * parseInt(inputItem1.value);
})
// 2
var inCreaseItem1 = document.getElementById("inCreaseItem1");
var priceItem1 = document.getElementById("priceItem1");

inCreaseItem1.addEventListener("click", function () {
    var firstParser2 = parseInt(inputItem1.value);
    firstParser2++;
    inputItem1.value = firstParser2;
    priceItem1.innerText = 1200*parseInt(inputItem1.value);
})

// Second Item amount
var deCreaseItem2 = document.getElementById("deCreaseItem2");
var inputItem2 = document.getElementById("inputItem2");

deCreaseItem2.addEventListener("click", function () {
    var secondParser1 = parseInt(inputItem2.value);
    secondParser1--;
    inputItem2.value = secondParser1;
    priceItem2.innerText = 59 * parseInt(inputItem2.value);
})
// 2
var inCreaseItem2 = document.getElementById("inCreaseItem2");
var priceItem2 = document.getElementById("priceItem2");

inCreaseItem2.addEventListener("click", function () {
    var secondParser2 = parseInt(inputItem2.value);
    secondParser2++;
    inputItem2.value = secondParser2;
    priceItem2.innerText = 59 * parseInt(inputItem2.value);
})

