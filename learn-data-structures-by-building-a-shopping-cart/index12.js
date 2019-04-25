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

const shoppingCart = new ShoppingCart();

shoppingCart.addItem(2, products);
console.log(shoppingCart.getItems());

// [
{ id: 2
name: "Fruit sprinkles cupcake"
price: 3.99
  } 
]

/*
Hooray, our addItem and getItems methods are working properly.

Let's make one more method that checks on how many items are in our items array.

Create a method called getCount that will return the number of current items in the cart.

To get a number of items in an array use .length. For ex.

[true, "hi", 5].length; // => 3
*/
