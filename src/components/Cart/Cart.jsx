import { getFirestore, collection, addDoc } from "firebase/firestore";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import CartItems from "../CartItems/CartItems";

const Cart = () => {
  const { cartList, emptyCart, priceTotal, iconCart } = useContext(CartContext);
  const realizarPedido = async () => {
    const db = getFirestore();

    let pedido = {};
    pedido.buyer = { name: "Juan", email: "t@gmail.com", phone: "1124578961" };
    pedido.total = priceTotal();
    pedido.carrito = cartList;
    console.log(pedido);
    const docRef = await addDoc(collection(db, "orders"), pedido);
  };
  return (
    <>
      <div>
        {cartList.lenght < 1 ? (
          <p>Empty</p>
        ) : (
          cartList.map((product) => (
            <CartItems key={product.producto.id} product={product.producto} />
          ))
        )}
      </div>
      <button className="btn btn-primary" onClick={emptyCart}>
        Eliminar Carrito
      </button>
      <p>La cantidad total del carrito es {iconCart()}</p>
      <p>El precio total de los productos es {priceTotal()}</p>
      <button className="btn btn-outline-success" onClick={realizarPedido}>
        Terminar compra
      </button>
    </>
  );
};

export default Cart;
