import React, { useState } from "react";
import Top from "./comp/Top";
import Mid from "./comp/Mid";
import Food from "./comp/Food";

const App = () => {
  let [selectedCat, setSelectedCat] = useState("All");
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Top cart={cart}></Top>
      <div className="bg-gray-200 min-h-[88vh]">
        <Mid selectedCat={selectedCat} setSelectedCat={setSelectedCat}></Mid>
        <Food selectedCat={selectedCat} cart={cart} setCart={setCart} />
      </div>
    </div>
  );
};

export default App;
