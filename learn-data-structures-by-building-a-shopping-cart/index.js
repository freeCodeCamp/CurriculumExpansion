const cartContainer = document.getElementById("cart-container");
const productsContainer = document.getElementById("products-container");
const dessertCards = document.getElementById("dessert-card-container");
const cartBtn = document.getElementById("cart-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");
const totalNumberOfItems = document.getElementById("total-items");
const cartSubTotal = document.getElementById("subtotal");
const cartTaxes = document.getElementById("taxes");
const cartTotal = document.getElementById("total");
const showHideCartSpan = document.getElementById("show-hide-cart");
let isCartShowing = false;

/**
 *
 * We can decide if we want to provide this products array for them or write steps where the campers
 * will build it out themselves
 *
 */
const products = [
  {
    id: 1,
    name: "Vanilla cupcakes (6 pack)",
    price: 12.99,
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
    name: "Chocolate pretzels (4 pack)",
    price: 10.99,
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
    name: "Chocolate Macaroons (4 pack)",
    price: 9.99,
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
    name: "Vanilla Macaroons (5 pack)",
    price: 11.99,
    category: "macaroon",
  },
  {
    id: 12,
    name: "Lemon cupcakes (4 pack)",
    price: 12.99,
    category: "cupcake",
  },
];

// another good instance to show how map and destructuring works
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

// This might be the first time where classes are introduced
class ShoppingCart {
  // this might be the first time the this keyword is introduced
  constructor() {
    this.items = [];
    this.taxRate = 8.25;
  }

  addItem(id, products) {
    // this might be the first time where the find method is introduced
    const product = products.find((item) => item.id === id);
    const { name, price } = product;
    this.items.push(product);

    const totalCountPerProduct = {};
    this.items.forEach((dessert) => {
      totalCountPerProduct[dessert.name] =
        (totalCountPerProduct[dessert.name] || 0) + 1;
    });

    let currentProductCount = totalCountPerProduct[product.name];
    let currentProductCountSpan = document.getElementById(
      "product-count-for-id" + id
    );

    currentProductCount > 1
      ? (currentProductCountSpan.textContent = `${currentProductCount}x`)
      : (productsContainer.innerHTML += `
      <div id=dessert${id} class="product">
        <p>
          <span class="product-count" id=product-count-for-id${id}></span>${name}
        </p>
        <p>$${price}</p>
      </div>
    `);
  }

  getCount() {
    return this.items.length;
  }

  clearCart() {
    if (!this.items.length) {
      alert("Your shopping cart is already empty");
      return;
    }

    // this might be the first time the confirm method is introduced. I don't remember if we are using it in the music player project
    let isCartCleared = confirm(
      "Are you sure you want to clear all items from your shopping cart?"
    );

    if (isCartCleared) {
      productsContainer.innerHTML = "";
      totalNumberOfItems.textContent = 0;
      cartSubTotal.textContent = 0;
      cartTaxes.textContent = 0;
      cartTotal.textContent = 0;
      this.items = [];
    }
  }

  calculateTaxes(amount) {
    return parseFloat(((this.taxRate / 100) * amount).toFixed(2));
  }

  calculateTotal() {
    const subTotal = this.items.reduce((total, item) => total + item.price, 0);
    const tax = this.calculateTaxes(subTotal);
    const total = subTotal + tax;
    cartSubTotal.textContent = `$${subTotal.toFixed(2)}`;
    cartTaxes.textContent = `$${tax}`;
    cartTotal.textContent = `$${total.toFixed(2)}`;
    return total;
  }
}

const cart = new ShoppingCart();
const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");

[...addToCartBtns].forEach((btn) => {
  btn.addEventListener("click", (event) => {
    cart.addItem(Number(event.target.id), products);
    totalNumberOfItems.textContent = cart.getCount();
    cart.calculateTotal();
  });
});

cartBtn.addEventListener("click", () => {
  isCartShowing = !isCartShowing;
  showHideCartSpan.textContent = isCartShowing ? "Hide" : "Show";
  cartContainer.style.display = isCartShowing ? "block" : "none";
});

clearCartBtn.addEventListener("click", () => {
  cart.clearCart();
});
