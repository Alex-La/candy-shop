import React, { Fragment, useContext } from "react";

import OrderContext from "../../../../context/OrderContext";

const PaymentMethod = () => {
  const { paymentMethodRadio, setPaymentMethodRadio } = useContext(
    OrderContext
  );

  const onRadioChange = (e) => {
    setPaymentMethodRadio(e.target.name);
  };

  return (
    <Fragment>
      <h5 className="first center">3. Способ оплаты</h5>

      {/* <div className="col s12">
        <p>
          <label>
            <input
              name="card_payment"
              type="radio"
              checked={paymentMethodRadio === "card_payment"}
              onChange={onRadioChange}
            />
            <span className="black-text">
              <b>Оплата QR-кодом (Для клиентов Cбербанка и Тинькофф)</b>
            </span>
          </label>
        </p>
      </div> */}

      <div className="col s12">
        <p>
          <label>
            <input
              name="cash"
              type="radio"
              checked={paymentMethodRadio === "cash"}
              onChange={onRadioChange}
            />
            <span className="black-text">
              <b>При получении</b>
            </span>
          </label>
        </p>
      </div>
    </Fragment>
  );
};

export default PaymentMethod;
