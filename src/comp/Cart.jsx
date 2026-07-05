import React from "react";
import "remixicon/fonts/remixicon.css";
import CartCard from "./CartCard";

const Cart = ({ cart, setCart, setCartClick, cartClick }) => {
  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
  return (
    <div className="lg:h-[calc(100vh-80px)] bg-gray-100 px-4 md:px-10 py-6 overflow-hidden">
      {/* ================= Header ================= */}

      {/* ================= Header ================= */}

      <div className="max-w-7xl mx-auto flex items-center justify-between mb-8">
        {/* Left */}

        <button
          onClick={() => {
            cartClick ? setCartClick(false) : setCartClick(true);
          }}
          className="flex items-center gap-2 text-lg font-medium hover:text-orange-500 transition"
        >
          <i className="ri-arrow-left-line text-2xl"></i>

          <span className="hidden md:block">Continue Shopping</span>
        </button>

        {/* Right */}

        <div className="text-right">
          <h1 className="text-2xl md:text-4xl font-bold flex items-center justify-end gap-2">
            <i className="ri-shopping-cart-2-line text-orange-500"></i>
            Your Cart
          </h1>

          <p className="text-orange-500 font-semibold mt-1">
            {cart.length} Items
          </p>
        </div>
      </div>

      {/* ================= Main Container ================= */}

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* ================= Left Side ================= */}
        <div
          className={`bg-white p-2 rounded-2xl shadow-md lg:w-200 lg:h-11 lg:ml-34 ${cart.length === 0 ? "block" : "hidden"}`}
        >
          <p className="text-xl font-semibold lg:pl-5 pl-3">
            Your Cart is empty
          </p>
        </div>
        <div className="flex-1 overflow-y-auto h-[68vh] space-y-5 ">
          {/* ================= Cart Item ================= */}
          {cart.map((item) => {
            return <CartCard item={item} cart={cart} setCart={setCart} />;
          })}
        </div>

        {/* ================= Right Side ================= */}

        <div className="w-full lg:w-[350px]   bg-white rounded-2xl shadow-md p-6 h-fit">
          <h1 className="text-3xl font-bold mb-6">Order Summary</h1>

          {/* Price */}

          <div className="flex justify-between text-lg mb-4">
            <span>Subtotal</span>

            <span>{total}</span>
          </div>

          {/* Delivery */}

          <div
            className={`flex justify-between text-lg mb-6 ${cart.length === 0 ? "invisible" : "block"}`}
          >
            <span>Delivery</span>

            <span className="text-green-600">- ₹40</span>
          </div>

          <hr />

          {/* Total */}

          <div className="flex justify-between mt-6">
            <h1 className="text-2xl font-bold">Total</h1>

            <h1 className="text-3xl text-orange-500 font-bold">{total}</h1>
          </div>

          {/* Free Delivery Message */}

          <div
            className={`bg-green-100 text-green-700 rounded-xl p-3 mt-6 text-center font-medium ${cart.length === 0 ? "hidden" : "block"}`}
          >
            🎉 You saved ₹40 on delivery!
          </div>

          {/* Checkout */}

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xl py-3 rounded-xl mt-6 transition">
            <i className="ri-secure-payment-line mr-2"></i>
            Proceed To Checkout
          </button>

          {/* Features */}

          <div className="grid grid-cols-3 text-center mt-8 gap-4">
            <div>
              <i className="ri-shield-check-line text-3xl"></i>
              <p className="text-sm mt-2">Secure</p>
            </div>

            <div>
              <i className="ri-archive-line text-3xl"></i>
              <p className="text-sm mt-2">Packed</p>
            </div>

            <div>
              <i className="ri-truck-line text-3xl"></i>
              <p className="text-sm mt-2">Fast</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
