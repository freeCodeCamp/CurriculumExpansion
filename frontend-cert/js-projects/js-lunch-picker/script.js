
// task 1: declare these arrays:

let kidsMeal = ["Chicken Nuggets", "Pizza", "Burgers", "Tacos", "Fries", "Prawns"];
let adultsMeal = ["Salad", "Wraps", "Hummus", "Rice"];

// task 2: remove "prawns" from kidsMeal using pop()

kidsMeal.pop();

// task 3: add "beef steak" to adultMeal using push()

adultsMeal.push("Beef Steak");

let randomIndexKids = Math.floor(Math.random() * kidsMeal.length);
let randomIndexAdults = Math.floor(Math.random() * adultsMeal.length);

console.log("Today kids should eat:", kidsMeal[randomIndexKids]);
console.log("Today adults should eat:", adultsMeal[randomIndexAdults]);
