/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react";

import { Link, useHistory } from "react-router-dom";

import M from "materialize-css";

const AllForSex = () => {
  const collapsibleRef = useRef(null);

  const [expand, setExpand] = useState(false);

  const history = useHistory();

  const handleRedirect = (path) => {
    history.push(path);
  };

  useEffect(() => {
    if (collapsibleRef.current) {
      M.Collapsible.init(collapsibleRef.current);
    }
  }, []);

  return (
    <li>
      <a className="white-text">
        <b onClick={() => handleRedirect("/catalog/all-for-sex")}>
          Всё для секса
        </b>
        <i
          className="collapsible-header material-icons white-text right"
          onClick={() => setExpand(!expand)}
        >
          {expand ? "expand_less" : "expand_more"}
        </i>
      </a>

      <div className="collapsible-body">
        <ul className="collapsible" ref={collapsibleRef}>
          <li>
            <a>
              <b
                onClick={() =>
                  handleRedirect(
                    "/catalog/all-for-sex/cosmetics-with-pheromones"
                  )
                }
              >
                Косметика с феромонами
              </b>
              <i className="collapsible-header material-icons right">add</i>
            </a>

            <div className="collapsible-body">
              <ul className="collapsible">
                <li>
                  <Link to="/catalog/all-for-sex/cosmetics-with-pheromones/perfumes-and-lubricants-for-female">
                    Духи и смазки для женщин
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/all-for-sex/cosmetics-with-pheromones/perfumes-and-lubricants-for-male">
                    Духи и смазки для мужчин
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/all-for-sex/cosmetics-with-pheromones/pheromone-concentrates">
                    Концентраты феромонов
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/all-for-sex/cosmetics-with-pheromones/body-care-products-cosmetics">
                    Средства по уходу за телом
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <a>
              <b
                onClick={() =>
                  handleRedirect("/catalog/all-for-sex/pleasant-trifles")
                }
              >
                Приятные мелочи
              </b>
              <i className="collapsible-header material-icons right">add</i>
            </a>

            <div className="collapsible-body">
              <ul className="collapsible">
                <li>
                  <Link to="/catalog/all-for-sex/pleasant-trifles/vape">
                    Вейп
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/all-for-sex/pleasant-trifles/excitatory-agents">
                    Возбуждающие средства
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/all-for-sex/pleasant-trifles/darsonval">
                    Дарсонваль
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/all-for-sex/pleasant-trifles/christmas-decorations">
                    Ёлочные игрушки
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/all-for-sex/pleasant-trifles/intimate-hygiene">
                    Интимная гигиена
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/all-for-sex/pleasant-trifles/masks-antiseptics">
                    Маски, антисептики
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/all-for-sex/pleasant-trifles/condoms">
                    Презервативы
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/all-for-sex/pleasant-trifles/souvenirs">
                    Сувениры
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/all-for-sex/pleasant-trifles/batteries-and-accessories">
                    Элементы питания и акс.
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/all-for-sex/pleasant-trifles/erotic-literature">
                    Эротическая литература
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/all-for-sex/pleasant-trifles/erotic-games">
                    Эротические игры
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/all-for-sex/pleasant-trifles/erotic-sets">
                    Эротические наборы
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <a>
              <b
                onClick={() =>
                  handleRedirect(
                    "/catalog/all-for-sex/sex-furniture-and-swings"
                  )
                }
              >
                Секс-мебель и качели
              </b>
              <i className="collapsible-header material-icons right">add</i>
            </a>

            <div className="collapsible-body">
              <ul className="collapsible">
                <li>
                  <Link to="/catalog/all-for-sex/sex-furniture-and-swings/sex-swings">
                    Секс-качели
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/all-for-sex/sex-furniture-and-swings/sex-machines">
                    Секс-машины
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/all-for-sex/sex-furniture-and-swings/sex-furniture">
                    Секс-мебель
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <a>
              <b
                onClick={() =>
                  handleRedirect("/catalog/all-for-sex/lubricants")
                }
              >
                Смазки, лубриканты
              </b>
              <i className="collapsible-header material-icons right">add</i>
            </a>

            <div className="collapsible-body">
              <ul className="collapsible">
                <li>
                  <Link to="/catalog/all-for-sex/lubricants/anal-lubricants">
                    Анальные смазки
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/all-for-sex/lubricants/exciting">
                    Возбуждающие
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/all-for-sex/lubricants/massage-oils-and-candles">
                    Массажные масла и свечи
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/all-for-sex/lubricants/water-based">
                    На водной основе
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/all-for-sex/lubricants/silicone-based">
                    На силиконовой основе
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/all-for-sex/lubricants/prolongators">
                    Пролонгаторы
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default AllForSex;
