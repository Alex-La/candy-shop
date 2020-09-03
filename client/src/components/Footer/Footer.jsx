import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer grey darken-4">
      <div className="container">
        <div className="row">
          <div className="col s12 m12 l3">
            <h5 className="white-text">
              <b>Внимание 18+</b> <p>Сайт только для взрослых</p>
            </h5>
            <p className="grey-text text-lighten-1">
              Широкий ассортимент товаров от эротического белья до элитных
              секс-игрушек способен удовлетворить, во всех смыслах этого слова,
              каждого покупателя.
            </p>
          </div>

          <div className="col s12 m4 l3">
            <h5 className="white-text">Основные разделы</h5>
            <ul>
              <li>
                <Link
                  className="grey-text text-lighten-1 under-line"
                  to="/catalog/for-female"
                >
                  Девушкам
                </Link>
              </li>
              <li>
                <Link
                  className="grey-text text-lighten-1 under-line"
                  to="/catalog/for-male"
                >
                  Парням
                </Link>
              </li>
              <li>
                <Link
                  className="grey-text text-lighten-1 under-line"
                  to="/catalog/for-pairs"
                >
                  Для пар
                </Link>
              </li>
              <li>
                <Link
                  className="grey-text text-lighten-1 under-line"
                  to="/catalog/all-for-sex"
                >
                  Все для секса
                </Link>
              </li>
              <li>
                <Link
                  className="grey-text text-lighten-1 under-line"
                  to="/catalog/erotic-clothes"
                >
                  Эротическая одежда
                </Link>
              </li>
            </ul>
          </div>

          <div className="col s12 m4 l3">
            <h5 className="white-text">Информация</h5>
            <ul>
              <li>
                <Link
                  className="grey-text text-lighten-1 under-line"
                  to="/info"
                >
                  О компании
                </Link>
              </li>
              <li>
                <Link
                  className="grey-text text-lighten-1 under-line"
                  to="/info/contact"
                >
                  Контакты
                </Link>
              </li>
              <li>
                <Link
                  className="grey-text text-lighten-1 under-line"
                  to="/info/delivery"
                >
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link
                  className="grey-text text-lighten-1 under-line"
                  to="/info/privacy"
                >
                  Конфиденциальность
                </Link>
              </li>
              <li>
                <Link
                  className="grey-text text-lighten-1 under-line"
                  to="/info/refund"
                >
                  Гарантии и возврат
                </Link>
              </li>
            </ul>
          </div>

          <div className="col s12 m4 l3">
            <h5 className="white-text">Адрес</h5>
            <p>
              Телефон:{" "}
              <a
                href="tel:+79001259458"
                className="grey-text text-lighten-3 under-line"
              >
                +79001259458
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto: sexshop@candy-shop.su"
                className="grey-text text-lighten-3 under-line"
              >
                sexshop@candy-shop.su
              </a>
            </p>
            <p>
              <b>
                <Link to="/" className="grey-text text-lighten-3">
                  www.candy-shop.su
                </Link>
              </b>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
