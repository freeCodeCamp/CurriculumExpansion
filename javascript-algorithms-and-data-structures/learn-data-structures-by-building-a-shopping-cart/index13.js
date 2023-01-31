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
  
  getCount() {
    return this.items.length;
  }

  /*
  Let's create a `removeItem` method that will take `id` its unique parameter.

  We will go through our items array to see if we have any matching ids first.

  We can use the built in `indexOf` method to find the index number of the match, then use the `splice` method to remove the matched product.

  Here is an example:

  ```
  const index = arr.indexOf(id);
  myArr.splice(index, 1);
  ```
  */


}
