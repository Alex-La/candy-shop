import React, { useContext, useEffect, useState } from "react";

import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

import UserContext from "../../../../context/UserContext";

const token = "7f4b5cfbed7bcf19270f403d8a6827b9674526c3";

const EnterContactData = ({ setAdress }) => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    number: "",
    email: "",
    city: "",
  });

  const me = useContext(UserContext);

  useEffect(() => {
    if (me)
      setForm({
        name: me.name,
        surname: me.surname,
        email: me.email,
        number: "",
        city: "",
      });
  }, [me, setForm]);

  const onFormChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className="col s12 m8 xl9 center">
      <h5 className="first">1. Введите контактные данные</h5>
      <div className="row">
        <div className="input-field col s12 l6">
          <input
            id="first_name"
            type="text"
            placeholder="Имя"
            name="name"
            value={form.name}
            onChange={onFormChange}
          />
        </div>
        <div className="input-field col s12 l6">
          <input
            id="last_name"
            type="text"
            placeholder="Фамилия"
            name="surname"
            value={form.surname}
            onChange={onFormChange}
          />
        </div>
        <div className="input-field col s12 l6">
          <input
            id="phone_number"
            type="text"
            name="number"
            placeholder="Телефон"
            value={form.number}
            onChange={onFormChange}
          />
        </div>
        <div className="input-field col s12 l6">
          <input
            id="email"
            type="text"
            className="validate"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={onFormChange}
          />
        </div>
        <div className="input-field col s12 l6">
          <AddressSuggestions
            token={token}
            inputProps={{
              type: "text",
              placeholder: "Город",
              autoComplete: "nope",
            }}
            filterLanguage="ru"
            onChange={setAdress}
          />
        </div>
      </div>
    </div>
  );
};

export default EnterContactData;
