const shoppingCart = {
  items: [],
  addToCart: function (item, quantity, price) {
    const newItem = { name: item, quantity: quantity, price: price };
    this.items.push(newItem);
  },
  removeFromCart: function (itemIndex) {
    this.items.splice(itemIndex, 1);
  },
  calculateTotal: function () {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i].price * this.items[i].quantity;
    }
    return total;
  },
};

module.exports = { shoppingCart };
