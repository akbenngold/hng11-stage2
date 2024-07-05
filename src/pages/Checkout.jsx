import React from "react";
import cardinfo from "../assets/cardinfo.png";
import Button from "../components/Button";
function Checkout() {
  return (
    <div className="container px-6 pb-40 flex flex-col items-center gap-10">
      <h1 className="brush-underline fredoka text-[#D9455F] text-2xl font-semibold mb-6">
        CHECKOUT
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-[1.5rem]"> Shipping Address</h2>
          <div className="border-2 p-4">
            <h3 className="font-medium text-[1.5rem] flex gap-2 items-center">
              <input
                type="radio"
                name="radio-1"
                className="radio"
                defaultChecked
              />
              Nigeria
            </h3>

            <span className="text-[#8B8686] text-base">
              27 Suncity Estate, Victoria Island, Lag.....
            </span>
          </div>

          <div className="border-2 p-4 flex gap-5 items-center">
            <span className="">+</span>Add new address
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-[1.5rem]">Payment Method</h2>
          <div className="border-2 p-4">
            <img src={cardinfo} alt="" />
          </div>
          <div className="border-2 p-4 flex gap-5 items-center">
            <span className="">+</span>Add new card
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-[1.5rem]">Order Summary</h2>
          <div className="fredoka w-full px-4 mt-4 flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="text-[#9D9C9C]">Subtotal</div>
              <div>N1000</div>
            </div>
            <div className="flex justify-between">
              <div className="text-[#9D9C9C]">Delivery fee</div>
              <div>N1000</div>
            </div>
            <div className="flex justify-between">
              <div className="text-[#9D9C9C]">Discount</div>
              <div>N1000</div>
            </div>
            <div className="flex justify-between mt-8 font-semibold">
              <div>Total cost</div>
              <div>N1000</div>
            </div>
          </div>
          <Button className="w-full">Confirm</Button>
        </div>
      </div>{" "}
    </div>
  );
}

export default Checkout;
