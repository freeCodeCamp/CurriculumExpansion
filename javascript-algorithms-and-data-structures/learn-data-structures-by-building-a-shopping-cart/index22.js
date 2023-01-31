
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
    this.taxRate = 8.25;
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
    return parseFloat((this.discountPercentage / 100 * amount).toFixed(2));
  }
  
  calculateTaxes(amount) {
    return parseFloat(this.taxRate / 100 * amount).toFixed(2);
  }
  
  setDiscountPercentage(percentage) {
    this.discountPercentage = percentage;
  }
  
  getDiscountPercentage() {
    return this.discountPercentage;
  }
}

/*
Great! let's make similar methods for our `taxRate` to make it more flexible.

Create a `setTaxRate` method that will take `taxRate` as its parameter and set our `taxRate` state to the new value.

Also create `getTaxRate` method that will simply return the current `taxRate`.
*/
