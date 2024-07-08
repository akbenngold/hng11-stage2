import React, { useContext } from "react";
import CartItem from "../components/CartItem";
import products from "../assets/data";
import Button from "../components/Button";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import viewed from "../assets/viewed";
import cartimg from "../assets/cart.png";
import Card from "../components/Card";

function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className="lg:pt-20 container px-4 mb-20 mx-auto w-full flex flex-col items-center  justify-center gap-4">
      <h1 className="brush-underline fredoka text-[#D9455F] text-2xl font-semibold mb-6">
        CART
      </h1>
      {/*  */}
      {/*  */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 w-full place-items-center">
        {products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <CartItem
                key={product.id}
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
      {getTotalCartAmount() > 0 ? (
        <>
          {" "}
          <div className="fredoka w-full px-4 mt-4 flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="text-[#9D9C9C]">Subtotal</div>
              <div className="font-semibold">N{getTotalCartAmount()}</div>
            </div>
            <div className="flex justify-between">
              <div className="text-[#9D9C9C]">Delivery fee</div>
              <div className="font-semibold">N1000</div>
            </div>
            <div className="flex justify-between">
              <div className="text-[#9D9C9C]">Discount</div>
              <div className="font-semibold">N0</div>
            </div>
            <div className="flex justify-between mt-8 font-semibold">
              <div>Total cost</div>
              <div>N{getTotalCartAmount() + 1000}</div>
            </div>
          </div>
          <Link to="/checkout" className="w-full">
            <Button>Checkout</Button>
          </Link>
        </>
      ) : (
        <div className="flex flex-col items-center gap-8">
          <img src={cartimg} className="mt-8" alt="" />
          <div>
            Your cart is empty. Go back to{" "}
            <Link to="/" className="text-[#D9455F]">
              product
            </Link>{" "}
            page and add some products to card!
          </div>
          <div className="text-[#D9455F] m-4  text-center text-xl">
            <Link to="/"> Products</Link>
          </div>
        </div>
      )}
      <div className="flex-col flex gap-6 items-center justify-center mt-20">
        <h2 className="text-xl">Customers who viewed this also viewed</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {" "}
          {viewed.map((product) => (
            <Card
              key={product.id}
              picture={product.productPicture}
              price={product.productPrice}
              label={product.productName}
              rating={product.productRating}
              newProduct={product.newProduct}
              id={product.id}
            />
          ))}
        </div>{" "}
      </div>
    </div>
  );
}

export default Cart;
