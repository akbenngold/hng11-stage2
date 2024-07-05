import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Skeleton from "../components/Skeleton";
import products from "../assets/data";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  return (
    <div className="mb-20 px-4 mx-auto w-full flex flex-col items-center justify-center">
      <h1 className="brush-underline fredoka text-[#D9455F] text-2xl font-semibold mb-6">
        TRENDY PRODUCTS
      </h1>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 w-full place-items-center my-9">
        {loading
          ? Array(6)
              .fill()
              .map((_, index) => <Skeleton key={index} />)
          : products.map((product) => (
              <Card
                key={product.productId}
                picture={product.productPicture}
                price={product.productPrice}
                label={product.productName}
                rating={product.productRating}
                newProduct={product.newProduct}
                id={product.id}
              />
            ))}
      </div>
    </div>
  );
}

export default Home;
