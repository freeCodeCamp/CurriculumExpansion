// Build a sentence maker

//Objective: create 2 different stories using the same template
// Reassign the variables to create a new story

// Words to fill in the placeholders
let adjective = "funny";
let noun = "dragon";
let verb = "jumping";
let place = "garden";
let adjective2 = "sparkling";
let noun2 = "cakes";

let story =
  "Once upon a time, there was a(n) " +
  adjective +
  " " +
  noun +
  " who loved to eat " +
  noun2 +
  ". The " +
  noun +
  " lived in a " +
  place +
  " and had " +
  adjective2 +
  " nostrils that blew fire when it was " +
  verb +
  ".";
// output the story
console.log("First story:\n" + story);

// reassign the variables

adjective = "cute";
noun = "puppy";
verb = "barking";
place = "park";
adjective2 = "colorful";
noun2 = "flower";

// create the second story
story =
  "Once upon a time, there was a(n) " +
  adjective +
  " " +
  noun +
  " who loved to eat " +
  noun2 +
  ". The " +
  noun +
  " lived in a " +
  place +
  " and had " +
  adjective2 +
  " nostrils that blew fire when it was " +
  verb +
  ".";
console.log("Second story:\n" + story);
