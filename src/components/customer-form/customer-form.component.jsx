import { useState } from "react";
import "./customer-form.component.css";

export const CustomerForm = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const validar = () => {
    const emailPattern = /^[a-zA-Z0-9._]+[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
    if (name.trim() === "") {
      setError("Debe ingresar un nombre y apellido");
      return;
    }
    if (phone.trim() === "") {
      setError("Debe ingresar un teléfono");
      return;
    }
    if (email.trim() === "") {
      setError("Debe ingresar un e-mail");
      return;
    }
    if (!emailPattern.test(email)) {
      setError("Debe ingresar un e-mail válido");
      return;
    }
    setError("");
    success();
  };

  const success = () => {
    const cliente = { name, phone, email };
    props.onSuccess(cliente);
  };

  return (
    <>
      <h1 className="customer-form-title">
        Ingrese sus datos para finalizar el pedido
      </h1>
      <div className="container-fluid customer-form">
        <div className="col-12">
          <label htmlFor="name" className="form-label">
            Nombre y Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="phone" className="form-label">
            Teléfono
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="col-12 text-right">
          <div className="customer-form-error">{error}</div>
          <button className="customer-form-button" onClick={validar}>
            Siguiente
          </button>
        </div>
      </div>
    </>
  );
};
