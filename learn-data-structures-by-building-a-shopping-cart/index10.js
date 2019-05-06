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
    const item = products.find(item => item.id === id);
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }
}

/*
We now need to create an instance or a copy off of our ShoppingCart class. 

This instance will have all the methods and the state to itself. Here is an example syntax:

class Person {
  ...
}
const person = new Person();

You need to use the 'new' keyweord to make an instance. 

Make an instance of ShoppingCart class and assign it to a variable called shoppingCart using const keyword.
*/
