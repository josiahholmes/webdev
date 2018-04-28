/* Some JS Practice
Program: Spending Exercise
Info: A program to test if you can afford to buy
multiple phones with accessories! */

// Some constant variables
const SPENDING_THRESHOLD = 600;
const PHONE_PRICE = 100;
const ACCESSORY_PRICE = 50;
const TAX_RATE = 0.06;

// Some regular variables
var accountBalance = 1000; // Starting account balance
var totalPrice = 0; // Keeps track of how much we're spending

/* Some helpful functions */
// Tax is included in the total price
function includeTax(amt) {
    return amt * TAX_RATE;
}

// Wanna make sure the price is formatted correctly!
function formatTotalPrice(amt) {
    return "$" + amt.toFixed(2);
}

// Let's try a while loop for purchasing the phones!
while (totalPrice < accountBalance) {
    totalPrice += PHONE_PRICE;

    // Only buy accessories if you're within the spending threshold
    if (totalPrice < SPENDING_THRESHOLD)
        totalPrice += ACCESSORY_PRICE;
}

totalPrice += includeTax(totalPrice);

console.log("Toal price: " + formatTotalPrice(totalPrice));

if (totalPrice > accountBalance) {
    console.log("You cannot afford to buy these phones!");
}
