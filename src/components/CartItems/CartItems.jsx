import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

const CartItems = ({ product }) => {
  const { deleteItem } = useContext(CartContext);
  const { nombre, precio, id } = product;
  return (
    <div>
      <h4>{nombre}</h4>
      <button onClick={() => deleteItem(id)}>Borrar Articulo</button>
    </div>
  );
};

export default CartItems;
