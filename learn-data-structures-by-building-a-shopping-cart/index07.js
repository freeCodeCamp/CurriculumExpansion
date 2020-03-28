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
You can also add methods to an object. If a function is referenced by a property of the object, we call it a method of the object.
Here is an example:
```
const user = {
  name: "John Doe",
  print: () => {
    console.log(user.name);
  }
}
```
The `print` method of the `user` object prints the name of the user to the console.
Add a property called addItem to the `shoppingCart` and initialize it as an empty function.
Remember, each key-value pair in an object needs to be followed by a comma `,` if another pair succeeds it.
*/
const shoppingCart = {
  items: []
};
