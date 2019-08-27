const products = [
    {
      id: 1,
      name: "Vanilla buttercream cupcake",
      price: 2.99,
      category: "cupcake"
    },
    {
      id: 2,
      name: "French Macaroon",
      price: 3.99,
      category: "macaroon"
    },
    {
      id: 3,
      name: "Fruit sprinkles cupcake",
      price: 3.99,
      category: "cupcake"
    },
    {
      id: 4,
      name: "Pink flower cupcake",
      price: 5.99,
      category: "cupcake"
    },
    {
      id: 5,
      name: "Chocolate pretzel",
      price: 4.99,
      category: "pretzel"
    }
  ];
  
  class ShoppingCart {
    constructor() {
      this.items = [];
      this.total = 0;
      this.taxRate = 8.25;
      this.discountPercentage = 30;
    }
  
    addItem(id, products) {
      const item = products.find(item => item.id === id);
      this.items.push(item);
    }
  
    getItems() {
      return this.items;
    }
  
    getCount() {
      return this.items.length;
    }
  
    removeItem(id) {
      const index = this.items.indexOf(id);
      this.items.splice(index, 1);
    }
  
    clearCart() {
      this.items = [];
    }
  
    applyDiscount(amount) {
      return parseFloat((this.discountPercentage / 100 * amount).toFixed(2))
    }
  
    calculateTaxes(amount) {
      return parseFloat((this.taxRate / 100 * amount).toFixed(2))
    }
  
    calculateTotal() {
        const subTotal;
    }

    setDiscountPercentage(percentage) {
      this.discountPercentage = percentage;
    }
  
    getDiscountPercentage() {
      return this.discountPercentage;
    }
  
    setTaxRate(taxRate) {
      this.taxRate = taxRate;
    }
  
    getTaxRate() {
      return this.taxRate;
    }
  }
  
  /*
  Let's go through each item in the cart and add them up.

  We will use a built-in method array method called `reduce` and assign the result to the `subTotal` variable.
  
  The `reduce` method takes in a callback function. The first argument holds the value that we track. The second argument holds the current value that loop is going through. 

  Go ahead and use the `reduce` method to loop over the cart and assign its `total` to the `subTotal` variable.

  For example:

  ```
  const sum = list.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);
  ```

  */
  