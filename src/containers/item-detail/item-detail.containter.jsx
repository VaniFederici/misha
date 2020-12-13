import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductosAPI } from "../../api/productos.api";
import { GenericSerializer } from "../../api/generic.serializer";
import { ItemDetail } from "../../components/item-detail/item-detail.component";
import { Loading } from "../../components/loading/loading.component";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    ProductosAPI.getProduct(id).then((response) => {
      const item = GenericSerializer.serialize(response);
      setItem(item);
    });
  }, []);

  if (item && item.id) {
    return <ItemDetail item={item} />;
  } else {
    return <Loading />;
  }
};
