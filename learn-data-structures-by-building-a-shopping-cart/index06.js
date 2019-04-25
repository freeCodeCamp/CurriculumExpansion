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
}

/*
Good job! Now we have a place to store any items we buy.

To manipulate states in class, we need to start creating other methods.

Let's create a method called addItem that will help us start adding items to the cart.

Declare a method addItem under the constructor function. Use the same syntax like constructor method.
*/
