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
    return parseFloat((this.taxRate / 100 * amount).toFixed(2));
  }
}

/*
What if we are no longer doing a promotional discount, or change from 30% to 15% instead?

Instead of directly reassigning new values to our state, it's better to make separate functions to reassign the values.

Create a method called `setDiscountPercentage` that will take `discountPercentage` as parameter and assign that value to `discountPercentage` inside the state. For ex:
```
changeValue(money) {
  this.money = money;
}
```

*/
