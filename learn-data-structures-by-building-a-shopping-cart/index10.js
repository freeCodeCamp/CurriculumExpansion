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
We said in the first lesson that classes resemble factories. We can make sure our factory works fine by making creating a copy/model off of it.

This copy will be an object, commonly called instance of the class it's made from. It will have access to the state and methods from the class.

Here is an example syntax.

class Person {
  ...
}

const person = new Person();

Notice the use of new keyword. It is needed to create an instance of Person class. Then we assign it to a person variable.

Make an instance of ShoppingCart class and assign it to a variable called shoppingCart using const keyword.
*/
