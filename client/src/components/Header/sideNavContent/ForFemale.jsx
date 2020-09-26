/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect } from "react";

import { Link, useHistory } from "react-router-dom";

import M from "materialize-css";

const ForFemale = () => {
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
        <b onClick={() => handleRedirect("/catalog/for-female")}>Для женщин</b>
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
                  handleRedirect("/catalog/for-female/sex-products-for-female")
                }
              >
                Секс-товары для женщин
              </b>
              <i className="collapsible-header material-icons right">add</i>
            </a>

            <div className="collapsible-body">
              <ul className="collapsible">
                <li>
                  <Link to="/catalog/for-female/sex-products-for-female/vibrating-egg">
                    Виброяйцо
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/sex-products-for-female/breast-pumps-and-stimulants">
                    Для груди
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/sex-products-for-female/clitoral-stimulants">
                    Клиторальные стимулят.
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/sex-products-for-female/clitoris-pumps">
                    Помпы для клитора
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/sex-products-for-female/vaginal-balls">
                    Вагинальные шарики
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <a>
              <b
                onClick={() => handleRedirect("/catalog/for-female/anal-toys")}
              >
                Анальные игрушки
              </b>
              <i className="collapsible-header material-icons right">add</i>
            </a>

            <div className="collapsible-body">
              <ul className="collapsible">
                <li>
                  <Link to="/catalog/for-female/anal-toys/fisting">
                    Фистинг
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/anal-toys/glass-and-metal">
                    Стеклянные и металлич.
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/anal-toys/anal-dildos">
                    Анальные фаллоиметат.
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/anal-toys/anal-plugs">
                    Анальные пробки
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/anal-toys/anal-stimulators-without-vibration">
                    Анальные стимулятры
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/anal-toys/anal-vibrators">
                    Анальные вибраторы
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/anal-toys/anal-beads-and-chains">
                    Анальные шарики, цепочки
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/anal-toys/inflatable-expanders">
                    Надувные расширители
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
                  handleRedirect("/catalog/for-female/falloimetators")
                }
              >
                Фаллоимитаторы
              </b>
              <i className="collapsible-header material-icons right">add</i>
            </a>

            <div className="collapsible-body">
              <ul className="collapsible">
                <li>
                  <Link to="/catalog/for-female/falloimetators/vaginal-plugs">
                    Вагинальные пробки
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/falloimetators/glass-phalluses">
                    Стеклянные фаллосы
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/falloimetators/g-spot-stimulants-phalluses">
                    Стимуляторы точки G
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/falloimetators/anal-vaginal-phalluses">
                    Анально-вагинальные
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/falloimetators/classic-dildos">
                    Классические дилдо
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/falloimetators/giants">
                    Гиганты
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/falloimetators/realistic-phalluses">
                    Реалистичные
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/falloimetators/bilateral-phalluses">
                    Двусторонние
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <a>
              <b
                onClick={() => handleRedirect("/catalog/for-female/vibrators")}
              >
                Вибраторы
              </b>
              <i className="collapsible-header material-icons right">add</i>
            </a>

            <div className="collapsible-body">
              <ul className="collapsible">
                <li>
                  <Link to="/catalog/for-female/vibrators/bilateral-vibrators">
                    Двусторонние
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/vibrators/with-radio-control">
                    С радиоуправлением
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/vibrators/for-two">
                    Для двоих
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/vibrators/waterproof">
                    Водонепроницаемые
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/vibrators/hi-tech">
                    Hi-tech
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/vibrators/big-vibrators">
                    Большие вибраторы
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/vibrators/vibration-stimulators-and-vibration-bullets">
                    Вибростимуляторы, пульки
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/vibrators/rotating">
                    Врощающиеся
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/vibrators/classic">
                    Классические
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/vibrators/vibration-kits">
                    Вибронаборы
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/vibrators/g-spot-stimulants-vibrators">
                    Стимуляторы G-точки
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/vibrators/anal-vaginal-vibrators">
                    Анально-вагинальные
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/vibrators/with-clitoris-stimulator">
                    Со стимулятором клитора
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/vibrators/computer-type">
                    Компьютерного типа
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-female/vibrators/realistic-vibrators">
                    Реалистики
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

export default ForFemale;
