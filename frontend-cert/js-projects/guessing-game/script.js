// teach Math.random()

console.log(Math.random());

// teach using Math.random() with floats greater than 1

console.log(Math.random() * 2);

// these will be review steps for extra practice
console.log(Math.random() * 5);
console.log(Math.random() * 10);

// teach rounding numbers down to nearest whole number
console.log(Math.floor(Math.random() * 2));

// this will be a review step for extra practice
console.log(Math.floor(Math.random() * 10));

// then have campers add 1 to the calculation so it is a range between 1 and 20
console.log(Math.floor(Math.random() * 20) + 1);

// this will be a review step for extra practice
// have them generate a random number between 1 and 35
console.log(Math.floor(Math.random() * 35) + 1);

// teach them the formulae for generating a random number within a specific range
// Math.random() * (max - min + 1) + min

// have campers generate a random number between 6 and 11 inclusive
console.log(Math.random() * (11 - 6 + 1) + 6);

// review step
// have them generate a random number between 32 and 40 inclusive
console.log(Math.random() * (40 - 32 + 1) + 32);

/*
    Add step to delete all of the code above ↑↑↑ since those
    were just lessons to prepare for the project
*/

console.log("Can you guess the number?");

/*
      when the project is complete have campers test out their code
      by temporarily changing this to a fixed number like 5
      const computerGuess = 5;
      then the last step could be to change it back to the original
*/

const computerGuess = Math.floor(Math.random() * 10) + 1;

// teach prompt here
const userGuess = prompt("Guess a number between 1 and 10 inclusive: ");

// have lessons for equality here
// let's just use strict equality here
// there will be lecture videos in the next module that diver deeper into == and ===

console.log(9 === 9);

// this will be a review step
console.log(10 === 1);
// review how strict equality checks for the same type and value
console.log("1" === 1);

/*
     Add step to delete equality lessons code above ↑↑↑ since those
     were just lessons to prepare for the last part of the project
*/

// teach if/else statement lessons

if ("freeCodeCamp" === "freeCodeCamp") {
  console.log("The if statement is true");
} else {
  console.log("The if statement is false");
}

/*
     Add step to delete if/else lessons code above ↑↑↑ since those
     were just lessons to prepare for the last part of the project
*/

/*
     Start by having campers write the if/else statement
     Then talk about how userGuess is not a number
     create step where campers see for themselves with the typeof operator
     console.log(typeof userGuess)
     then update the if statement to convert userGuess to a number
*/

if (Number(userGuess) === computerGuess) {
  console.log("You guessed correct!");
} else {
  console.log(
    `Sorry, that was not correct. I was thinking of the number ${computerGuess}`
  );
}
