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

  const getCartTotal = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCT.find((product) => product.productId === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }

    return Math.ceil(totalAmount * 100) / 100;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const amountChange = (newAmount, itemId) => {
    if (!isNaN(newAmount) && newAmount >= 0) {
      setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    }
  };

  const isCartEmpty = Object.values(cartItems).every((item) => item === 0);

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    amountChange,
    getCartTotal,
    isCartEmpty,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

