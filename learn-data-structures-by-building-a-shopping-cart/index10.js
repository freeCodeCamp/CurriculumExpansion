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
Super! Looks like the shoppingCart is in a good shape.
Time to take it for a spin. Suppose we need two shopping carts, let's call one `primary`, 
which we'll use to buy the items we want right now. The other we'll call `wishlist`, a 
shoppingCart with the items you may want to buy in the future.
The way we do this is not glaringly obvious.

The simplest way would be to copy the shoppingCart object's code and reuse it.

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

*/
