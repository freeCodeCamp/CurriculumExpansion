let inputNumber = prompt("Enter a number: ");
let result = 1;
for (let i = 1; i <= inputNumber; i++) {
  result *= i;
}

console.log(`Factorial of ${inputNumber} is: ${result}`); 
