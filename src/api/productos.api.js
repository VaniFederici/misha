import { getFirestore } from "../firebase";

const dataBase = getFirestore();
const itemCollection = dataBase.collection("Productos");

const getAllProducts = () => {
  return itemCollection.get();
};

const getProduct = (id) => {
  const item = itemCollection.doc(id);
  return item.get();
};

const getProductsByCategory = (categoryId) => {
  const filter = itemCollection.where("categoria_id", "==", categoryId);
  return filter.get();
};

export const ProductosAPI = {
  getAllProducts,
  getProduct,
  getProductsByCategory,
};
