// review strings and string concatenation
const botName = "MathBot";
const greeting = `Hi there! My name is ${botName} and I want to teach you about the different Math methods in JavaScript.`;

console.log(greeting);

console.log(
  "The Math.random() method returns a pseudo random number between 0 and less than 1."
);

// when writing tests make sure they don't hard code a number value here
const randomNum = Math.random();
console.log(randomNum);

console.log("Now, generate a random number between two values.");
const max = 100;
const min = 1;

// teach them how to generate a random number between two values
const randomNum2 = Math.random() * (max - min) + min;
console.log(randomNum2);

console.log(
  "The Math.floor() method rounds the value down to the nearest whole integer."
);
const numRoundedDown = Math.floor(6.7);
console.log(numRoundedDown);

console.log(
  "The Math.ceil() method rounds the value up to the nearest whole integer."
);
const numRoundedUp = Math.ceil(3.2);
console.log(numRoundedUp);

console.log(
  "The Math.round() method rounds the value to the nearest whole integer."
);
const numRounded = Math.round(2.7);
console.log(numRounded);
const numRounded2 = Math.round(11.2);
console.log(numRounded2);

console.log(
  "The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range."
);
const maxNum = Math.max(3, 125, 55, 24);
console.log(maxNum);
const minNum = Math.min(6, 90, 14, 90, 2);
console.log(minNum);

console.log("It was fun learning about the different Math methods with you!");
