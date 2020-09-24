import React from "react";

import { Link } from "react-router-dom";

const ForFemale = () => {
  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            className="activator"
            src="/static/7b67d3930c621cc0c3ff9e309f858a2a.jpg"
            alt="/static/7b67d3930c621cc0c3ff9e309f858a2a.jpg"
          />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Для женщин<i className="material-icons right">more_vert</i>
          </span>
          <p>
            <Link to="/catalog/for-female" className="orange-text under-line">
              Все товары
            </Link>
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Для женщин<i className="material-icons right">close</i>
          </span>
          <ul className="collection">
            <Link
              to="/catalog/for-female/anal-toys"
              className="collection-item grey-text"
            >
              Анальные игрушки
            </Link>
            <Link
              to="/catalog/for-female/vibrators/big-vibrators"
              className="collection-item grey-text"
            >
              Большие вибраторы
            </Link>
            <Link
              to="/catalog/for-female/vibrators"
              className="collection-item grey-text"
            >
              Вибраторы
            </Link>
            <Link
              to="/catalog/for-female/sex-products-for-female/vaginal-balls"
              className="collection-item grey-text"
            >
              Вагинальные шарики
            </Link>
            <Link
              to="/catalog/for-female/falloimetators"
              className="collection-item grey-text"
            >
              Фаллоиметаторы
            </Link>
            <Link
              to="/catalog/for-female/vibrators/hi-tech"
              className="collection-item grey-text"
            >
              Hi-tech вибраторы
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ForFemale;
