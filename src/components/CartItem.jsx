import React, { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ShopContext } from "../context/ShopContext";

function CartItem({ newProduct, id, picture, price, label, rating }) {
  const { addToCart, cartItems, remFromCart, resetCartItem } =
    useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className="card card-side bg-white lg:bg-[#F7F7F7] shadow-sm border border-[b4a6a6] fredoka w-[85vw] lg:h-56 px-6">
      <figure className="flex flex-col font-normal justify-center my-auto">
        <div className="my-auto">
          {" "}
          <img src={picture} alt="Movie" className="lg:h-[80%]" />{" "}
        </div>
        <div
          onClick={() => {
            console.log("yes");
            resetCartItem(id);
          }}
          className="cursor-pointer hidden lg:flex items-center justify-center gap-2 text-[#D9455F]"
        >
          <RiDeleteBin6Line /> Remove
        </div>
      </figure>
      <div className="card-body flex flex-row h-full justify-between">
        <div className="flex flex-col gap-2 lg:justify h-full">
          <h2 className="font-medium text-xs md:text-sm lg:text-base">
            {label}
          </h2>
          <p className="text-xs">{rating}</p>
          <div className="flex gap-2 lg:hidden">
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
        <div className="flex flex-col justify-between h-full items-end">
          <div
            onClick={() => {
              console.log("yes");
              resetCartItem(id);
            }}
            className="cursor-pointer flex lg:hidden items-center justify-center gap-2 mb-12"
          >
            <RiDeleteBin6Line />
          </div>{" "}
          <div className="flex flex-col h-full justify-between">
            <span className="font-semibold">N{price} </span>
            <div className="lg:flex gap-2 hidden ">
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
        </div>
      </div>
    </div>
  );
}

export default CartItem;
