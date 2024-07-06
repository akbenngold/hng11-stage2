import React, { useContext } from "react";
import cardinfo from "../assets/cardinfo.png";
import Button from "../components/Button";
import { ShopContext } from "../context/ShopContext";

function Checkout() {
  const { getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className="container px-6 lg:pt-20 min-w-[100vw] pb-40 flex flex-col items-center gap-10  bg-white">
      <h1 className="brush-underline fredoka text-[#D9455F] text-2xl font-semibold mb-6">
        CHECKOUT
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-base md:text-[1.5rem]">
            {" "}
            Shipping Address
          </h2>
          <div className="border-2 p-4 rounded-lg h-20">
            <h3 className="font-medium text-sm md:text-base flex gap-2 items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="7.76471"
                  stroke="#150C0E"
                  stroke-width="0.470588"
                />
                <circle cx="8.00034" cy="7.99986" r="6.58823" fill="#150C0E" />
              </svg>
              Nigeria
            </h3>

            <span className="text-[#8B8686] text-xs md:text-base">
              27 Suncity Estate, Victoria Island, Lag.....
            </span>
          </div>

          <div className="border-2 p-4 rounded-lg flex gap-5 items-center text-xs md:text-base">
            <span className="">+</span>Add new address
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-base md:text-[1.5rem]">
            Payment Method
          </h2>
          <div className="border-2 p-4 rounded-lg h-20 flex items-center justify-center">
            <img src={cardinfo} className="h-8" alt="" />
          </div>
          <div className="border-2 p-4 rounded-lg flex gap-5 items-center text-xs md:text-base">
            <span className="">+</span>Add new card
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-base md:text-[1.5rem]">
            Order Summary
          </h2>
          <div className="fredoka w-full px-4 mt-4 flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="text-[#9D9C9C]">Subtotal</div>
              <div>N{getTotalCartAmount()}</div>
            </div>
            <div className="flex justify-between">
              <div className="text-[#9D9C9C]">Delivery fee</div>
              <div>N1000</div>
            </div>
            <div className="flex justify-between">
              <div className="text-[#9D9C9C]">Discount</div>
              <div>N0</div>
            </div>
            <div className="flex justify-between mt-8 font-semibold">
              <div>Total cost</div>
              <div>N{getTotalCartAmount() + 1000}</div>
            </div>
          </div>
          <Button className="w-full">Confirm</Button>
        </div>
      </div>{" "}
    </div>
  );
}

export default Checkout;
