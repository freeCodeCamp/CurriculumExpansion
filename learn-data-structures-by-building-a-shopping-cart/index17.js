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
    this.discountPercentage = 30;
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
  
  removeItem(id) {
    const index = this.items.indexOf(id);
    this.items.splice(index, 1);
  }
  
  clearCart() {
    this.items = [];
  }
  
  applyDiscount(amount) {
    /*
    Notice that the discount money has more than 2 numbers after the decimal point.

    This is common to see when working arthimatic operations with float numbers in JavaScript.

    There is in-built method called toFixed that can help us. 

    The method takes in a parameter which you can specify the number of decimal points. It will round up the number as well.

    Let's attach toFixed() to the returned discount. Pass in 2.
    */
    return this.discountPercentage / 100 * amount
  }
}
