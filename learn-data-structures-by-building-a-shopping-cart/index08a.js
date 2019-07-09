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
      if(id === products[i].id) {
        this.items.push(products[i]);
      }
    }
  }
}

/*  
This code functions but can we make this better? We could use built in method called find to make our code concise and easier to read.

Find method returns the first item when a given condition satisfies. 

Let's use the find method to achieve the same results we made. For ex.

const match = arrr.find(item => item.name === name);
myArr.push(match);
*/
