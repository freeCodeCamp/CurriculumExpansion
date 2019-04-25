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
  constructor() {
    this.items = [];
  }

  addItem(id, products) {
    for(let i=0; i<products.length; i++) {
      if(products[i].id === id) {
        this.items.push(products[i]);
      }
    }
  }
  
}

/*
  Hopefully you have something like this.
  
  This code functions but can we make this better? This is where functional programming paradigm comes in.
  
  Using functional programming makes our code cleaner and more intuitive. It uses express verbiage to make it clear each bit of code accomplishes.
  
  JavaScript provides a lot of array methods that we can partake.
  
  One such helpful method is called find method. This will return the first item where provided condition satisfies. For ex.
  
  const numbers = [1, 5, 10, 15, 20];
  const foundNumber = numbers.find((number) => number === 10);
  
  console.log(foundNumber); // 10
  
  Let's use the find method to loop through the array and achieve the same result.
*/
