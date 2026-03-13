// Debugging checkout system

// Inside Editor
// Data setup
const user = "Alex";

const cart = [
  { item: "Keyboard", price: 50, quantity: 1 },
  { item: "Mouse", price: 25, quantity: 2 },
  { item: "Monitor", price: 300, quantity: 1 }
];

const stock = 2;
const requestedQuantity = 3;
const paymentSuccessful = false;

// Checkout debugging logs
// Clear old logs
console.clear();

// Group checkout logs
console.groupCollapsed("Checkout Process");

// Log user
console.log("Current user:", user);

// Display cart details in a table
console.log("Cart contents:");
console.table(cart);

// Warn if requested quantity exceeds stock
if (requestedQuantity > stock) {
  console.warn("Requested quantity exceeds available stock.");
}

// Show error if payment fails
if (!paymentSuccessful) {
  console.error("Payment failed. Please try again.");
}

// Close the console group
console.groupEnd();