const products = [
  {
    id: 1,
    name: "Vanilla buttercream cupcake",
    price: 2.99,
    category: "cupcake"
  },
  {
    id: 2,
    name: "French Macaroon",
    price: 3.99,
    category: "macaroon"
  },
  {
    id: 3,
    name: "Fruit sprinkles cupcake",
    price: 3.99,
    category: "cupcake"
  },
  {
    id: 4,
    name: "Pink flower cupcake",
    price: 5.99,
    category: "cupcake"
  },
  {
    id: 5,
    name: "Chocolate pretzel",
    price: 4.99,
    category: "pretzel"
  }
];

class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
    this.taxRate = 8.25;
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
    return parseFloat((this.discountPercentage / 100 * amount).toFixed(2))
  }

  calculateTaxes(amount) {
    return parseFloat((this.taxRate / 100 * amount).toFixed(2))
  }

  calculateTotal() {
    const subTotal = this.items.reduce(
      (total, item) => (total + item.price),
      0
    );
  }

  setDiscountPercentage(percentage) {
    this.discountPercentage = percentage;
  }

  getDiscountPercentage() {
    return this.discountPercentage;
  }

  setTaxRate(taxRate) {
    this.taxRate = taxRate;
  }

  getTaxRate() {
    return this.taxRate;
  }
}

/*
Now that we have subTotal, let's pass it as parameters to our applyDiscount and calculateTaxes methods we created before.

store the results to tax and discount variables respectively using const keywords.

Then calculate the total by subtracting discount from subTotal and adding tax to subTotal. Assign the result to total using const keyword.

Return total. For ex:

const result1 = function1(money);
const result2 = function2(money);
const sum = result - result1 + result2;
return sum;
*/
