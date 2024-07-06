import React from "react";
import logo from "../assets/logo.png";
import image from "../assets/image.png";

import { NavLink } from "react-router-dom";
function DesktopNavbar() {
  return (
    <div className="navbar  bg-[#FBE0C9] px-20 hidden z-50 w-[100vw] lg:flex fixed">
      <div className="navbar-start">
        <div className="">
          <div className="">
            <ul className="flex gap-8">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/cart">Cart</NavLink>
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
      <div className="navbar-end">
        <img src={image} className="w-[300px]" alt="" />
      </div>
    </div>
  );
}

export default DesktopNavbar;
