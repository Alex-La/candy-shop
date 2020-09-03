import React from "react";

import { Link } from "react-router-dom";

const Manufacturers = () => {
  return (
    <div className="section">
      <div className="row">
        <div className="col s12">
          <ul className="breadcrumb">
            <li>
              <Link to="/" className="orange-text" style={{ fontSize: 16 }}>
                Главная страница
              </Link>
            </li>
            <li>
              <Link
                to="/catalog"
                className="orange-text"
                style={{ fontSize: 16 }}
              >
                Каталог
              </Link>
            </li>
            <li className="black-text" style={{ fontSize: 16 }}>
              Производители
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Manufacturers;
