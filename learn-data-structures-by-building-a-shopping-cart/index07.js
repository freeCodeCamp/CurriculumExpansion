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

  addItem() {

  }
}

/*
The easiest way to add an item to our cart is through item's unique id. 

Because their ids qre unique, we can easily identify what kind of items they are.

We also need to know from which set of data we are adding the items. Currently we have only products array, but there could be more arrays with different items.

Have our addItem method take 'id' as its first parameter and 'products' array as the 2nd parameter. Here is an example:

sayName (name, list) {

}
*/
