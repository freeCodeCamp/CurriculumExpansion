const shoppingCartContainer = document.getElementById("shopping-cart");
const dessertCards = document.getElementById("dessert-card-container");
const shoppingCartBtn = document.getElementById("cart-btn");
const showHideCartSpan = document.getElementById("show-hide-cart");
let isCartShowing = false;

const products = [
  {
    id: 1,
    name: "Vanilla cupcake",
    price: 2.99,
    category: "cupcake",
  },
  {
    id: 2,
    name: "French Macaroon",
    price: 3.99,
    category: "macaroon",
  },
  {
    id: 3,
    name: "Pumpkin cupcake",
    price: 3.99,
    category: "cupcake",
  },
  {
    id: 4,
    name: "Chocolate cupcake",
    price: 5.99,
    category: "cupcake",
  },
  {
    id: 5,
    name: "Chocolate pretzel",
    price: 4.99,
    category: "pretzel",
  },
  {
    id: 6,
    name: "Strawberry ice cream",
    price: 2.99,
    category: "ice cream",
  },
  {
    id: 7,
    name: "Chocolate Macaroon",
    price: 3.99,
    category: "macaroon",
  },
  {
    id: 8,
    name: "Strawberry pretzel",
    price: 4.99,
    category: "pretzel",
  },
  {
    id: 9,
    name: "Butter Pecan ice cream",
    price: 2.99,
    category: "ice cream",
  },
  {
    id: 10,
    name: "Rocky Road ice cream",
    price: 2.99,
    category: "ice cream",
  },
  {
    id: 11,
    name: "Vanilla Macaroon",
    price: 3.99,
    category: "macaroon",
  },
  {
    id: 12,
    name: "Lemon cupcake",
    price: 2.99,
    category: "cupcake",
  },
];

class ShoppingCart {
  constructor() {
    this.items = [];
    this.taxRate = 8.25;
    this.discountPercentage = 30;
  }

  addItem(id, products) {
    const item = products.find((item) => item.id === id);
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
    return parseFloat(((this.discountPercentage / 100) * amount).toFixed(2));
  }

  calculateTaxes(amount) {
    return parseFloat(((this.taxRate / 100) * amount).toFixed(2));
  }

  calculateTotal() {
    const subTotal = this.items.reduce((total, item) => total + item.price, 0);
    const tax = this.calculateTaxes(subTotal);
    const discount = this.applyDiscount(subTotal);
    const total = subTotal - discount + tax;
    return total;
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

const shoppingCart = new ShoppingCart();

products.map(
  ({ name, id, price }) =>
    (dessertCards.innerHTML += `
    <div class="dessert-card" id=dessert${id}>
      <h2>${name}</h2>
      <p class="dessert-price">Price: $${price}</p>
      <button class="btn add-to-cart-btn">Add to cart</button>
    </div>
  `)
);

shoppingCartBtn.addEventListener("click", () => {
  isCartShowing = !isCartShowing;
  showHideCartSpan.textContent = isCartShowing ? "Hide" : "Show";
  shoppingCartContainer.style.display = isCartShowing ? "block" : "none";
});

/**
 *
 * Concepts to cover
 *
 * push(),shift(),unshift(),pop()
 * spread operator
 * delete operator
 * hasOwnProperty()
 * for...in
 * Object.keys()
 *
 *
 */
