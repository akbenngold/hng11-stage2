import { useState } from "react";
import "./App.css";
import { CgProfile } from "react-icons/cg";
import { BiMessageSquareDots } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { Route, Routes, NavLink } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import { GoHome, GoHomeFill } from "react-icons/go";
import { RiSearchFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { FaListAlt, FaShoppingCart } from "react-icons/fa";
import MobileTopNav from "./components/MobileTopNav";

function App() {
  return (
    <div className="container  flex flex-col gap-12 justify-between">
      <MobileTopNav />{" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <div className="btm-nav bg-black rounded-full">
        <NavLink to="/">
          <GoHomeFill size="22px" />
          {/* <span className="btm-nav-label">Home</span> */}
        </NavLink>
        <NavLink to="/checkout">
          <RiSearchFill size="22px" />
          {/* <span className="btm-nav-label">Messages</span> */}
        </NavLink>
        <NavLink to="/cart">
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">3</span>
            <FaShoppingCart size="22px" />
          </div>
        </NavLink>{" "}
        <NavLink to="/list">
          <FaUser size="22px" />
          {/* <span className="btm-nav-label">Profile</span> */}
        </NavLink>
      </div>
    </div>
  );
}

export default App;
