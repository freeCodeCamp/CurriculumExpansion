function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

let multiply = (a, b) => a * b

let divide = (a, b) => {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}

function calculator() {
    const operation = prompt("Choose an operation: add, subtract, multiply, divide").toLowerCase();
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));

    let result;
    switch (operation) {
        case "add":
            result = add(num1, num2);
            break;
        case "subtract":
            result = subtract(num1, num2);
            break;
        case "multiply":
            result = multiply(num1, num2);
            break;
        case "divide":
            result = divide(num1, num2);
            break;
        default:
            result = "Error: Invalid operation.";
    }

    console.log(`The result of the ${operation} operation is: ${result}`);
}

calculator();
