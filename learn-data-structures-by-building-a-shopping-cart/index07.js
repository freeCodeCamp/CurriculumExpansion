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
  We have the method but how can we add an item using this method?

  If we know an unique identity that only each item possesses, we can use that identity to pull that item inside our cart.

  We currently have three properties called id, name and price.
  
  Price is definitely not unique because different items can have the same price.

  How about name? Maybe. However, what is there are items with the same name but can have different attributes like colors?

  This is why we have ids. They are unique identifiers that only each item can have. Let's have addItem method take id as first parameter. 

  We also need to tell the addItem method from where it should add an item. We currently have products array but what if our inventory grows and introduces different products in different arrays?

  Make the addItem method take an array as the second parameter. Name it products.
*/
