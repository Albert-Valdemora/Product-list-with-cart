import React, { useState } from "react";

export const Boton = () => {
  const [cantidad, setCantidad] = useState(0);

  return (
    <div className={`w-36 border-solid border-gray-300 rounded-full p-2 relative mx-auto ${cantidad <= 0 ?'bg-[#fff]' :' bg-[#c3410f]'}`}>
      {
        cantidad === 0 
        ? <button className="w-full" onClick={() => setCantidad(cantidad + 1)}>
            <img
              className="inline"
              src="./assets/images/icon-add-to-cart.svg"
              alt=""
            />
            <span className="font-medium">Add to Cart</span>
          </button>
        : <div className="flex justify-around items-center">
            <button className="text-white text-lg" onClick={() => setCantidad(cantidad - 1)}>-</button>
            <span className="text-white text-lg">{cantidad}</span>
            <button className="text-white text-lg" onClick={() => setCantidad(cantidad + 1)}>+</button>
          </div>
      }
    </div>
  );
};

