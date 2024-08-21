import React, { useContext } from "react";
import { ProdContext } from "../ProdContext";

export const Pedidos = () => {
  const { producto, dispatch } = useContext(ProdContext);
  console.log(producto);

  const total = producto.reduce((acc, p) => {
    const precio = parseFloat(p.price);
    const cantidad = parseInt(p.cantida) || 0;
    return acc + cantidad * precio;
  }, 0);

  const handleRemoveProduct = (id) => {
    dispatch({ type: 'delete', payload: id }); // Dispatch para eliminar el producto por id
  };

  return (
    <div className="w-96 h-auto bg-white p-8 rounded-2xl ms:mx-0 mx-auto ">
      <h2 className="text-xl text-[#c3410f] font-bold">
        Your Cart ({producto.length})
      </h2>
      <div className="text-center">
        {producto.length === 0 ? (
          <>
            <img
              className="mx-auto my-2"
              src="./assets/images/illustration-empty-cart.svg"
              alt="empty cart"
            />
            <small className="text-base">
              Your added items will appear here
            </small>
          </>
        ) : (
          <>
            {producto.map((p) => (
              <div key={p.id} className="py-4 w-full border-gray-200 border-b">
                <h2 className="font-bold text-left">{p.name}</h2>
                <div className="flex justify-between py-2">
                  <p>
                    <span className="pr-2 text-[#c3410f]">{p.cantida}X</span> @{p.price}{" "}
                    <b className="px-3">
                      $
                      {(parseInt(p.cantida) * parseFloat(p.price)).toFixed(2)}
                    </b>
                  </p>
                  <button
                    className="w-7 rounded-full border-gray-500 border-2"
                    onClick={() => handleRemoveProduct(p.id)} // Llama a la función para eliminar el producto
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
            <div className="py-4 flex justify-between">
              <h3 className="font-bold">Order Total</h3>
              <h3 className="text-xl font-bold ">$ {total.toFixed(2)}</h3>
            </div>

            <button className="w-full h-12 rounded-full bg-[#c3410f] text-white">
              Confirm Order
            </button>
          </>
        )}
      </div>
    </div>
  );
};


