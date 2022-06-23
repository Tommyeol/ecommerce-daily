import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const AddToCart = (producto, cant) => {
    if (IsInCart(producto.id)) {
      alert("El producto ya se encuentra en el carrito");
    } else {
      setCartList([...cartList, { producto, cant }]);
      alert("Se agrego el producto correctamente");
    }
  };

  const IsInCart = (id) => {
    return cartList && cartList.some((i) => i.producto.id === id);
  };

  return (
    <CartContext.Provider value={{ AddToCart, cartList }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
