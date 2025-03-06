// Exercise 8

function findLargest(num1: number, num2: number, num3: number): number {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}

let largestNumber = findLargest(100, 150, 200);
console.log("The Largest Number Is:", largestNumber);

// Exercise 9

function convertToCentimeters(inches: number = 1): number {
  return inches * 2.54;
}
let defaultParameter = convertToCentimeters();
console.log("Default Parameter (1 inch to cm):", defaultParameter);

let passedParameter = convertToCentimeters(12);
console.log("Passed Parameter (10 inches to cm):", passedParameter);

// Exercise 10

function calculateArea(width: number, height?: number): number {
  if (height === undefined) {
    return width * width;
  } else {
    return width * height;
  }
}

let AreaIsSquare = calculateArea(6);
console.log("Area of the square (6x6) is:", AreaIsSquare);

let AreaIsRectangle = calculateArea(3, 10);
console.log("Area of the rectangle (3x10) is:", AreaIsRectangle);
