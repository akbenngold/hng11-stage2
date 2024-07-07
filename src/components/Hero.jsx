import React from "react";
import hero from "../assets/hero.png";

function Hero() {
  return (
    <div
      className="hero my-2 w-[100vw] h-[35vh] flex bg-cover md:bg-cover md:h-[50vh] lg:h-[100vh] justify-between px-6 md:px-10 lg:px-32 py-32 bg-no-repeat"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundPosition: "top",
      }}
    >
      <div className="hero-content flex flex-col items-start justify-center basis-3/4 text-neutral-content">
        
          <h1 className="md:mb-5 text-xl md:text-5xl font-semibold lg:text-6xl">
            Discover Your Signature <br/> Scent With TimbuShop
          </h1>
          <p className="md:mb-5 text-white text-xs md:text-base lg:text-xl">
            Get 15% off any Order above N4500
          </p>
          <button className="btn btn-primary px-6 py-4 md:px-6 text-white font-normal bg-black border-none w-24 md:w-36 hover:bg-[#D9455F]">
            <a href="#products">Shop now</a>
          </button>
        
      </div>{" "}
      <div className="basis-1/4"></div>
    </div>
  );
}

export default Hero;
