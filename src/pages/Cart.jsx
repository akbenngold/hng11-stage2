import React from "react";
import CartItem from "../components/CartItem";
import products from "../assets/data";

function Cart() {
  return (
    <div className="mb-20 mx-auto w-full flex flex-col items-center justify-center">
      <CartItem />
    </div>
  );
}

export default Cart;
