import React from "react";

import { Link } from "react-router-dom";

const ForMale = () => {
  return (
    <div className="section">
      <div className="row">
        <div className="col s12">
          <div className="icon-block">
            <ul className="collection">
              <Link
                to="/catalog/for-male/vaginas"
                className="collection-item grey-text"
              >
                Вагины
              </Link>
              <Link
                to="/catalog/for-male/vacuum-pumps"
                className="collection-item grey-text"
              >
                Вакуумные помпы
              </Link>
              <Link
                to="/catalog/for-male/prostate-massagers"
                className="collection-item grey-text"
              >
                Массажеры простаты
              </Link>
              <Link
                to="/catalog/for-male/masturbators"
                className="collection-item grey-text"
              >
                Мастурбаторы
              </Link>
              <Link
                to="/catalog/for-male/nozzles-and-extensions"
                className="collection-item grey-text"
              >
                Насадки и удлинители
              </Link>
              <Link
                to="/catalog/for-male/sex-dolls"
                className="collection-item grey-text"
              >
                Секс куклы
              </Link>
              <Link
                to="/catalog/for-male/cock-rings"
                className="collection-item grey-text"
              >
                Эрекционные кольца
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForMale;
