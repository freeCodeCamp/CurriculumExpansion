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
    return this.discountPercentage / 100 * amount
  }
}

/*
Notice that the returned amount of appliyDiscount function has a lot of numbers after the decimal.

This is very common pheonomenon when working with float numbers in JavaScript.

You can use toFixed() method to round your number to the given decimal place. This will convert the number type to string though.

Use parseFloat() method to convert the string back to number. For ex:

parseFloat(2.3999999999.toFixed(2))

Ensure the returned value of applyDiscount's decimal number if fixed to 2 decimal numbers.
*/
