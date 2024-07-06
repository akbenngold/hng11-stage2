import React, { useContext } from "react";
import Button from "./Button";
import ratingIcon from "../assets/rating.svg";
import { ShopContext } from "../context/ShopContext";

function Card({ newProduct, id, picture, price, label, rating }) {
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="card bg-white w-[85%] shadow-md flex flex-col items-center justify-center py-8 gap-1 ">
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body gap-1">
        <h2 className="card-title text-sm md:text-xl font-medium">
          {label}
          {newProduct && (
            <div className="badge badge-secondary text-white border-none bg-purple-600">
              NEW
            </div>
          )}
        </h2>

        <div className="flex justify-between items-center border-y-2 py-2 px-1 border-slate-100">
          <div className="text-[#E07E46] text-sm md:text-base fredoka bg-[#F7F7F7] rounded-lg p-2 w-16">
            Halal
          </div>
          <div className="flex text-xs">
            {rating}
            <img src={ratingIcon} alt="" />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-start font-medium text-xl md:text-2xl fredoka">
            ₦ {price}
          </div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
          </div>
        </div>
      </div>

      <div
        className="w-[85%]"
        onClick={() => {
          addToCart(id);
        }}
      >
        <Button>
          Add to Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
        </Button>
      </div>
    </div>
  );
}

export default Card;
