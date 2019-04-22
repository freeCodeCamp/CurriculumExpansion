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
The class now contains some basic methods we can effectively use now.

We said that classes resemble factories. We need to make our copy of the shopping cart from the factory which will be an object.

When we make this copy, we call it an instance of the class it's made from. Here is an example syntax.

const person = new Person();

Notice the use of new keyword. This is creating an instance of Person class and assigning to a person variable.

Make an instance of ShoppingCart class and assign it to a variable called shoppingCart using const keyword.
*/
