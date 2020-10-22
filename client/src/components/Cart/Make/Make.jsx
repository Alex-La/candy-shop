import React, { Fragment, useContext, useState } from "react";

import { Link } from "react-router-dom";

import UserContext from "../../../context/UserContext";
import OrderContext from "../../../context/OrderContext";

import MakeForm from "./MakeForm/MakeForm";

const Make = () => {
  const [contactDataForm, setContactDataForm] = useState({
    name: "",
    surname: "",
    number: "",
    email: "",
  });
  const [address, setAddress] = useState({});

  const [deliveryMethodRadio, setDeliveryMethodRadio] = useState("pick_point");
  const [sdekTerminalData, setSdekTerminalData] = useState(null);
  const [pickPointData, setPickPointData] = useState(null);

  const [sdekCourierForm, setSdekCourierForm] = useState({
    street: "",
    flat: "",
    houseNumber: "",
    addInfo: "",
  });

  const [russianPostForm, setRussianPostForm] = useState({
    postIndex: "",
    houseNumber: "",
    street: "",
    flat: "",
  });

  const [courierMoscowForm, setCourierMoscowForm] = useState({
    street: "",
    flat: "",
    houseNumber: "",
    addInfo: "",
  });

  const [paymentMethodRadio, setPaymentMethodRadio] = useState("cash");

  const [comment, setComment] = useState("");

  const me = useContext(UserContext);

  return (
    <Fragment>
      <div className="section">
        <div className="row">
          <div className="col s12">
            <ul className="breadcrumb">
              <li>
                <Link to="/" className="orange-text">
                  Главная страница
                </Link>
              </li>
              <li>
                <Link to="/carts" className="orange-text">
                  Корзина
                </Link>
              </li>
              <li className="black-text">Оформить заказ</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col s12 m4 xl3 center">
              <h5>Анонимная доставка</h5>
              <div className="divider" />
              <p className="grey-text" style={{ marginBottom: 10 }}>
                100% непрозрачная упаковка, курьеры и сотрудники почты не видят
                содержимое заказа и название магазина
              </p>
              <h5>Покупали раньше?</h5>
              <div className="divider" />

              {me ? (
                <Fragment>
                  <p className="grey-text" style={{ marginTop: 40 }}>
                    Вы можете отследить заказы в личном кабинете в
                    соответствующем разделе
                  </p>
                  <Link
                    to="/auth"
                    className="waves-effect waves-lighten btn black"
                  >
                    Личный кабинет
                  </Link>
                </Fragment>
              ) : (
                <Fragment>
                  <p className="grey-text">Вы можете отследить заказ</p>
                  <Link
                    to="/carts/tracker"
                    className="waves-effect waves-darken btn white black-text"
                  >
                    Отследить
                  </Link>
                  <p className="grey-text" style={{ marginTop: 40 }}>
                    Если у вас есть аккаунт, вы можете отследить заказы в личном
                    кабинете
                  </p>
                  <Link
                    to="/auth"
                    className="waves-effect waves-lighten btn black"
                  >
                    Авторизоваться
                  </Link>
                </Fragment>
              )}

              <div className="divider" style={{ marginTop: 20 }} />
              <p style={{ marginBottom: 40 }}>
                Если у вас возникли вопросы при оформлении заказа, свяжитесь с
                нами по телефону:{" "}
                <a href="tel:+79185988291" className="under-line">
                  +79185988291
                </a>
              </p>
            </div>

            <OrderContext.Provider
              value={{
                contactDataForm,
                setContactDataForm,
                address,
                setAddress,
                deliveryMethodRadio,
                setDeliveryMethodRadio,
                sdekTerminalData,
                setSdekTerminalData,
                pickPointData,
                setPickPointData,
                sdekCourierForm,
                setSdekCourierForm,
                russianPostForm,
                setRussianPostForm,
                courierMoscowForm,
                setCourierMoscowForm,
                paymentMethodRadio,
                setPaymentMethodRadio,
                comment,
                setComment,
              }}
            >
              <MakeForm />
            </OrderContext.Provider>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Make;
