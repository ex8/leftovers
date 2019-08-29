export const getTotalQuantity = items => {
  let total = 0;
  for (let key in items) {
    total += items[key].quantity;
  }
  return total;
};

export const getTotalAmount = items => {
  let total = 0;
  for (let key in items) {
    total += items[key].dish.price * items[key].quantity;
  }
  return total;
};