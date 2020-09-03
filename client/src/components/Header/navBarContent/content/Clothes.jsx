import React from "react";

import { Link } from "react-router-dom";

const Clothes = () => {
  return (
    <div className="section">
      <div className="row">
        <div className="col s12">
          <div className="icon-block">
            <ul className="collection ">
              <Link
                to="/catalog/erotic-clothes/beauty-accessories"
                className="collection-item grey-text"
              >
                Beauty-аксессуары
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
                to="/catalog/erotic-clothes/big-sizes"
                className="collection-item grey-text"
              >
                БОЛЬШИЕ размеры
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
              <Link
                to="/catalog/erotic-clothes/swimwear"
                className="collection-item grey-text"
              >
                Купальники
              </Link>
              <Link
                to="/catalog/erotic-clothes/mens-underwear"
                className="collection-item grey-text"
              >
                Мужское белье
              </Link>
              <Link
                to="/catalog/erotic-clothes/vinyl-clothing"
                className="collection-item grey-text"
              >
                Одежда из винила
              </Link>
              <Link
                to="/catalog/erotic-clothes/latex-clothing"
                className="collection-item grey-text"
              >
                Одежда из латекса
              </Link>
              <Link
                to="/catalog/erotic-clothes/gloves-and-accessories"
                className="collection-item grey-text"
              >
                Перчатки и аксессуары
              </Link>
              <Link
                to="/catalog/erotic-clothes/shirts-and-baby-dollar"
                className="collection-item grey-text"
              >
                Сорочки, беби-долл
              </Link>
              <Link
                to="/catalog/erotic-clothes/panties-shorts"
                className="collection-item grey-text"
              >
                Трусики и шорты
              </Link>
              <Link
                to="/catalog/erotic-clothes/robes-and-negligees"
                className="collection-item grey-text"
              >
                Халаты и пеньюары
              </Link>
              <Link
                to="/catalog/erotic-clothes/stockings-and-tights"
                className="collection-item grey-text"
              >
                Чулки и колготки
              </Link>
              <Link
                to="/catalog/erotic-clothes/erotic-shoes"
                className="collection-item grey-text"
              >
                Эротическая обувь
              </Link>
              <Link
                to="/catalog/erotic-clothes/erotic-dress"
                className="collection-item grey-text"
              >
                Эротическое платье
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clothes;
