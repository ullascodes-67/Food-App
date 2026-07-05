import React, { useState } from "react";
import Top from "./comp/Top";
import Mid from "./comp/Mid";
import Food from "./comp/Food";
import Cart from "./comp/Cart";

const App = () => {
  let [selectedCat, setSelectedCat] = useState("All");
  const [cart, setCart] = useState([]);
  const [cartClick, setCartClick] = useState(false);
  let [search, setSearch] = useState("");

  return (
    <div>
      <Top
        cart={cart}
        setCartClick={setCartClick}
        cartClick={cartClick}
        search={search}
        setSearch={setSearch}
        setSelectedCat={setSelectedCat}
      ></Top>
      <div className="bg-gray-200 min-h-[88vh]">
        {cartClick ? (
          <Cart
            cart={cart}
            setCart={setCart}
            setCartClick={setCartClick}
            cartClick={cartClick}
          />
        ) : (
          <>
            <Mid
              selectedCat={selectedCat}
              setSelectedCat={setSelectedCat}
              
            ></Mid>
            <Food
              selectedCat={selectedCat}
              cart={cart}
              setCart={setCart}
              search={search}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
