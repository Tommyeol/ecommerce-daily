import React from "react";

const CartItems = ({ product }) => {
  const { nombre, precio } = product;
  return (
    <div>
      <p>{nombre}</p>
    </div>
  );
};

export default CartItems;
