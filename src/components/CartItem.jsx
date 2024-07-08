import React, { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ShopContext } from "../context/ShopContext";

function CartItem({ newProduct, id, picture, price, label, rating }) {
  const { addToCart, cartItems, remFromCart, resetCartItem } =
    useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className="card card-side bg-white shadow-sm fredoka px-6">
      <figure>
        <img src={picture} alt="Movie" />
      </figure>
      <div className="card-body flex flex-row justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="font-medium text-xs md:text-sm lg:text-base">
            {label}
          </h2>
          <p className="text-xs">{rating}</p>
          <div className="flex gap-2">
            {cartItemAmount < 1 ? (
              <div className="bg-neutral-300  text-white h-6 w-6 font-bold flex items-center justify-center rounded-full">
                -
              </div>
            ) : (
              <div
                onClick={() => {
                  remFromCart(id);
                }}
                className="h-6 w-6 text-white font-bold cursor-pointer flex items-center justify-center rounded-full bg-[#D9455F]"
              >
                -
              </div>
            )}
            <div>{cartItemAmount}</div>
            <div
              onClick={() => {
                addToCart(id);
              }}
              className="h-6 w-6 text-white cursor-pointer font-bold flex items-center justify-center rounded-full bg-[#D9455F]"
            >
              +
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div
            onClick={() => {
              console.log("yes");
              resetCartItem(id);
            }}
            className="cursor-pointer"
          >
            <RiDeleteBin6Line />
          </div>
          <div>{price}</div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
