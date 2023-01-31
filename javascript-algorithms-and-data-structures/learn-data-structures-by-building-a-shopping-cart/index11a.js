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
  Every time an object is created using `shoppingCartGenerator`, we are creating copies of the 
  object's code in memory.
  Think of memory as an object that is being maintained behind the scenes that stores all your
  variables, objects and functions. Memory is limited based on your computer's hardware specs.

  Below is a representation of the memory where we have our primary and wishlist shopping
  carts. Bear in mind, this is not an accurate representation but merely for building an
  understanding.
  ```
  memory = {
      ...,
      primary: {...},
      wishlist: {...},
      ...
  }
  ```

  Inside each shopping cart, we have copies of the `items` property, `addItem` method and `getItems` method.
  If our shoppingCart object had several more methods, each instance of the cart would have copies
  of those methods in the memory as well.

  This causes the memory to be used up more quickly and therefore limits the performance of our
  computer/browser.
  */
