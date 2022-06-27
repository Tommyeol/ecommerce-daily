import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import CartItems from "../CartItems/CartItems";

const Cart = () => {
  const { cartList, emptyCart, priceTotal, iconCart } = useContext(CartContext);
  return (
    <>
      <div>
        {cartList.lenght < 1 ? (
          <p>Vacio</p>
        ) : (
          cartList.map((product) => (
            <CartItems key={product.producto.id} product={product.producto} />
          ))
        )}
      </div>
      <button onClick={emptyCart}>Eliminar Carrito</button>
      <p>El precio total de los productos es {priceTotal()}</p>
      <p>La cantidad total del carrito es {iconCart()}</p>
    </>
  );
};

export default Cart;
