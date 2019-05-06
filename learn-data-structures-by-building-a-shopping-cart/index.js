const products = [
  {
    id: 0,
    name: "Vanilla buttercream cupcake",
    price: 2.99,
  },
  {
    id: 1,
    name: "French Macaroon",
    price: 3.99,
  },
  {
    id: 2,
    name: "Fruit sprinkles cupcake",
    price: 3.99,
  },
  {
    id: 3,
    name: "Pink flower cupcake",
    price: 5.99,
  }
];

export class ShoppingCart {
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

  updateItemQuantity(id, quantity) {
    const selectedItems = this.items.filter(item => item.id === id);
    const { length } = selectedItems;
    const numberToUpdate = quantity - length;

    if (numberToUpdate > 0) {
      for (let i = 0; i < numberToUpdate; i++) {
        this.items.push(selectedItems[0]);
      }
    } else if (numberToUpdate < 0) {
      const rest = this.items.filter(item => item.id !== id);
      selectedItems.length = selectedItems.length + numberToUpdate;
      this.items = [...rest, ...selectedItems];
    }
  }

  toTwoDecimal(amount) {
    return parseFloat(amount).toFixed(2);
  }

  applyDiscount(amount) {
    const discountAmount = toTwoDecimal(
      (this.discountPercentage / 100) * amount
    );
    return discountAmount;
  }

  calculateTaxes(amount) {
    const tax = toTwoDecimal(amount * (this.taxRate / 100));
    return tax;
  }

  calculateTotal() {
    const subTotal = this.items.reduce(
      (total, item) => (total += item.price),
      0
    );
    const tax = this.calculateTaxes(subTotal);
    const discount = this.applyDiscount(subTotal);

    this.total = toTwoDecimal(subTotal - discount + tax);
    return this.total;
  }

  clearCart() {
    this.items = [];
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
