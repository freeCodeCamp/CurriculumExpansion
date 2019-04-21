//** Current functionalities **//

// Add an item to Cart
// Remove an item from Cart
// Remove all Items from Cart
// get items from cart
// get items count
// * apply discount
// * adjust quantity of item
// * total includes tax

//** todo ** //

// Having users build an item is also a good idea.
// They could do that in the beginning of the project to get a feel for the properties and values each item in the inventory will have.
// Then after building one we could update the code to include all the other items.

export const products = [
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

export class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
    this.taxRate = 8.25;
    // current promotion 30% off!
    this.discountPercentage = 30;
  }

  addItem(products = [], id = -1) {
    // if incoming products is not an array or no items inside,
    if (!Array.isArray(products) || products.length < 1) {
      return;
    }

    const item = products.find(item => item.id === id);

    if (!item) {
      return;
    }
    this.items.push(item);
  }

  removeItem(id = -1) {
    const index = this.items.findIndex(item => item.id === id);

    if (index < 0) {
      return;
    }
    this.items.splice(index, 1);
  }

  // Here is our all mighty powerful method :) The Swiss army knife!
  // **** Make sure there is at least one item in the cart if you want to modify its quantity (like Amazon :)****
  // Not passing in anything into quantity will delete all counts of the item.
  updateItemQuantity(id = -1, quantity = 0) {
    // Have to receive at least an id
    if (id === -1) {
      return;
    }
    const selectedItems = this.items.filter(item => item.id === id);
    const { length } = selectedItems;

    // id not found
    if (length === 0) {
      return;
    }

    const numberToUpdate = quantity - length;
    // if positive, then put more items in the array.
    if (numberToUpdate > 0) {
      for (let i = 0; i < numberToUpdate; i++) {
        this.items.push(selectedItems[0]);
      }
      // if it's negative start removing.
    } else if (numberToUpdate < 0) {
      this.items = this.items.filter(item => item.id !== id);
      selectedItems.length = selectedItems.length + numberToUpdate;
      this.items = [...this.items, ...selectedItems];
    }
  }

  calculateTotal() {
    const subTotal = this.items.reduce(
      (total, item) => (total += item.price),
      0
    );
    const tax = this.calculateTaxes(subTotal);
    const discount = this.applyDiscount(subTotal);

    this.total = parseFloat((subTotal - discount + tax).toFixed(2));
    return this.total;
  }

  // The sales tax applies to the price after discount is applied!!
  applyDiscount(amount = 0) {
    const discountAmount = parseFloat(
      ((this.discountPercentage / 100) * amount).toFixed(2)
    );
    return discountAmount;
  }

  // Sales tax varies from states to states and even in different cities inside the same state.
  // We will use the rate from where I live 8.25%. Austin, TX.
  calculateTaxes(amount = 0) {
    const tax = parseFloat((amount * (this.taxRate / 100)).toFixed(2));
    return tax;
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

  getItems() {
    return this.items;
  }

  getCount() {
    return this.items.length;
  }
}
