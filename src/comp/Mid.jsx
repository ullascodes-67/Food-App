import React from "react";

const Mid = () => {
  const Categories = ["All", "Burger", "Pizza", "Drinks", "Fries","Wraps",
    "Pasta",
    "Dessert",
    "Salad",
    "Sides"];
  return (
    <div>
      <div className="bg-gray-100 px-10 py-4">
        <h1 className="text-3xl font-bold">Categories</h1>
        <div className="gap-2 flex mt-3  overflow-y-auto hide-scrollbar">
          {Categories.map((cat) => {
            return (
              <button
                key={cat}
                className="px-20 py-2 rounded-xl bg-white font-semibold active:bg-orange-300"
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Mid;
