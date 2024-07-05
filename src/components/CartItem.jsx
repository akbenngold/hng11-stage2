import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

function CartItem() {
  const [productCount, setProductCount] = useState(1);

  return (
    <div className="card card-side bg-base-100 shadow-xl fredoka">
      <figure>
        <img src="src/assets/SICM.png" alt="Movie" />
      </figure>
      <div className="card-body flex flex-row justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Hermes Luxury Bag</h2>
          <p>Color Brown</p>
          <div className="flex gap-2">
            {productCount < 1 ? (
              <div className="bg-neutral-300 text-white h-6 w-6 font-bold flex items-center justify-center rounded-full">
                -
              </div>
            ) : (
              <div
                onClick={() => {
                  setProductCount((prevCount) => {
                    return prevCount - 1;
                  });
                }}
                className="h-6 w-6 text-white font-bold flex items-center justify-center rounded-full bg-[#D9455F]"
              >
                -
              </div>
            )}
            <div>{productCount}</div>
            <div
              onClick={() => {
                setProductCount((prevCount) => {
                  return prevCount + 1;
                });
              }}
              className="h-6 w-6 text-white font-bold flex items-center justify-center rounded-full bg-[#D9455F]"
            >
              +
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div>
            <RiDeleteBin6Line />
          </div>
          <div>N4,000</div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
