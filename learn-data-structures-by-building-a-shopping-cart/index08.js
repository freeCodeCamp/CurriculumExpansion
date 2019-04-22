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

  }
}

/* 
We have what we need.

we can loop through over the products array and see it contains any items that have the same id we want to add.

If there is, then add the matching product to the items array.

Make sure to use the keyword this when accessing the state. 

Give it a shot. 

*/