import React from "react";

import { Link } from "react-router-dom";

const Make = () => {
  return (
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
  );
};

export default Make;
