/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";

const Clothes = () => {
  const [expand, setExpand] = useState(false);

  const history = useHistory();

  const handleRedirect = (path) => {
    history.push(path);
  };

  return (
    <li>
      <a className="white-text">
        <b onClick={() => handleRedirect("/catalog/erotic-clothes")}>Одежда</b>
        <i
          className="collapsible-header material-icons white-text right"
          onClick={() => setExpand(!expand)}
        >
          {expand ? "expand_less" : "expand_more"}
        </i>
      </a>

      <div className="collapsible-body">
        <ul className="collapsible">
          <li>
            <Link to="/catalog/erotic-clothes/beauty-accessories">
              BEAUTY-аксессуары
            </Link>
          </li>
          <li>
            <Link to="/catalog/erotic-clothes/bikinis-and-sets">
              Бикини и комплекты
            </Link>
          </li>
          <li>
            <Link to="/catalog/erotic-clothes/bodysuits-and-jumpsuits">
              Боди и комбинезоны
            </Link>
          </li>
          <li>
            <Link to="/catalog/erotic-clothes/big-sizes">Большие размеры</Link>
          </li>
          <li>
            <Link to="/catalog/erotic-clothes/bustier-and-bra">
              Бюстье и бра
            </Link>
          </li>
          <li>
            <Link to="/catalog/erotic-clothes/game-costumes">
              Игровые костюмы
            </Link>
          </li>
          <li>
            <Link to="/catalog/erotic-clothes/corsets-and-grace">
              Корсеты и грации
            </Link>
          </li>
          <li>
            <Link to="/catalog/erotic-clothes/swimwear">Купальники</Link>
          </li>
          <li>
            <Link to="/catalog/erotic-clothes/mens-underwear">
              Мужское белье
            </Link>
          </li>
          <li>
            <Link to="/catalog/erotic-clothes/vinyl-clothing">
              Одежда из винила
            </Link>
          </li>
          <li>
            <Link to="/catalog/erotic-clothes/latex-clothing">
              Одежда из латекса
            </Link>
          </li>
          <li>
            <Link to="/catalog/erotic-clothes/gloves-and-accessories">
              Перчатки и аксессуары
            </Link>
          </li>
          <li>
            <Link to="/catalog/erotic-clothes/shirts-and-baby-dollar">
              Сорочки, беби-долл
            </Link>
          </li>
          <li>
            <Link to="/catalog/erotic-clothes/panties-shorts">
              Трусики и шорты
            </Link>
          </li>
          <li>
            <Link to="/catalog/erotic-clothes/robes-and-negligees">
              Халаты и пеньюары
            </Link>
          </li>
          <li>
            <Link to="/catalog/erotic-clothes/stockings-and-tights">
              Чулки и колготки
            </Link>
          </li>
          <li>
            <Link to="/catalog/erotic-clothes/erotic-shoes">
              Эротическая обувь
            </Link>
          </li>
          <li>
            <Link to="/catalog/erotic-clothes/erotic-dress">
              Эротическое платье
            </Link>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Clothes;
