import React, { useState, useContext, useEffect } from "react";

import { Link } from "react-router-dom";

import Context from "../../../../context/Context";
import OrderContext from "../../../../context/OrderContext";

import M from "materialize-css";

import Confirmation from "./Confirmation";
import DeliveryMethod from "./DeliveryMethod";
import EnterContactData from "./EnterContactData";
import PaymentMethod from "./PaymentMethod";

const MakeForm = () => {
  const [policy, setPolicy] = useState(false);

  const { priceGlobal } = useContext(Context);
  const data = useContext(OrderContext);

  useEffect(() => {
    console.log(data);
  }, [data]);

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

          <h4>Сумма {priceGlobal}р.</h4>

          <button
            className={`waves-effect waves-light btn-large black right ${
              !policy && "disabled"
            }`}
          >
            Заказать
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakeForm;
