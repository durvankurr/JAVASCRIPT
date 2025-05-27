/*
    Practice 4 - Sum the Digits of a Number
*/

// Declare and initialize variable to store the value whose digits need to be added up
let num = 4386;

// Declare and initialize variable to store the sum value
let sum = 0;

// Write `while` loop to calculate sum of digits
while (num > 0) {
  let digit = num % 10; // Fetch the digit at unit position
  sum += digit;        // Add the digit to the sum
  num = Math.floor(num / 10); // Update num to get the number without the last digit
}

// Display the value of sum
console.log(`The sum of the digits is ${sum}`);