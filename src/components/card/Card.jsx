import React from "react";
import { Boton } from "../boton/Boton";

import { v4 as uuidv4 } from 'uuid'; // Importar uuid

export const Card = ({ category, image, name, price }) => {
  const product = { id: uuidv4(), name, category, price, image }; // Generar un nuevo ID

  return (
    <div>
      <div className="w-52 h-44">
        <img className="rounded-lg w-full" src={image.desktop} alt={image.desktop} />
      </div>
      <div className="add text-center mb-2">
        <Boton product={product} />
      </div>
      <div>
        <p className="text-gray-500 text-xs">{category}</p>
        <h3 className="font-semibold py-1 ">{name}</h3>
        <h4 className="font-bold text-[#c3410f]">${price}</h4>
      </div>
    </div>
  );
};
