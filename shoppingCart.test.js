const { shoppingCart } = require("./shoppingCart");
describe("testing the functionality of the shoppingCart object", () => {
  test("addToCart should add an item to the cart", () => {
    shoppingCart.addToCart("Item 1", 2, 10);
    expect(shoppingCart.items.length).toBe(1);
    expect(shoppingCart.items[0].name).toBe("Item 1");
    expect(shoppingCart.items[0].quantity).toBe(2);
    expect(shoppingCart.items[0].price).toBe(10);
  });

  test("removeFromCart should remove an item from the cart", () => {
    //adding another item
    shoppingCart.addToCart("Item 1", 2, 10);
    expect(shoppingCart.items.length).toBe(2);

    // removing an item from the cart
    shoppingCart.removeFromCart(0);
    expect(shoppingCart.items.length).toBe(1);
  });

  test("calculateTotal should return the correct total cost", () => {
    const total = shoppingCart.calculateTotal();
    expect(total).toBe(20);
  });
});
