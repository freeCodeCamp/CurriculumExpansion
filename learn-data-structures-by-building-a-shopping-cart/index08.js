const products = [
  {
    id: 0,
    name: "Vanilla buttercream cupcake",
    price: 2.99
  },
  {
    id: 1,
    name: "French Macaroon",
    price: 3.99
  },
  {
    id: 2,
    name: "Fruit sprinkles cupcake",
    price: 3.99
  },
  {
    id: 3,
    name: "Pink flower cupcake",
    price: 5.99
  }
];

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(id, products) {

  }
}

/*
Now we will receive unique id and array of products inside addItem method.

We can loop through the products array and check if a product contains the the id. 

If the id is found, let's store the entire product inside our items array we previously created.

Straightforward way of doing this would be utilizing forloop. Here is the pseudocode.

for(let i=0; i<arr.length; i++) {
  if(current product has the id) {
    push it inside our items array
  }
}

Don't forget to use this infront of items array when you are pushing it!
*/
