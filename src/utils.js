const isFreeShipping = (purchasedAmount) => {
  const freeShippingThreshold = 100;
  const parsedPurchaseAmount = parseFloat(purchasedAmount)
    ? parseFloat(purchasedAmount)
    : purchasedAmount;
  if (typeof parsedPurchaseAmount !== 'number') {
    throw new Error('purchasedAmount must be a number');
  }
  if (parsedPurchaseAmount > freeShippingThreshold) {
    return true;
  }
  return false;
};

export default isFreeShipping;
