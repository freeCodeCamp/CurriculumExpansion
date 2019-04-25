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

  }
}

/*
Inside the constructor is where we can initialize our state.

What state do we need for our shopping cart?

First, we need some sort of storage place that can save the products we buy.

To declare variables inside our constructor, we need to use this keyword.

In simple terms, this refers to the current object. The variables inside the constructor need to be bound to this. For ex.

this.name = "Phillip";

This value will then be readily and easily accessible in other methods inside the class. 

Create an empty array and assign it to a variable called 'items'. This items array will hold the state of products in the cart.
*/
