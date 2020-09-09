import React from "react";

import { Link } from "react-router-dom";

const Cart = () => {
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
            <li className="black-text">Корзина</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
