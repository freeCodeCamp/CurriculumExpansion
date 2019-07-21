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
We now need to create an instance or a copy of our `ShoppingCart` class.
This instance will be an object and have all of the methods and data defined in the class available to it.
To make an instance of a class, use the `new` keyword.
For example, `const car = new Car();`
Make an instance of the `ShoppingCart` class and assign it to a variable called `shoppingCart`.
*/


