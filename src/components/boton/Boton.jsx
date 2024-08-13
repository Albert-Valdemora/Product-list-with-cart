import React from "react";

export const Boton = () => {
  return (
    <button className="w-36 bg-[#fff] border-solid border-gray-300 border rounded-full p-2">
      <img
        className="inline"
        src="./assets/images/icon-add-to-cart.svg"
        alt=""
      />
      <span className="font-medium">Add to Cart</span>
    </button>
  );
};
