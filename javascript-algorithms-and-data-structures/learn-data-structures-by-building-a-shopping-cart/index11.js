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
It appears we have fulfilled the requirements for Object Oriented Programming.
But unfortunately, we have a problem in our code that will cost performance.
This performance cost is not significant for small software programs, but nonetheless,
we have to address the issue and find a better way to build objects.
*/
