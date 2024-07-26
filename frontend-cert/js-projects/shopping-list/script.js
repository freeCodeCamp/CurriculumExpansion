console.log("Let's create a grocery shopping list");
// first create the shopping list variable with an empty array
const shoppingList = [];

// teach push method and have them practice here
console.log(
  "It will be nice to have some fruit to eat. Let's add some to our list."
);

shoppingList.push("Apples");
console.log(`Current Shopping List: ${shoppingList}`);
shoppingList.push("Grapes");
console.log(`Current Shopping List: ${shoppingList}`);

// teach unshift method and have them practice here
console.log(
  "It looks like we are out of cooking oil at home. Let's put that at the top of the list so we get that first."
);

shoppingList.unshift("Vegetable Oil");
console.log(`Current Shopping List: ${shoppingList}`);

// have them review the push method
console.log(
  "It might be nice to have some snacks. Let's add some to the bottom of our list."
);

// teach them that push accepts multiple items
shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(`Current Shopping List: ${shoppingList}`);

// teach them the pop method
console.log(
  "This looks like to much junk food. Let's remove the last item from the list"
);

shoppingList.pop();
console.log(`Current Shopping List: ${shoppingList}`);

// review unshift method and have them practice here
console.log(
  "It might be nice to get a dessert. Let's add that to the top of the list so we get that first."
);

shoppingList.unshift("Chocolate Cake");
console.log(`Current Shopping List: ${shoppingList}`);

// teach the shift method and have them practice here
console.log(
  "On second thought, maybe we should be more health conscious. Let's remove the dessert from the list."
);

shoppingList.shift();

console.log(`Here is the final shopping list: ${shoppingList}`);
