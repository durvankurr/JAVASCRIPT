// Declare and initialize variable to store count value
const count = 10;

// Declare and initialize variables to store the first two values of the fibonacci series
let n1 = 0;
let n2 = 1;

// Display the first two values of the fibonacci series
console.log(n1);
console.log(n2);

// Write `for` loop to generate rest of the values in the fibonacci series
for (let i = 2; i < count; i++) {
  let n3 = n1 + n2;  // Store sum of n1 and n2 in variable n3
  console.log(n3);   // Display value of n3
  n1 = n2;           // Assign value of n2 to n1
  n2 = n3;           // Assign value of n3 to n2
}
