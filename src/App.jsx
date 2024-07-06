import { useContext, useState } from "react";
import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import { GoHomeFill } from "react-icons/go";
import { RiSearchFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import MobileTopNav from "./components/MobileTopNav";
import { ShopContext } from "./context/ShopContext";
import DesktopNavbar from "./components/DesktopNavbar";
import Footer from "./components/Footer";

function App() {
  const { getUniqueItemsCount } = useContext(ShopContext);

  return (
    <div className=" flex flex-col fredoka justify-between h-[100vh] w-[100vw]">
      {/* NavBar */}
      <MobileTopNav />
      <DesktopNavbar />
      {/*  */}
      {/* Routes */}
      {/*  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      {/*  */}
      {/* bottom nav mobile */}
      {/*  */}
      <div className="btm-nav bg-black rounded-full lg:hidden">
        <NavLink to="/">
          <GoHomeFill size="22px" />
        </NavLink>
        <NavLink to="/checkout">
          <RiSearchFill size="22px" />
        </NavLink>
        <NavLink to="/cart">
          <div className="indicator">
            <span className="indicator-item badge bg-purple-600 border-none badge-secondary">
              {getUniqueItemsCount()}
            </span>
            <FaShoppingCart size="22px" />
          </div>
        </NavLink>{" "}
        <NavLink to="/list">
          <FaUser size="22px" />
        </NavLink>
      </div>
      {/*  */}
      {/* footer */}
      {/*  */}
      <Footer />
    </div>
  );
}

export default App;
