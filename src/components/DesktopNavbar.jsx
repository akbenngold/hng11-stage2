import React, { useContext } from "react";
import logo from "../assets/logo.png";
import image from "../assets/image.png";
import { ShopContext } from "../context/ShopContext";
import { NavLink } from "react-router-dom";

function DesktopNavbar() {
  const { getUniqueItemsCount } = useContext(ShopContext);

  return (
    <div className="navbar  bg-[#FBE0C9] px-20 hidden z-50 w-[100vw] lg:flex  fixed">
      <div className="navbar-start">
        <div className="">
          <div className="">
            <ul className="flex gap-8">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/cart">
                  <div className="indicator">
                    <span className="indicator-item badge bg-purple-600 text-white border-none badge-secondary">
                      {getUniqueItemsCount()}
                    </span>
                    Cart
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/checkout">Checkout</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar-center">
        <img src={logo} className="h-6" alt="" />
        <a className="btn btn-ghost text-xl">TimbuCloudShop</a>
      </div>
      <div className="navbar-end cursor-pointer">
        <img src={image} className="w-[300px]" alt="" />
      </div>
    </div>
  );
}

export default DesktopNavbar;
