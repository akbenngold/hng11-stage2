import React, { useContext } from "react";
import logo from "../assets/logo.png";
import image from "../assets/image.png";
import { ShopContext } from "../context/ShopContext";
import { NavLink } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";

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
      <div className="navbar-end cursor-pointer flex gap-8 ">
        <label className="input-sm rounded-full border border-neutral-300 bg-none flex items-center gap-2">
          <input
            type="text"
            className="h-6 p-0 m-0 bg-[#FBE0C9]"
            placeholder="Search"
          />

          <IoMdSearch className="text-neutral-400" />
        </label>
        <div className=" flex gap-4">
          <div className="indicator">
            <NavLink to="/cart">
              {" "}
              <span className="indicator-item badge bg-purple-600 border-none badge-secondary">
                {getUniqueItemsCount()}
              </span>
              <svg
                width="30"
                height="29"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.704102"
                  width="32"
                  height="32"
                  rx="16"
                  fill="#141010"
                />
                <path
                  d="M20.9466 21.024C20.0786 21.024 19.3826 21.72 19.3826 22.588C19.3826 23.0028 19.5474 23.4006 19.8407 23.694C20.134 23.9873 20.5318 24.152 20.9466 24.152C21.3614 24.152 21.7592 23.9873 22.0525 23.694C22.3458 23.4006 22.5106 23.0028 22.5106 22.588C22.5106 22.1732 22.3458 21.7754 22.0525 21.4821C21.7592 21.1888 21.3614 21.024 20.9466 21.024ZM8.43457 8.51202V10.076H9.99857L12.8138 16.0114L11.7503 17.9273C11.633 18.1463 11.5626 18.4043 11.5626 18.678C11.5626 19.0928 11.7274 19.4906 12.0207 19.784C12.314 20.0773 12.7118 20.242 13.1266 20.242H22.5106V18.678H13.455C13.4032 18.678 13.3534 18.6574 13.3168 18.6208C13.2801 18.5841 13.2595 18.5344 13.2595 18.4825C13.2595 18.4434 13.2673 18.4122 13.283 18.3887L13.9868 17.114H19.8127C20.3992 17.114 20.9153 16.7856 21.1812 16.3086L23.9807 11.249C24.0355 11.1239 24.0746 10.991 24.0746 10.858C24.0746 10.6506 23.9922 10.4517 23.8455 10.3051C23.6989 10.1584 23.5 10.076 23.2926 10.076H11.7268L10.9917 8.51202M13.1266 21.024C12.2586 21.024 11.5626 21.72 11.5626 22.588C11.5626 23.0028 11.7274 23.4006 12.0207 23.694C12.314 23.9873 12.7118 24.152 13.1266 24.152C13.5414 24.152 13.9392 23.9873 14.2325 23.694C14.5258 23.4006 14.6906 23.0028 14.6906 22.588C14.6906 22.1732 14.5258 21.7754 14.2325 21.4821C13.9392 21.1888 13.5414 21.024 13.1266 21.024Z"
                  fill="white"
                />
              </svg>
            </NavLink>
          </div>
          <NavLink to="/checkout">
            <svg
              width="30"
              height="29"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="16" fill="#141010" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.7643 12.0152C12.7643 11.1854 13.0939 10.3896 13.6807 9.80289C14.2674 9.21616 15.0632 8.88654 15.893 8.88654C16.7227 8.88654 17.5185 9.21616 18.1052 9.80289C18.692 10.3896 19.0216 11.1854 19.0216 12.0152C19.0216 12.8449 18.692 13.6407 18.1052 14.2275C17.5185 14.8142 16.7227 15.1438 15.893 15.1438C15.0632 15.1438 14.2674 14.8142 13.6807 14.2275C13.0939 13.6407 12.7643 12.8449 12.7643 12.0152ZM12.7643 16.7081C11.7271 16.7081 10.7324 17.1202 9.99896 17.8536C9.26555 18.587 8.85352 19.5817 8.85352 20.6189C8.85352 21.2413 9.10073 21.8381 9.54078 22.2782C9.98084 22.7182 10.5777 22.9654 11.2 22.9654H20.5859C21.2083 22.9654 21.8051 22.7182 22.2451 22.2782C22.6852 21.8381 22.9324 21.2413 22.9324 20.6189C22.9324 19.5817 22.5204 18.587 21.787 17.8536C21.0535 17.1202 20.0588 16.7081 19.0216 16.7081H12.7643Z"
                fill="white"
              />
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default DesktopNavbar;
