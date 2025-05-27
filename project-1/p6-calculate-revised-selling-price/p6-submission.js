//Write solution code here
// Step 1: Declare and initialize variables
let itemName = 'Kaisa Bowl';
let sellingPrice = 109.90; // Number (Removed 'Rs.' to store as Number)

// Step 2: Calculate the revised selling price post hike of 5%
let revisedSellingPrice = sellingPrice * 1.05;

// Step 3: Display the revised selling price using template literals
console.log(`Revised Selling Price for ${itemName} is Rs. ${revisedSellingPrice.toFixed(3)}.`);
