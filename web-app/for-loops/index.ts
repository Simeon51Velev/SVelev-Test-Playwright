// For...of loop
let fruitsFor: string[] = ["Apple", "Banana", "Peach", "Watermelon"];

for (let fruit of fruitsFor) {
  //   console.log(`Fruit is ${fruit}`);
}

// For ... of over array of numbers
let numbers: number[] = [10, 20, 30, 40];

// for (let number of numbers) {
//   if (number > 20) {
//     console.log(`Number is ${number}`);
//   } else {
//     console.log(`${number} plus 5 is ${number + 5}`);
//   }
// }

// For ... of over array of strings

// let messageFor: string = "Hello world!";

// let welcomeMessage: string = "Welcome test Pesho! How test are you test?";
// let modifiedMessage = welcomeMessage.replace("test", "");
// console.log(modifiedMessage);

// for (let letter of messageFor) {
//   if (letter === "o") {
//     console.log(letter.replace("o", "@"));
//   } else {
//     console.log(letter);
//   }
// }

// For...in over object
interface Student {
  name: string;
  lastName: string;
  age: number;
}
const student = { name: "Pesho", lastName: "Petrov", age: 20 };

for (let key in student) {
  console.log(`${key} = ${student[key as keyof Student]}`);
}

// For...in over array
let numsArr: number[] = [35, 25, 45, 50];

for (let index in numsArr) {
  console.log(`${index} = ${numsArr[index]}`);
}

// For loop
for (let i = 0; i <= 5; i++) {
    console.log(`Index ${i}`)
}

export {};
