import React, { useState, useContext } from "react";

import isEmail from "isemail";

import { Link } from "react-router-dom";

import OrderContext from "../../../../context/OrderContext";
import Context from "../../../../context/Context";

import Confirmation from "./Confirmation";
import DeliveryMethod from "./DeliveryMethod";
import EnterContactData from "./EnterContactData";
import PaymentMethod from "./PaymentMethod";
import MakeOrderButton from "./MakeOrderButton";

const MakeForm = () => {
  const [policy, setPolicy] = useState(false);

  const { totalPrice } = useContext(Context);
  const data = useContext(OrderContext);

  const checkContactDataForm = (form, address) => {
    const { name, surname, number, email } = form;

    if (!isEmail.validate(email)) return "Неверный email!";

    if (
      name.length === 0 ||
      surname.length === 0 ||
      number.length === 0 ||
      email.length === 0 ||
      address.length === 0
    )
      return "Контактная информация заполнена не полностью!";
    return null;
  };

  const checkDeliveryMethod = (data) => {
    switch (data.deliveryMethodRadio) {
      case "pick_point":
        if (!data.pickPointData) return "Укажите пункт выдачи!";
        return null;

      case "sdek_terminals":
        if (!data.sdekTerminalData) return "Укажите пункт выдачи!";
        return null;

      case "sdek_courier":
        const { street, houseNumber } = data.sdekCourierForm;
        if (street.length === 0 || houseNumber.length === 0)
          return "Обязательные поля для 'Курьером СДЭК' не заполнены!";
        return null;

      case "russian_post":
        if (
          data.russianPostForm.postIndex.length === 0 ||
          data.russianPostForm.houseNumber.length === 0 ||
          data.russianPostForm.street.length === 0
        )
          return "Обязательные поля для 'Почта России' не заполнены!";
        return null;

      case "courier_moscow":
        if (
          data.courierMoscowForm.street.length === 0 ||
          data.courierMoscowForm.houseNumber.length === 0
        )
          return "Обязательные поля для 'Курьером по Москве' не заполнены!";
        return null;

      case "pickup":
        return null;
      default:
        return;
    }
  };

  return (
    <div className="col s12 m8 xl9">
      <EnterContactData />
      <DeliveryMethod />
      <PaymentMethod />
      <Confirmation />

      <div className="col s12 m10 xl6 right">
        <div className="card-panel">
          <p>
            <label>
              <input
                type="checkbox"
                onChange={(e) => setPolicy(e.target.checked)}
              />
              <span>
                Устанавливая здесь флажок, Вы даете{" "}
                <Link
                  to="/info/pdp"
                  target="_blank"
                  className="orange-text under-line"
                >
                  согласие на обработку своих персональных данных
                </Link>
              </span>
            </label>
          </p>

          <h4>
            Сумма{" "}
            {totalPrice
              ? totalPrice < 3000
                ? totalPrice + 300
                : totalPrice
              : 0}
            р.
          </h4>

          <MakeOrderButton
            policy={policy}
            data={data}
            checkContactDataForm={checkContactDataForm}
            checkDeliveryMethod={checkDeliveryMethod}
          />
        </div>
      </div>
    </div>
  );
};

export default MakeForm;
