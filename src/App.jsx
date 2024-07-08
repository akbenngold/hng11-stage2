import { useContext, useState } from "react";
import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import MobileTopNav from "./components/MobileTopNav";
import { ShopContext } from "./context/ShopContext";
import DesktopNavbar from "./components/DesktopNavbar";
import Footer from "./components/Footer";

function App() {
  const { getUniqueItemsCount } = useContext(ShopContext);

  return (
    <div className=" flex flex-col fredoka justify-between h-[100vh] w-[100vw] overflow-x-hidden">
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
      {/*  */}
      {/* footer */}
      {/*  */}
      <Footer />
    </div>
  );
}

export default App;
