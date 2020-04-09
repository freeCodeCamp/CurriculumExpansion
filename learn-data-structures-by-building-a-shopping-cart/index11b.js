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

const primary = shoppingCartGenerator();
const wishlist = shoppingCartGenerator();

/*
  A smart approach would be to move the functions `getItems` and `addItem` to an object that can be used
  to store all the methods we wish our shoppingCart objects to have access to.

  ```
  const functionStore = {
    method1 = ()=>{
      console.log('hey, I am a function')
    }
  }
  ```
  Create an empty object called `functionStore`.
*/
