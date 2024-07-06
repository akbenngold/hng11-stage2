import React from "react";
import hero from "../assets/hero.png";

function Hero() {
  return (
    <div
      className="hero mt-2 w-[100vw] h-[100vh] hidden lg:flex bg-contain  justify-between px-32 bg-no-repeat"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="hero-content text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl ">
            Discover Your Signature Scent With TimbuShop
          </h1>
          <p className="mb-5 text-white">Get 15% off any Order above $4500</p>
          <button className="btn btn-primary text-white bg-black border-none w-36 hover:bg-[#D9455F]">
            <a href="#products">Shop now</a>
          </button>
        </div>
      </div>{" "}
      <div className="hero-overlay bg-contain bg-opacity-60"></div>
    </div>
  );
}

export default Hero;
