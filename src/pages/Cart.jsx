import React, { useContext } from "react";
import CartItem from "../components/CartItem";
import products from "../assets/data";
import Button from "../components/Button";
import { ShopContext } from "../context/ShopContext";

function Cart() {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className=" container px-4 mb-20 mx-auto w-full flex flex-col items-center justify-center gap-4">
      <h1 className="brush-underline fredoka text-[#D9455F] text-2xl font-semibold mb-6">
        CART
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full place-items-center">
        {products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <CartItem
                key={product.productId}
                picture={product.productPicture}
                price={product.productPrice}
                label={product.productName}
                rating={product.productRating}
                newProduct={product.newProduct}
                id={product.id}
              />
            );
          }
        })}
      </div>
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
      <Button className="w-full">Checkout</Button>
    </div>
  );
}

export default Cart;
