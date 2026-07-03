import React from "react";

const Card = ({ item, setCart, cart }) => {
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
          className="bg-orange-500 w-full rounded-lg py-1.5 text-lg mt-2 text-white active:bg-orange-600"
          onClick={() => {
            let temp = [...cart];
            temp.push(item);
            setCart(temp);
            console.log(cart);
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
