import { getFirestore } from "../firebase";

const dataBase = getFirestore();
const itemCollection = dataBase.collection("Categorias");

const getAllCategories = () => {
  return itemCollection.get();
};

const getCategory = (id) => {
  const item = itemCollection.doc(id);
  return item.get();
};

const getCategoryByKey = (key) => {
  const filter = itemCollection.where("key", "==", key);
  return filter.get();
};

export const CategoriasAPI = {
  getAllCategories,
  getCategory,
  getCategoryByKey,
};
