import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import CartItems from "../CartItems/CartItems";

const Cart = () => {
  const { cartList } = useContext(CartContext);
  return (
    <div>
      {cartList.lenght < 1 ? (
        <p>Carrito vacio</p>
      ) : (
        cartList.map((product) => (
          <CartItems key={product.producto.id} product={product.producto} />
        ))
      )}
    </div>
  );
};

export default Cart;
