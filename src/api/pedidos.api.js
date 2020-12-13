import { getFirestore } from "../firebase";

const dataBase = getFirestore();
const itemCollection = dataBase.collection("Pedidos");

const crearPedido = (pedido) => {
  return itemCollection.add(pedido);
};

export const PedidosAPI = {
  crearPedido,
};
