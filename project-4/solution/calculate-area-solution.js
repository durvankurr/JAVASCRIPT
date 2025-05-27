// copy the solution code from `Practice 1 - Calculate Area` 
// from the sprint `Implement Modular Programming using Functions`

function calculateAreaOfSquare(side) {
  if (side === undefined) return "Insufficient Input";
  if (typeof side !== 'number') return "Invalid Input Type, Side Should Be A Number !!";
  if (side <= 0) return "Incorrect Input, Side Cannot Be Zero or Negative !!";
  return side * side;
}

// Function to calculate the area of a rectangle
function calculateAreaOfRectangle(length, breadth) {
  if (length === undefined || breadth === undefined) return "Insufficient Inputs";
  if (typeof length !== 'number' || typeof breadth !== 'number') return "Invalid Input Type, Length and Breadth Should Be Numbers !!";
  if (length <= 0 || breadth <= 0) return "Incorrect Input, Length and Breadth Cannot Be Zero or Negative !!";
  return length * breadth;
}

// Function to calculate the area of a circle
function calculateAreaOfCircle(radius) {
  if (radius === undefined) return "Insufficient Input";
  if (typeof radius !== 'number') return "Invalid Input Type, Radius Should Be A Number !!";
  if (radius <= 0) return "Incorrect Input, Radius Cannot Be Zero or Negative !!";
  return Math.PI * radius * radius;
}




// do not delete the below code, it is written to export the functions to be tested
module.exports = {
  calculateAreaOfCircle,
  calculateAreaOfRectangle,
  calculateAreaOfSquare
}
