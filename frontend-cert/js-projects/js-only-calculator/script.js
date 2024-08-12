/*
    We want to stress that functions are reusable. 

    So we will start by creating two functions with obvious repetition.
    Then they will remove the code and create a reusable function with parameters.

    NOTE: There will be lecture videos talking about
    what happens when you don't use the return keyword and what it returns by default.
    So in this workshop, all functions will return something

*/

// have one step just for the function declaration
//  function addTwoAndSeven() {
//     // have one step to return the sum
//     return 2 + 7;
//   }

//   // then have a step to call the function and see result
//   console.log(addTwoAndSeven());

//   // Then have a step where campers create a new function called addThreeAndFour, return the result, and call the function
//   function addThreeAndFour() {
//     return 3 + 4;
//   }

//   console.log(addThreeAndFour());

function calculateSum(num1, num2) {
  return num1 + num2;
}

/**
   *  We will have multiple console statements here because they need 
      to see for themselves that you can call the same function
      with different arguments.
      Campers are currently struggling with this in the current curriculum as well as legacy
   */
console.log(calculateSum(2, 5));
console.log(calculateSum(12, 14));
console.log(calculateSum(7, 9));

// Then have a step where they create a calculateDifference function on their own
// Also have them call the function a few times

function calculateDifference(num1, num2) {
  return num1 - num2;
}

console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));

// Then have campers create the multiple and divide functions with console statements in one step

function calculateProduct(num1, num2) {
  return num1 * num2;
}

console.log(calculateProduct(13, 15));
console.log(calculateProduct(7, 11));
console.log(calculateProduct(3, 3));

function calculateQuotient(num1, num2) {
  return num1 / num2;
}

console.log(calculateQuotient(13, 15));
console.log(calculateQuotient(7, 11));

// have them add this console statement in the next step and see Infinity
console.log(calculateQuotient(3, 0));

// then have them refactor the calculateQuotient function to account for division by zero

// function calculateQuotient(num1, num2) {
//   return num2 === 0 ? "Cannot divide by zero" : num1 / num2;
// }

// have step where campers create a function for x²
// Note: they can choose between Math.pow or x**2

function calculateSquare(num) {
  return num ** 2;
}

console.log(calculateSquare(2));
console.log(calculateSquare(9));

// have last step where campers will get the square root for a number
// Campers will have learned about the Math object in an earlier module
// but this will be the first time working with the Math.sqrt() method

function calculateSquareRoot(num) {
  return Math.sqrt(num);
}

console.log(calculateSquareRoot(25));
console.log(calculateSquareRoot(10));
