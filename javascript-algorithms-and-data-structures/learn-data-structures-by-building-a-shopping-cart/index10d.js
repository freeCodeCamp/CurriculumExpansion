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
    Almost there! Use the dot notation to add the methods `addItem` and `getItems` to the 
    `newShoppingCart` object before returning it.
*/
function shoppingCartGenerator() {
  const newShoppingCart = {};
  newShoppingCart.items = [];
  return newShoppingCart;
}
