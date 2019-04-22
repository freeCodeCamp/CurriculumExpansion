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

class ShoppingCart {

}

/*
Nice! Now we have a shoppingCart class.

In the previous lesson, we mentioned that classes are capable of maintaining states. 

Classes have a special function or since it's inside class, a method called constructor that takes care of this concern.

Constructor will automatically initialize a state of an instance created from the class.

Let's create a constructor method inside the ShoppingCart class.

To declare a method inside of class, you can simply give it a name, opening and closing parentheses to take in parameters then opening and closing curly brackets to initialize any state.

Declare a method called 'constructor' inside the ShoppingCart class.
*/