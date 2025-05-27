// Declare and initialize variables
let value1 = 30;
let value2 = 50;
let value3 = 45;

// Declare a variable to store the resultant largest number
let max;

// Write logic to find the largest number using nested-if
if (value1 > value2) {
  if (value1 > value3) {
    max = value1;
  } else {
    max = value3;
  }
} else {
  if (value2 > value3) {
    max = value2;
  } else {
    max = value3;
  }
}

// Display the largest number
console.log(`Largest Number using nested-if is ${max}`);

// Write logic to find the largest number using ternary operator
max = (value1 > value2) 
  ? (value1 > value3 ? value1 : value3) 
  : (value2 > value3 ? value2 : value3);

// Display the largest number
console.log(`Largest Number using ternary operator is ${max}`);
