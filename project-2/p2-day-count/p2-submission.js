/*
    Practice 2 - Count Days for a Given Month and Year​
*/

// Declare and initialize variables to store month and year values
let month = 2;   // Example month value, change as needed for testing
let year = 2008; // Example year value, change as needed for testing

// Declare a variable to store day count
let dayCount;

// Write the logic used to check the number of days in the month using switch case
switch (month) {
  case 1:  // January
  case 3:  // March
  case 5:  // May
  case 7:  // July
  case 8:  // August
  case 10: // October
  case 12: // December
    dayCount = 31;
    break;
  
  case 4:  // April
  case 6:  // June
  case 9:  // September
  case 11: // November
    dayCount = 30;
    break;
  
  case 2:  // February
    // Check for leap year
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      dayCount = 29; // Leap year
    } else {
      dayCount = 28; // Non-leap year
    }
    break;
  
  default:
    dayCount = 'Invalid month'; // Handle invalid month values
}

// Display the value of day count
console.log(`Number of days in month ${month} of year ${year} is ${dayCount}`);

// Test cases
let testCases = [
  { month: 2, year: 2008 }, // Leap year
  { month: 2, year: 2009 }, // Non-leap year
  { month: 1, year: 2009 }, // January
  { month: 11, year: 2009 } // November
];

testCases.forEach(test => {
  let { month, year } = test;
  switch (month) {
    case 1: 
    case 3: 
    case 5: 
    case 7: 
    case 8: 
    case 10: 
    case 12:
      dayCount = 31;
      break;
    
    case 4: 
    case 6: 
    case 9: 
    case 11:
      dayCount = 30;
      break;
    
    case 2:
      if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        dayCount = 29;
      } else {
        dayCount = 28;
      }
      break;
    
    default:
      dayCount = 'Invalid month';
  }
  
  console.log(`Number of days in month ${month} of year ${year} is ${dayCount}`);
});
