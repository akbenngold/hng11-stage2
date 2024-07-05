import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import products from "../assets/data";

function Home() {
  return (
    <div className="mb-20 mx-auto w-full flex flex-col items-center justify-center">
      {" "}
      <h1 className=" brush-underline fredoka text-[#D9455F] text-2xl font-semibold mb-6">
        TRENDY PRODUCTS
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
        {products.map((product) => {
          return (
            <Card
              picture={product.productPicture}
              price={product.productPrice}
              label={product.productName}
              rating={product.productRating}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
