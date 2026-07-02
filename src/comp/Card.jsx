import React from "react";

const Card = (props) => {
  return (
    <div className="w-86 h-80 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex ">
      <div className="w-86 h-80 bg-white rounded-2xl m-2 overflow-hidden">
        <img src={props.img} alt="" className="object-cover h-40 w-full " />

        <div className="px-2 py-2 ">
          <h1 className="text-2xl font-semibold">
            {props.name} <span className="text-xs font-normal"> in {props.time}</span>
          </h1>
          <h1> ⭐{props.rating}</h1>
          <h2 className="text-xl  text-green-700">₹{props.price} </h2>
          <button className="bg-orange-500  w-full rounded-lg py-1.5 text-lg mt-1 text-white active:bg-orange-600">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
