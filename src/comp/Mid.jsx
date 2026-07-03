import React, { useState } from "react";

const Mid = ({ selectedCat, setSelectedCat }) => {
  const Categories = [
    "All",
    "Burger",
    "Pizza",
    "Drinks",
    "Fries",
    "Dessert",
    "Pasta",
    "Wraps",
    "Sides",
  ];

  return (
    <div className="bg-gray-100 py-4">
      <h1 className="text-2xl md:text-3xl font-bold px-4 md:px-10">
        Categories
      </h1>

      <div className="flex gap-3 mt-4 overflow-x-auto hide-scrollbar py-0.5 px-4 md:px-10 pb-2">
        {Categories.map((cat) => (
          <button
            key={cat}
            className={`flex-shrink-0 px-6 md:px-8 py-2 rounded-xl font-semibold hover:scale-103  transition ${selectedCat === cat ? "bg-orange-400 text-white hover:bg-orange-400" : "bg-white"}`}
            onClick={() => {
              setSelectedCat(cat);
              console.log(selectedCat);
            }}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Mid;
