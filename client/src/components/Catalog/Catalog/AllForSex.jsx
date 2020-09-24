import React from "react";

import { Link } from "react-router-dom";

const AllForSex = () => {
  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            className="activator"
            src="/static/9021cb4738f75b4eae4656657c0684e4.jpg"
            alt="/static/9021cb4738f75b4eae4656657c0684e4.jpg"
          />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Принадлежности<i className="material-icons right">more_vert</i>
          </span>
          <p>
            <Link to="/catalog/all-for-sex" className="orange-text under-line">
              Все товары
            </Link>
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Женские игрушки<i className="material-icons right">close</i>
          </span>
          <ul className="collection">
            <Link
              to="/catalog/all-for-sex/cosmetics-with-pheromones/perfumes-and-lubricants-for-female"
              className="collection-item grey-text"
            >
              Духи и смазки для женщин
            </Link>
            <Link
              to="/catalog/all-for-sex/cosmetics-with-pheromones/perfumes-and-lubricants-for-male"
              className="collection-item grey-text"
            >
              Духи и смазки для мужчин
            </Link>
            <Link
              to="/catalog/all-for-sex/cosmetics-with-pheromones/pheromone-concentrates"
              className="collection-item grey-text"
            >
              Концентраты феромонов
            </Link>
            <Link
              to="/catalog/all-for-sex/cosmetics-with-pheromones/body-care-products-cosmetics"
              className="collection-item grey-text"
            >
              Средства по уходу за телом
            </Link>
            <Link
              to="/catalog/all-for-sex/pleasant-trifles/excitatory-agents"
              className="collection-item grey-text"
            >
              Возбуждающие средства
            </Link>
            <Link
              to="/catalog/all-for-sex/pleasant-trifles/intimate-hygiene"
              className="collection-item grey-text"
            >
              Интимная гигиена
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllForSex;
