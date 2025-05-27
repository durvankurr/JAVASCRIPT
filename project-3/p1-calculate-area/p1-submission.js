//Write solution code 
// Function to calculate the area of a square
function calculateAreaOfSquare(side) {
    return side * side;
  }
  
  // Function to calculate the area of a circle
  function calculateAreaOfCircle(radius) {
    const pi = 3.14;
    return pi * radius * radius;
  }
  
  // Function to calculate the area of a rectangle
  function calculateAreaOfRectangle(length, breadth) {
    return length * breadth;
  }
  
  // Example usage of the functions
  
  // Parameters for the square
  let squareSide = 5;
  console.log(`The area of the square is ${calculateAreaOfSquare(squareSide)} square units.`);
  
  // Parameters for the circle
  let circleRadius = 7.5;
  console.log(`The area of the circle is ${calculateAreaOfCircle(circleRadius).toFixed(2)} square units.`);
  
  // Parameters for the rectangle
  let rectangleLength = 10.5;
  let rectangleBreadth = 4.2;
  console.log(`The area of the rectangle is ${calculateAreaOfRectangle(rectangleLength, rectangleBreadth).toFixed(2)} square units.`);
  