/////////////////////
// Outdated Tests!!
/////////////////////


import { products, ShoppingCart } from "./ShoppingCart";

describe("Shopping Cart Tests", () => {
  // addItem
  test("addItem should add only one item with given products and id", () => {
    const shoppingCart = new ShoppingCart();

    shoppingCart.addItem(products, 2);
    expect(shoppingCart.getCount()).toBe(1);
    expect(shoppingCart.getItems()).toEqual([
      {
        id: 2,
        name: "French Macaroon",
        price: 3.99,
        category: "macaroon"
      }
    ]);
    shoppingCart.addItem(products, 2);
    expect(shoppingCart.getCount()).toBe(2);
    expect(shoppingCart.getItems()).toEqual([
      {
        id: 2,
        name: "French Macaroon",
        price: 3.99,
        category: "macaroon"
      },
      {
        id: 2,
        name: "French Macaroon",
        price: 3.99,
        category: "macaroon"
      }
    ]);

    // if adding non existent id, it shouldn't add anything.
    shoppingCart.addItem(products, 6);
    expect(shoppingCart.getCount()).toBe(2);

    // non array
    shoppingCart.addItem("Some String", 3);
    expect(shoppingCart.getCount()).toBe(2);
  });

  // removeItem
  test("removeItem should remove one item with given id", () => {
    const shoppingCart = new ShoppingCart();

    // shopping cart with two of the same items
    shoppingCart.addItem(products, 1);
    shoppingCart.addItem(products, 1);

    // No such items with this id exist, don't do anything.
    shoppingCart.removeItem(2);
    shoppingCart.removeItem();
    expect(shoppingCart.getCount()).toEqual(2);

    // Remove only one if you find it
    shoppingCart.removeItem(1);
    expect(shoppingCart.getCount()).toEqual(1);
    expect(shoppingCart.getItems()).toEqual([
      {
        id: 1,
        name: "Vanilla buttercream cupcake",
        price: 2.99,
        category: "cupcake"
      }
    ]);
  });

  // updateItemQuantity
  test("updateItemQuantity should update with given id and quantity number", () => {
    const shoppingCart = new ShoppingCart();

    // Add an item
    shoppingCart.addItem(products, 5);
    expect(shoppingCart.getCount()).toEqual(1);

    // increase quantity
    shoppingCart.updateItemQuantity(5, 3);
    expect(shoppingCart.getCount()).toEqual(3);
    expect(shoppingCart.getItems()).toEqual([
      {
        id: 5,
        name: "Chocolate pretzel",
        price: 4.99,
        category: "pretzel"
      },
      {
        id: 5,
        name: "Chocolate pretzel",
        price: 4.99,
        category: "pretzel"
      },
      {
        id: 5,
        name: "Chocolate pretzel",
        price: 4.99,
        category: "pretzel"
      }
    ]);

    // reduce quantity
    shoppingCart.updateItemQuantity(5, 1);
    expect(shoppingCart.getCount()).toEqual(1);
    expect(shoppingCart.getItems()).toEqual([
      {
        id: 5,
        name: "Chocolate pretzel",
        price: 4.99,
        category: "pretzel"
      }
    ]);

    // remove all items with passed in id
    shoppingCart.updateItemQuantity(5, 0);
    expect(shoppingCart.getCount()).toEqual(0);

    // Won't add more because at least one item with the id need to be present. (You can't add non-existent item in the cart)
    shoppingCart.updateItemQuantity(3, 1);
    expect(shoppingCart.getCount()).toEqual(0);

    // updating to the same number of quantity won't change anything.
    shoppingCart.addItem(products, 5);
    expect(shoppingCart.getCount()).toEqual(1);
    shoppingCart.updateItemQuantity(5, 1);
    expect(shoppingCart.getCount()).toEqual(1);
    expect(shoppingCart.getItems()).toEqual([
      {
        id: 5,
        name: "Chocolate pretzel",
        price: 4.99,
        category: "pretzel"
      }
    ]);

    // Not passing in the quantity number is like passing in 0
    shoppingCart.updateItemQuantity(5);
    expect(shoppingCart.getCount()).toEqual(0);
  });

  // clearCart should remove all items in the cart
  test("clearCart should remove all items and total cost", () => {
    const shoppingCart = new ShoppingCart();

    shoppingCart.addItem(products, 4);
    shoppingCart.updateItemQuantity(4, 3);
    shoppingCart.clearCart();
    expect(shoppingCart.getCount()).toBe(0);

    shoppingCart.addItem(products, 2);
    shoppingCart.clearCart();
    expect(shoppingCart.getCount()).toBe(0);
  });

  // calculateTaxes should return calculated taxes from an input
  test("calculateTaxes should return added taxes with given subTotal", () => {
    const shoppingCart = new ShoppingCart();

    expect(shoppingCart.calculateTaxes(2.99)).toBe(0.25);
    expect(shoppingCart.calculateTaxes(3.99)).toBe(0.33);
    expect(shoppingCart.calculateTaxes(6.98)).toBe(0.58);
    expect(shoppingCart.calculateTaxes(11.97)).toBe(0.99);
    expect(shoppingCart.calculateTaxes(0)).toBe(0);
    expect(shoppingCart.calculateTaxes()).toBe(0);
  });

  // applyDiscount should return discount amount from discount from discount percentage
  test("applyDiscount should return added taxes with given subTotal", () => {
    const shoppingCart = new ShoppingCart();

    // current tax rate at 30%
    expect(shoppingCart.applyDiscount(2.99)).toBe(0.9);
    expect(shoppingCart.applyDiscount(4.99)).toBe(1.5);
    expect(shoppingCart.applyDiscount(8.98)).toBe(2.69);

    // change tax rate to 0
    shoppingCart.setDiscountPercentage(0);
    expect(shoppingCart.applyDiscount(2.99)).toBe(0);

    expect(shoppingCart.applyDiscount(0)).toBe(0);
  });

  test("calculateTotal should return total after discount and tax", () => {
    const shoppingCart = new ShoppingCart();

    // 3 items
    shoppingCart.addItem(products, 5);
    shoppingCart.addItem(products, 4);
    shoppingCart.addItem(products, 3);
    expect(shoppingCart.calculateTotal()).toEqual(11.72);

    // 5 items
    shoppingCart.clearCart();
    shoppingCart.addItem(products, 5);
    shoppingCart.updateItemQuantity(5, 5);
    expect(shoppingCart.calculateTotal()).toEqual(19.52);

    // empty cart should return 0
    shoppingCart.clearCart();
    expect(shoppingCart.calculateTotal()).toEqual(0);
  });
});
