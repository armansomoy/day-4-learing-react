const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

const savedCartToLS = (cart) => {
  const cartStrigified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStrigified);
};

const addToLS = (id) => {
  const cart = getStoredCart();
  cart.push(id);

  // save to local storage
  savedCartToLS(cart);
};

export { addToLS };
