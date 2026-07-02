import React from "react";
import Top from "./comp/Top";
import Mid from "./comp/Mid";
import Food from "./comp/Food";

const App = () => {
  return (
    <div>
      <Top></Top>
      <div className="bg-gray-200">
        <Mid></Mid>
        <Food />
      </div>
    </div>
  );
};

export default App;
