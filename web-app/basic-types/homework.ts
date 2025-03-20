// Exercise 1: Check if a number is even or odd

let num1: number = 7;
let isEven: boolean = num1 % 2 === 0;

console.log(isEven ? "Even" : "Odd");

// Exercise 2: Check if a string has more than 10 characters
let text: string = "First Name";
let isLong: boolean = text.length > 10;

console.log(
  isLong
    ? "The text has more characters than 10"
    : "The text doesn't have more than 10 characters"
);

// Exercise 3: Verify if a number is positive
let number1: number = -1;
let isPositive: string;

if (number1 > 0) {
  isPositive = "Positive";
} else if (number1 < 0) {
  isPositive = "Negative";
} else {
  isPositive = "Zero";
}

console.log(isPositive);

// Exercise 4: Determine if a number is negative or zero
let numCheck: number = 10;
let isNonPositive: boolean = numCheck <= 0;

console.log(isPositive ? "Negative or Zero" : "Positive");

// Exercise 5: Check if a string is empty
let message1: string = "";
let isEmpty: boolean = message1.length === 0;

console.log(isEmpty ? "Empty" : "Not Empty");

// Exercise 6: Determine if a number is within a range (10 to 100 inclusive)
let rangeNumber: number = 33;
let isInRange: boolean = rangeNumber >= 10 && rangeNumber <= 100;

console.log(
  isInRange ? "The number is in the range" : "The number is not in the range"
);

// Exercise 7: Check if a number is either 0 or 100
let specialNumber: number = 30;
let isZeroOrHundred: boolean = specialNumber === 0 || specialNumber === 100;

console.log(
  isZeroOrHundred ? "The number is 0 or 100" : "The number is not 0 or 100"
);

// Exercise 8: Verify if a boolean value is true
let flag: boolean = true;
let isTrue: boolean = flag === true;

console.log(isTrue ? "True" : "False");

// Exercise 9: Check if a number is odd and greater than 50
let oddCheck: number = 51;
let isOddAndLarge: boolean = oddCheck % 2 !== 0 && oddCheck > 50;

console.log(
  isOddAndLarge
    ? "The number is odd and greater than 50"
    : "The number is not odd and greater than 50"
);

// Exercise 10: Determine if a string starts with the letter 'A'
let word: string = "Abracadabra";
let startsWithA: boolean = word.startsWith("A");

console.log(
  startsWithA ? "The word starts with A" : "The word doesn't start with A"
);
