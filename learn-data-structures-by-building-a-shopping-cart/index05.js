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

We need some sort of storage place that can save the products we buy.

To declare variables inside our class, we need to use this keyword.

In simple terms, this refers the current object or in this case the ShoppingCart class because class is afterall an object.

The variables inside the constructor need to be bound to this. Because you are binding a property to an object you need to use dot notation. Example syntax goes like this.

this.name = "Phillip";

Create an empty array and assign it to a variable called 'items'. This items array will hold the state of products in the cart.
*/
