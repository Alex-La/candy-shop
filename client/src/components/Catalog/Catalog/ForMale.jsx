import React from "react";

import { Link } from "react-router-dom";

const ForMale = () => {
  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            className="activator"
            src="/static/81d3cdb83244a19d6afed18bf8992851.jpg"
            alt="/static/81d3cdb83244a19d6afed18bf8992851.jpg"
          />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Для мужчин<i className="material-icons right">more_vert</i>
          </span>
          <p>
            <Link to="/catalog/for-male" className="orange-text under-line">
              Все товары
            </Link>
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Для мужчин<i className="material-icons right">close</i>
          </span>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ForMale;
