import React from "react";

import { Link } from "react-router-dom";

const ForPairs = () => {
  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            className="activator"
            src="/static/afd403a607c14ccfc09b8eac28e51119.jpg"
            alt="/static/afd403a607c14ccfc09b8eac28e51119.jpg"
          />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Для двоих<i className="material-icons right">more_vert</i>
          </span>
          <p>
            <Link to="/catalog/for-pairs" className="orange-text under-line">
              Все товары
            </Link>
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Для двоих<i className="material-icons right">close</i>
          </span>
          <ul className="collection">
            <Link
              to="/catalog/for-pairs/bdsm-products/intimate-jewelry"
              className="collection-item grey-text"
            >
              Интимные украшения
            </Link>
            <Link
              to="/catalog/for-pairs/bdsm-products/whips"
              className="collection-item grey-text"
            >
              Кнуты, плётки, хлысты
            </Link>
            <Link
              to="/catalog/for-pairs/bdsm-products/masks-gags"
              className="collection-item grey-text"
            >
              Маски, кляпы
            </Link>
            <Link
              to="/catalog/for-pairs/bdsm-products/medical-fetish"
              className="collection-item grey-text"
            >
              Медицинский фетиш
            </Link>
            <Link
              to="/catalog/for-pairs/bdsm-products/handcuffs-collars"
              className="collection-item grey-text"
            >
              Наручники, ошейники
            </Link>
            <Link
              to="/catalog/for-pairs/bdsm-products/electrostimulators"
              className="collection-item grey-text"
            >
              Электростимуляторы
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ForPairs;
