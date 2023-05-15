import React, { createContext, useState } from "react";
import { PRODUCT } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCT.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const amountChange = (newAmount, itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: newAmount }));
  };

  console.log(cartItems);
  const contextValue = { cartItems, addToCart, removeFromCart, amountChange };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
