import React, { useState, useContext } from "react";
import { ProdContext } from "../ProdContext";

export const Boton = ({ product }) => {
  const [cantidad, setCantidad] = useState(0);
  const { dispatch } = useContext(ProdContext);
   

  const handleAddToCart = () => {
    setCantidad(1);
    dispatch({ type: 'add', payload: { ...product, cantida: 1 } });
  };

  const handleQuantityChange = (newCantidad) => {
    setCantidad(newCantidad);
    if (cantidad >= 1) {
      dispatch({ type: 'add', payload: { ...product, cantida: newCantidad } });   
    }
  };

  return (
    <div className={`w-36 border-solid border-gray-300 rounded-full p-2 relative mx-auto ${cantidad <= 0 ? 'bg-[#fff]' : ' bg-[#c3410f]'}`}>
    {
      cantidad === 0
        ? <button className="w-full" onClick={handleAddToCart}>
          <img
            className="inline"
            src="./assets/images/icon-add-to-cart.svg"
            alt=""
          />
          <span className="font-medium">Add to Cart</span>
        </button>
        : <div className="flex justify-around items-center">
          <button className="text-white text-lg" onClick={() => handleQuantityChange(cantidad - 1)}>-</button>
          <span className="text-white text-lg">{cantidad}</span>
          <button className="text-white text-lg" onClick={() => handleQuantityChange(cantidad + 1)}>+</button>
        </div>
    }
  </div>
  );
};
