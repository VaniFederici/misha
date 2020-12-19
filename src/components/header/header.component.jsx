import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartIcon } from "../cart-icon/cart-icon.component";
import { CategoriasAPI } from "../../api/categorias.api";
import { GenericSerializer } from "../../api/generic.serializer";

export const Header = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    CategoriasAPI.getAllCategories().then((response) => {
      const categorias = GenericSerializer.serializeAll(response);
      setCategorias(categorias);
    });
  }, []);

  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + "/images/imagen1.jpg"}
          width="100"
          height="60"
          className="d-inline-block align-top"
          alt=""
          loading="lazy"
        />
      </Link>
      <Link to="/carrito">
        <CartIcon />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {categorias.map((categoria) => {
            return (
              <li className="nav-item" key={categoria.id}>
                <NavLink
                  to={`/categoria/${categoria.key}`}
                  activeClassName="active"
                  className="nav-link"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                >
                  {categoria.nombre}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
