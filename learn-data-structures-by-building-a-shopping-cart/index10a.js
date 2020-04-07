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
  ```
  const primary = {
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
  
  const wishlist = {
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
  ```
  This does not look right. We are writing the same code over and over again. What if we 
  wanted to build more shoppingCart objects? Each time we do that, we will have to write the same
  code again. And if we decided to add more methods to the shoppingCart, we will have to edit all
  existing shoppingCart objects.

  A better approach would be to instead generate the shoppingCart object using a function. We'll
  call the function `shoppingCartGenerator`.
  */
