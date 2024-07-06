import React, { createContext, useState } from "react";
import products from "../assets/data";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < products.length; i++) {
    cart[products[i].id] = 0; // Use product ID as key to ensure unique keys
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.productPrice;
        }
      }
    }
    return totalAmount;
  };

  const getUniqueItemsCount = () => {
    let uniqueItemsCount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        uniqueItemsCount++;
      }
    }
    return uniqueItemsCount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const resetCartItem = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  };

  const remFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0), // Ensure quantity does not go negative
    }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    remFromCart,
    resetCartItem,
    getTotalCartAmount,
    getUniqueItemsCount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
