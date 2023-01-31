const products = [
  {
    id: 0,
    name: "Vanilla buttercream cupcake",
    price: 2.99
  },
  {
    id: 1,
    name: "French Macaroon",
    price: 3.99
  },
  {
    id: 2,
    name: "Fruit sprinkles cupcake",
    price: 3.99
  },
  {
    id: 3,
    name: "Pink flower cupcake",
    price: 5.99
  }
];

/*
The shoppingCart is shaping up nicely.
But we have a problem here. Right now you can pass in any arbitrary value as the `productId` and it will get added to the items array.
This is a cause for concern, since our shoppingCart can only be filled by items in the `products` array.
Time to fix this.
Modify the `addItems` method so that only valid `productId` is added into our items array.
You will have to loop through the products list and check if the passed `productId` exists in it.
*/

const shoppingCart = {
  items: [],
  addItem: (productId) => {
    shoppingCart.items.push(productId);
  }
}

shoppingCart.addItem(99);
console.log(shoppingCart.items);