import React from "react";

import { Link } from "react-router-dom";

const Clothes = () => {
  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            className="activator"
            src="/static/9bfae396932fcd932dbf206386e5ec08.jpg"
            alt="/static/9bfae396932fcd932dbf206386e5ec08.jpg"
          />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Одежда<i className="material-icons right">more_vert</i>
          </span>
          <p>
            <Link
              to="/catalog/erotic-clothes"
              className="orange-text under-line"
            >
              Все товары
            </Link>
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Одежда<i className="material-icons right">close</i>
          </span>
          <ul className="collection">
            <Link
              to="/catalog/erotic-clothes/beauty-accessories"
              className="collection-item grey-text"
            >
              BEAUTY-аксессуары
            </Link>

            <Link
              to="/catalog/erotic-clothes/bikinis-and-sets"
              className="collection-item grey-text"
            >
              Бикини и комплекты
            </Link>

            <Link
              to="/catalog/erotic-clothes/bodysuits-and-jumpsuits"
              className="collection-item grey-text"
            >
              Боди и комбинезоны
            </Link>
            <Link
              to="/catalog/erotic-clothes/bustier-and-bra"
              className="collection-item grey-text"
            >
              Бюстье и бра
            </Link>
            <Link
              to="/catalog/erotic-clothes/game-costumes"
              className="collection-item grey-text"
            >
              Игровые костюмы
            </Link>
            <Link
              to="/catalog/erotic-clothes/corsets-and-grace"
              className="collection-item grey-text"
            >
              Корсеты и грации
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Clothes;
