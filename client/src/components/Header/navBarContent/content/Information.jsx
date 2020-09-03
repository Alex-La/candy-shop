import React from "react";

import { Link } from "react-router-dom";

const Information = () => {
  return (
    <div className="section">
      <div className="row">
        <div className="col s12">
          <div className="icon-block">
            <ul className="collection with-header">
              <Link to="/info/contacts" className="collection-item grey-text">
                Контакты
              </Link>
              <Link to="/info/delivery" className="collection-item grey-text">
                Доставка и оплата
              </Link>
              <Link to="/info/refund" className="collection-item grey-text">
                Гарантии и возврат
              </Link>
              <Link to="/info/privacy" className="collection-item grey-text">
                Конфиденциальность
              </Link>
              <Link to="/responses" className="collection-item grey-text">
                Отзывы о магазине
              </Link>
              <Link
                to="/catalog/manufacturer"
                className="collection-item grey-text"
              >
                Производители
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
