import React, { Fragment, useState } from "react";

const PaymentMethod = () => {
  const [radio, setRadio] = useState("card_payment");

  const onRadioChange = (e) => {
    setRadio(e.target.name);
  };

  return (
    <Fragment>
      <h5 className="first center">3. Способ оплаты</h5>

      <div className="col s12">
        <p>
          <label>
            <input
              name="card_payment"
              type="radio"
              checked={radio === "card_payment"}
              onChange={onRadioChange}
            />
            <span className="black-text">
              <b>Оплата картой (Visa, MasterCard...)</b>
            </span>
          </label>
        </p>
      </div>

      <div className="col s12">
        <p>
          <label>
            <input
              name="cash"
              type="radio"
              checked={radio === "cash"}
              onChange={onRadioChange}
            />
            <span className="black-text">
              <b>Наличными при получении</b>
            </span>
          </label>
        </p>
      </div>

      <div className="col s12">
        <p>
          <label>
            <input
              name="cod"
              type="radio"
              checked={radio === "cod"}
              onChange={onRadioChange}
            />
            <span className="black-text">
              <b>Наложенный платёж</b>
            </span>
          </label>
        </p>
      </div>
    </Fragment>
  );
};

export default PaymentMethod;
