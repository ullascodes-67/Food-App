import React from "react";
import burger from "../assets/burger.png";
import "remixicon/fonts/remixicon.css";

const Top = ({
  cart,
  setCartClick,
  cartClick,
  search,
  setSearch,
  setSelectedCat,
}) => {
  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="px-5 md:px-10 py-4">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
          {/* Logo */}
          <div
            className="flex items-center gap-2"
            onClick={() => {
              cartClick ? setCartClick(false) : setCartClick(false);
            }}
          >
            <img src={burger} alt="" className="w-12 h-12" />

            <div>
              <h1 className="text-2xl font-bold text-orange-500">Foodie</h1>

              <p className="text-xs text-gray-500">Good Food, Good Mood</p>
            </div>
          </div>

          {/* Search */}
          <div
            className={`order-3 md:order-2 w-full md:w-[600px] relative  ${cartClick ? "hidden" : "block"}`}
          >
            <input
              type="text"
              placeholder="Search food..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                if (search !== "") setSelectedCat("All");
              }}
              className={
                "w-full bg-gray-100 rounded-full py-3 pl-5 pr-4 outline-none border-2 border-transparent focus:border-orange-400"
              }
            />
            <i
              className={`ri-search-line absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 ${search == "" ? "block" : "hidden"}`}
            ></i>
            <i
              className={`ri-close-large-line absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer  ${search == "" ? "hidden" : "block"}`}
              onClick={() => setSearch("")}
            ></i>
          </div>

          {/* Cart */}
          <button
            onClick={() => {
              cartClick ? setCartClick(false) : setCartClick(true);
            }}
            className="order-2 md:order-3 relative text-orange-500 text-3xl"
          >
            <i className="ri-shopping-cart-2-fill "></i>

            <span className="absolute -top-1 -right-2 bg-red-500 text-white w-5 h-5 rounded-full text-[10px] flex items-center justify-center">
              {cart.length}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Top;
