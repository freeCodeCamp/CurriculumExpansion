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
  },
];

const shoppingCart = {
  items: [],
  addItem: (productId) => {
    for (let i = 0; i < products.length; i++) {
      if (productId === products[i].id) {
        shoppingCart.items.push(productId);
        break;
      }
    }
  },
  getItems: () => {
    return shoppingCart.items;
  },
};
/*
    Hurray! The `shoppingCartGenerator` is now ready to use.
    Using this function, create the two shoppingCarts: primary and wishlist
*/
function shoppingCartGenerator() {
  const newShoppingCart = {};
  newShoppingCart.items = [];
  newShoppingCart.addItem = (productId) => {
    for (let i = 0; i < products.length; i++) {
      if (productId === products[i].id) {
        shoppingCart.items.push(productId);
        break;
      }
    }
  };
  newShoppingCart.getItems = () => {
    return shoppingCart.items;
  };
  return newShoppingCart;
}
