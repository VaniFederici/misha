import { useState, useEffect } from "react";
import { ProductosAPI } from "../../api/productos.api";
import { GenericSerializer } from "../../api/generic.serializer";
import { Item } from "../item/item.component";
import { Loading } from "../loading/loading.component";

import "./item-list.component.css";

export const ItemList = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    ProductosAPI.getAllProducts().then((response) => {
      const productos = GenericSerializer.serializeAll(response);
      setItemList(productos);
    });
  }, []);

  if (itemList.length) {
    return (
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-xl-5 ">
          {itemList.map((item, indice) => {
            return <Item item={item} key={indice} />;
          })}
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};
