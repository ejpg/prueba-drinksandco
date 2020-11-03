export const getRandomProducts = () => {
  const products = [];

  for (let i = 0; i < Math.floor(getRandomArbitrary(1, 10)); i++) {
    products.push({
      price: getRandomArbitrary(1, 99),
      qty: Math.floor(getRandomArbitrary(1, 10))
    });
  }

  return products;
};

export const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
}
