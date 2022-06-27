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

  const deleteItem = (id) => {
    const items = cartList.filter((product) => product.producto.id !== id);
    setCartList(items);
  };

  const iconCart = () => {
    return cartList.reduce((acum, i) => acum + i.cant, 0);
  };

  const priceTotal = () => {
    return cartList.reduce((acum, i) => acum + i.cant * i.producto.precio, 0);
  };

  const emptyCart = () => {
    setCartList([]);
  };

  const IsInCart = (id) => {
    return cartList && cartList.some((i) => i.producto.id === id);
  };

  return (
    <CartContext.Provider
      value={{
        AddToCart,
        cartList,
        emptyCart,
        deleteItem,
        priceTotal,
        iconCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
