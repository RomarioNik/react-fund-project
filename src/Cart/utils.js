export const getTotal = (cart) => {
  let totalCount = 0;
  let totalAmount = 0;

  for (let { amount, price } of cart.values()) {
    totalCount = totalCount + amount;
    totalAmount = totalAmount + amount * price;
  }

  return { totalCount, totalAmount };
};
