const shoppingCartContainer = document.getElementById("shopping-cart");
const dessertCards = document.getElementById("dessert-card-container");
const shoppingCartBtn = document.getElementById("cart-btn");
const showHideCartSpan = document.getElementById("show-hide-cart");
let isCartShowing = false;

const products = [
  {
    id: 1,
    name: "6 Vanilla cupcakes",
    price: 12.99,
    category: "cupcake",
    hasDiscount: true,
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
    name: "4 Chocolate pretzels",
    price: 10.99,
    category: "pretzel",
    hasDiscount: true,
  },
  {
    id: 6,
    name: "Strawberry ice cream",
    price: 2.99,
    category: "ice cream",
  },
  {
    id: 7,
    name: "4 Chocolate Macaroons",
    price: 9.99,
    category: "macaroon",
    hasDiscount: true,
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
    name: "5 Vanilla Macaroons",
    price: 11.99,
    category: "macaroon",
    hasDiscount: true,
  },
  {
    id: 12,
    name: "4 Lemon cupcakes",
    price: 12.99,
    category: "cupcake",
    hasDiscount: true,
  },
];

products.map(
  ({ name, id, price }) =>
    (dessertCards.innerHTML += `
    <div class="dessert-card">
      <h2>${name}</h2>
      <p class="dessert-price">$${price}</p>
      <button 
        id="${id}" 
        class="btn add-to-cart-btn">Add to cart
      </button>
    </div>
  `)
);

class ShoppingCart {
  constructor() {
    this.items = [];
    this.taxRate = 8.25;
    this.discountPercentage = 30;
  }

  addItem(id, products) {
    const product = products.find((item) => item.id === id);
    const { name, price } = product;
    this.items.push(product);

    const totalCountPerProduct = {};
    this.items.forEach((dessert) => {
      totalCountPerProduct[dessert.name] =
        (totalCountPerProduct[dessert.name] || 0) + 1;
    });

    console.log(totalCountPerProduct);

    if (this.items.length === 1) {
      shoppingCartContainer.innerText = "";
    }

    let currentProductCount = totalCountPerProduct[product.name];
    let currentProductCountSpan = document.getElementById(
      "product-count-for-id" + id
    );

    currentProductCount > 1
      ? (currentProductCountSpan.textContent = `${currentProductCount}x`)
      : (shoppingCartContainer.innerHTML += `
      <div id=dessert${id} class="product">
        <p><span class="product-count" id=product-count-for-id${id}></span>${name}</p>
        <p>$${price}</p>
      </div>
    `);
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

const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");

[...addToCartBtns].forEach((btn) => {
  btn.addEventListener("click", (event) => {
    shoppingCart.addItem(Number(event.target.id), products);
  });
});

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
