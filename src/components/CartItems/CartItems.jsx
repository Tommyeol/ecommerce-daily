import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

const CartItems = ({ product }) => {
  const { deleteItem } = useContext(CartContext);
  const { nombre, id } = product;
  return (
    <div>
      <h4>{nombre}</h4>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => deleteItem(id)}
      >
        Borrar Articulo
      </button>
    </div>
  );
};

export default CartItems;
