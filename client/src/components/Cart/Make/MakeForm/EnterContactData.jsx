import React, { useContext, useEffect } from "react";

import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

import UserContext from "../../../../context/UserContext";

import OrderContext from "../../../../context/OrderContext";

const token = "7f4b5cfbed7bcf19270f403d8a6827b9674526c3";

const EnterContactData = () => {
  const { contactDataForm, setContactDataForm, setAddress } = useContext(
    OrderContext
  );
  const me = useContext(UserContext);

  useEffect(() => {
    if (me)
      setContactDataForm({
        name: me.name,
        surname: me.surname,
        email: me.email,
        number: "",
        city: "",
      });
  }, [me, setContactDataForm]);

  const onFormChange = (event) => {
    setContactDataForm({
      ...contactDataForm,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="col s12 center">
      <h5 className="first">1. Введите контактные данные</h5>
      <div className="row">
        <div className="input-field col s12 l6">
          <input
            id="first_name"
            type="text"
            placeholder="Имя"
            name="name"
            value={contactDataForm.name}
            onChange={onFormChange}
          />
        </div>
        <div className="input-field col s12 l6">
          <input
            id="last_name"
            type="text"
            placeholder="Фамилия"
            name="surname"
            value={contactDataForm.surname}
            onChange={onFormChange}
          />
        </div>
        <div className="input-field col s12 l6">
          <input
            id="phone_number"
            type="text"
            name="number"
            placeholder="Телефон"
            value={contactDataForm.number}
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
            value={contactDataForm.email}
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
            onChange={setAddress}
          />
        </div>
      </div>
    </div>
  );
};

export default EnterContactData;
