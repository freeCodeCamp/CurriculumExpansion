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
Now that we have an items array, we can start adding some products to it.
But how do we access the `items` array inside the `shoppingCart` object? Turns out, there is something called the dot notation.
Dot notation allows you to access the properties of an object and modify their values.
For example, we have a user object:
```
const user = {
  name: "John Doe"
}
```
We can access the name property via `user.name`.
Try accessing the property `items` in the `shoppingCart` object.
*/
const shoppingCart = {
 items: []
}
