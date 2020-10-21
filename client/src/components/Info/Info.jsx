import React, { Fragment } from "react";

import { Link } from "react-router-dom";

const Info = () => {
  return (
    <Fragment>
      <div className="section">
        <div className="row">
          <div className="col s12">
            <ul className="breadcrumb">
              <li>
                <Link to="/" className="orange-text">
                  Главная страница
                </Link>
              </li>
              <li className="black-text">Информация</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col s12" style={{ fontSize: 20 }}>
              <h4>Кто мы?</h4>
              <p className="grey-text">
                Мы радуем своих покупателей секс игрушками, благодаря которым
                так легко воплотить в жизнь самые смелые фантазии и испытать
                незабываемые ощущения. Тысячи мужчин и женщин различного
                возраста и социального положения сделали выбор в пользу нашего
                сексшопа. Многие из них стали нашими постоянными покупателями,
                что не может не радовать.
              </p>
              <p>
                Широкий ассортимент товаров от эротического нашего магазина,
                способен удовлетворить, во всех смыслах этого слова, каждого
                покупателя. В нашем секс шопе представлено несколько тысяч
                позиций! Мало того, в продажу с завидной регулярностью поступают
                секс игрушки от ведущих производителей этой индустрии:
                вибраторы, фаллоимитаторы, страпоны, мастурбаторы, секс-куклы,
                насадки, смазки, анальные пробки и многое другое. Потеряться во
                всем многообразии интимных товаров не удастся – каталог
                систематизирован. Стоит отметить, что все позиции каталога
                имеются в секс шопе в наличии.
              </p>
            </div>
            <div className="col s12 m6" style={{ fontSize: 20 }}>
              <h4>Наши преимущества</h4>
              <p>БЕСПЛАТНАЯ ДОСТАВКА</p>
              <i className="grey-text">
                Бесплатная доставка по России при сумме заказа от 3000 р.
              </i>
              <p>МЕГАМАРКЕТ 14.000 ТОВАРОВ</p>
              <i className="grey-text">
                Представленные в нашем каталоге товары действительно есть в
                наличии и готовы к продаже!
              </i>
            </div>
            <div className="col s12 m6" style={{ fontSize: 20 }}>
              <ul className="collection with-header">
                <li className="collection-header">
                  <h4>Информация</h4>
                </li>
                <Link
                  to="/info/contacts"
                  className="collection-item orange-text"
                >
                  Контакты
                </Link>
                <Link
                  to="/info/delivery"
                  className="collection-item orange-text"
                >
                  Доставка и оплата
                </Link>
                <Link
                  to="/info/privacy"
                  className="collection-item orange-text"
                >
                  Конфиденциальность
                </Link>
                <Link to="/info/refund" className="collection-item orange-text">
                  Возврат и гарантии
                </Link>
                <Link to="/info/about" className="collection-item orange-text">
                  О нас
                </Link>
              </ul>
              <h5 style={{ marginTop: 50 }}>Контактная иформация</h5>
              <p>
                Телефон:{" "}
                <a href="tel:+79001259458" className=" under-line">
                  +79001259458
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto: sexshop@candy-shop.su" className="under-line">
                  sexshop@candy-shop.su
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Info;
