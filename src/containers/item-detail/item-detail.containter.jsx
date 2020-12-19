import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductosAPI } from "../../api/productos.api";
import { GenericSerializer } from "../../api/generic.serializer";
import { ItemDetail } from "../../components/item-detail/item-detail.component";
import { Loading } from "../../components/loading/loading.component";

import "./item-detail.container.css";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [itemNotFound, setItemNotFound] = useState(false);

  useEffect(() => {
    ProductosAPI.getProduct(id).then((response) => {
      if (response.exists) {
        const item = GenericSerializer.serialize(response);
        setItem(item);
      } else {
        setItemNotFound(true);
      }
    });
  }, []);

  if (item && item.id) {
    return <ItemDetail item={item} />;
  } else if (itemNotFound) {
    return <div className="item-detail-not-found">Producto no encontrado</div>;
  } else {
    return <Loading />;
  }
};
