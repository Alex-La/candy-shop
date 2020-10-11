import React from "react";

import { Link } from "react-router-dom";

const SuccessOrderRoute = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="card-panel white center">
              <h4>Спасибо за заказ!</h4>
              <span className="black-text">
                Номер заказа отправлен на ваш email. Вы можете отследить его{" "}
                <Link to="/carts/tracker" className="under-line">
                  по ссылке.
                </Link>
                <br />
                Также, вы можете отследить заказ в личном кабинете или, если вы
                не зарегистрированы, перейти по ссылке в корзине.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessOrderRoute;
