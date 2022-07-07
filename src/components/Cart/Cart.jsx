import { getFirestore, collection, addDoc } from "firebase/firestore";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import CartItems from "../CartItems/CartItems";

const Cart = () => {
  const { cartList, emptyCart, priceTotal, iconCart } = useContext(CartContext);
  // function realizarPedido(e) {
  //   e.preventDefault();
  //   let pedido = {};

  //   pedido.buyer = { name: "Juan", email: "t@gmail.com", phone: "1124578961" };
  //   pedido.total = priceTotal();

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
      {/* <button className="btn btn-outline-success" onClick={realizarPedido}>
          Terminar compra
        </button> */}
    </>
  );
};
// const db = getFirestore();
// const orderCollection = collection(db, "orders");
// addDoc(orderCollection, pedido).then((resp) => console.log());

export default Cart;
