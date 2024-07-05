import React from "react";
import Button from "./Button";
import ratingIcon from "../assets/rating.svg";
function Card({ picture, price, label, rating }) {
  return (
    <div className="card bg-base-100 shadow-md flex flex-col items-center justify-center pb-4">
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {label}
          <div className="badge badge-secondary">NEW</div>
        </h2>

        <div className="flex justify-between items-center border-y-2 py-2 px-1 border-slate-100">
          <div className="text-[#E07E46] fredoka bg-[#F7F7F7] rounded-lg p-2 w-16">
            Halal
          </div>
          <div className="flex">
            {rating}
            <img src={ratingIcon} alt="" />
          </div>
        </div>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
        <div className="text-start font-medium text-2xl fredoka">₦ {price}</div>
      </div>

      <Button>Add Gift</Button>
    </div>
  );
}

export default Card;
