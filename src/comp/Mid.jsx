import React from "react";

const Mid = () => {
  const Categories = [
    "All",
    "Burger",
    "Pizza",
    "Drinks",
    "Fries",
    "Dessert",
    "Pasta",
    "Wraps",
  ];

  return (
    <div className="bg-gray-100 py-4">
      <h1 className="text-2xl md:text-3xl font-bold px-4 md:px-10">
        Categories
      </h1>

      <div className="flex gap-3 mt-4 overflow-x-auto hide-scrollbar px-4 md:px-10 pb-2">
        {Categories.map((cat) => (
          <button
            key={cat}
            className="flex-shrink-0 px-6 md:px-8 py-2 bg-white rounded-xl font-semibold hover:bg-orange-300 transition"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Mid;
