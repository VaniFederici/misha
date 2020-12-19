import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../context/cart-context.component";
import { CartItem } from "../cart-item/cart-item.componet";
import "./cart.component.css";

export const Cart = () => {
  const contexto = useContext(CartContext);
  const history = useHistory();

  const finalizar = () => {
    history.push("/checkout");
  };

  if (contexto.pedido.length === 0) {
    return <div className="cart-empty">El carrito esta vacío</div>;
  } else {
    return (
      <>
        <div className="cart-list">
          {contexto.pedido.map((item, indice) => {
            return <CartItem item={item} key={indice} />;
          })}
        </div>
        <div className="cart-finalize-container">
          <div className="cart-total">TOTAL: ${contexto.montoTotalPedido}</div>
          <div className="cart-finalize">
            <button className="cart-finalize-button" onClick={finalizar}>
              Comprar
            </button>
          </div>
        </div>
      </>
    );
  }
};
