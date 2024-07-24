let meals = [
  "Biryani",
  "Spicy Noodles",
  "Chicken Salad",
  "Pizza",
  "Taco Salad",
  "Beef Tacos",
  "Sushi"
];

let randomIndex = Math.floor(Math.random() * meals.length);

console.log("Today you should eat:", meals[randomIndex]);
