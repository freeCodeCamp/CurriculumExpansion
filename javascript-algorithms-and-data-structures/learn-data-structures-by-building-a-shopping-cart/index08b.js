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
  Great job!
  There are many ways of checking if a certain value exists in an array of objects.
  The code below shows the simplest approach.
  Now you know how you can manipulate an object's properties using its methods. This is the crux of what we call Object Oriented Programming or OOP.
  Classical OOP in languages like C++ or Java, has been a popular paradigm of structuring your code to increase reusability and make the code more readable.
  We will talk more about this in future lessons. For now, let's make our shoppingCart more useful.
*/

const shoppingCart = {
  items: [],
  addItem: productId => {
    for (let i = 0; i < products.length; i++) {
      if (productId === products[i].id) {
        shoppingCart.items.push(productId);
        break;
      }
    }
  }
};
