import React, { useState } from "react";
import { use } from "react";

const Card = ({ item, setCart, cart }) => {
  // let [Bg_col, setBg_col] = useState("bg-orange-500 text-white");
  // const [btn_value, setBtn_value] = useState("Add To Cart");
  const alreadyExists = cart.some((food) => food.id === item.id);
  return (
    <div className="w-full max-w-[350px] bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <img src={item.image} alt="" className="object-cover h-44 w-full" />

      <div className="px-2 py-2">
        <h1 className="text-2xl font-semibold">
          {item.name}
          <span className="text-xs font-normal"> in {item.deliveryTime}</span>
        </h1>

        <h1>⭐ {item.rating}</h1>

        <h2 className="text-xl text-green-700">₹{item.price}</h2>

        <button
          className={` ${alreadyExists ? "bg-white text-orange-500 border-orange border-1" : "bg-orange-500 text-white"} w-full  rounded-lg py-1.5 text-lg mt-2   `}
          onClick={() => {
            if (alreadyExists) {
              let temp = [...cart];
              let index = cart.findIndex((food) => food.id === item.id);
              temp.splice(index, 1);
              setCart(temp);
              console.log(cart);
            } else {
              let temp = [...cart];
              temp.push(item);

              setCart(temp);
              console.log(cart);
            }
          }}
        >
          {alreadyExists ? "Remove From Cart" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};

export default Card;
