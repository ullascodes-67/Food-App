import React from "react";

const CartCard = ({ item, cart, setCart }) => {
  const alreadyExists = cart.some((food) => food.id === item.id);

  return (
    <div>
      <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col  sm:flex-row gap-4">
        {/* Food Image */}

        <img
          src={item.image}
          alt=""
          className="w-full sm:w-36 h-36 object-cover rounded-xl"
        />

        {/* Item Details */}

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold">{item.name}</h1>

            <p className="text-gray-500 mt-1">
              <i className="ri-time-line mr-1"></i>
              {item.deliveryTime}
            </p>

            <h2 className="text-2xl text-green-600 font-bold mt-3">
              {item.price}
            </h2>
          </div>

          {/* Quantity */}

          <div className="flex items-center justify-between mt-5">
            <button
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
              className="text-red-500 text-xl"
            >
              <i className="ri-delete-bin-6-line"></i>
            </button>

            <div className="flex items-center gap-4">
              <button className="w-10 h-10 border rounded-lg text-xl hover:bg-orange-500 hover:text-white transition">
                -
              </button>

              <span className="text-xl font-bold">{item.quantity}</span>

              <button className="w-10 h-10 border rounded-lg text-xl hover:bg-orange-500 hover:text-white transition">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
