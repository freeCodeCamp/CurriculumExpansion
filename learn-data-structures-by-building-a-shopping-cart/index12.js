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

  /*
  [
    {  
      id: 2,
      name: "Fruit sprinkles cupcake",
      price: 3.99
    } 
  ]
  */


  /*
  Let's create another method to help us check our state.

  Create a method called `getCount` that will return the number of items in the cart. For example:
  ```
  getLength() {
    return this.myArray.length;
  }
  ```
  */

  
}

const shoppingCart = new ShoppingCart();

shoppingCart.addItem(2, products);
console.log(shoppingCart.getItems()); 

