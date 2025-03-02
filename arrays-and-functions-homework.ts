// Exercise 1

let games: string[] = ["FPS", "MMORPG", "Simulator", "Souls"];
games.push("Action");

console.log("Games:", games);

// Exercise 2

let hours: number[] = [12, 14, 16, 18];
hours.shift();

console.log("Hours:", hours);

// Exercise 3

let arrNum: number[] = [1, 2, 3, 4, 5];
let arrNumDivided = arrNum.map((x) => x / 2);
console.log("Array Divide:", arrNumDivided);

// Exercise 4

let arrNum1: number[] = [3, 7, 1, 9, 12, 4];
let arrNumFiltered = arrNum1.filter((x) => x > 5);
console.log("Array With Numbers Higher than 5:", arrNumFiltered);

// Exercise 5

let arrNum2: number[] = [9, 3, 7, 2, 8, 5];
arrNum2.sort((a, b) => a - b);
console.log("Ascending Order Sorted Array:", arrNum2);

// Exercise 6

let arrFruits: string[] = ["apple", "banana", "cherry", "date", "elderberry"];
let arrNumSliced = arrFruits.slice(0, 3);
console.log("First 3 elements sliced:", arrNumSliced);

// Exercise 7

let vehicles: string[] = ["car", "bike", "bus", "train", "boat"];
let vehiclesSpliced = vehicles.splice(1, 2);
console.log("2nd and 3rd spliced:", vehicles);

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
