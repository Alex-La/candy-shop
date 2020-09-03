import React, { Fragment, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import M from "materialize-css";

const Contacts = () => {
  const collapsibleRef = useRef(null);

  useEffect(() => {
    if (collapsibleRef.current) {
      M.Collapsible.init(collapsibleRef.current);
    }
  }, []);

  return (
    <Fragment>
      <div className="section">
        <div className="row">
          <div className="col s12">
            <ul className="breadcrumb">
              <li>
                <Link to="/" className="orange-text" style={{ fontSize: 17 }}>
                  Главная страница
                </Link>
              </li>
              <li>
                <Link
                  to="/info"
                  className="orange-text"
                  style={{ fontSize: 17 }}
                >
                  Информация
                </Link>
              </li>
              <li className="black-text" style={{ fontSize: 17 }}>
                Контакты
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col s12 m4" style={{ fontSize: 20 }}>
              <h4 style={{ marginBottom: 50 }}>Контактная информация</h4>
              <i className="grey-text">
                Искренне рады видеть вас в интим магазине "CANDY SHOP"
              </i>
              <p>
                Телефон:{" "}
                <a href="tel:+79001259458" className=" under-line">
                  +79001259458
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto: sexshop@candy-shop.su" className=" under-line">
                  sexshop@candy-shop.su
                </a>
              </p>
            </div>
            <div className="col s12 m4" style={{ fontSize: 20 }}>
              <h4 style={{ marginBottom: 50 }}>Наши преимущества</h4>
              <p>БЕСПЛАТНАЯ ДОСТАВКА</p>
              <i className="grey-text">
                Бесплатная доставка по России при сумме заказа от 3000 р.
              </i>
              <p>ГАРАНТИЯ НИЗКОЙ ЦЕНЫ</p>
              <i className="grey-text">
                Постоянные распродажи со скидками до 70% + необыкновенные акции
              </i>
              <p>МЕГАМАРКЕТ 14.000 ТОВАРОВ</p>
              <i className="grey-text">
                Представленные в нашем каталоге товары действительно есть в
                наличии и готовы к продаже!
              </i>
            </div>
            <div className="col s12 m4" style={{ fontSize: 20 }}>
              <h4 style={{ marginBottom: 50 }}>Честные отзывы</h4>

              <ul className="collapsible" ref={collapsibleRef}>
                <li>
                  <div className="collapsible-header">
                    Вежливые и общительные сотрудники. Быстрая доставка...
                  </div>
                  <div className="collapsible-body">
                    <span className="grey-text" style={{ fontSize: 15 }}>
                      Первая моя покупка в подобном магазине увенчалась успехом.
                      Магазин выбирал по отзывам. Остановился на StripMag.ru. И
                      не пожалел. Были трудности с выбором. Девушка оператор все
                      доходчиво обьяснила. Все по полочкам расставила. Заказ
                      129337 ехал неделю до Курганской обл. Скидки, баллы, все
                      это только прибавляет плюсы к работе этого замечательного
                      магазина. Товары еще не проверяли т.к в командировке. Но
                      визуально супруга все оценила на 5+. Вообще все
                      понравилось, будем заказывать только здесь!
                    </span>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">
                    Ассортимент, обслуживание, скорость доставки и цены.
                  </div>
                  <div className="collapsible-body">
                    <span className="grey-text" style={{ fontSize: 15 }}>
                      Решили с женой немного пошалить! Долго искали сайт и нам
                      попался ваш сайт! Заглянули и обомлели! Огромный выбор,
                      низкие цены, а самое главное бонусы при покупке и
                      невероятные скидки! Оформили заказ сразу на 7товаров!В
                      течение часа позвонила девушка очень вежливая с приятным
                      голосом ;)и сказала что товар будет доставлен в течение
                      дня! Так и получилось! Товар доставил курьер, все
                      запечатано и очень скрыто, словно привезли книги :)
                      Игрушки испробовали в туже ночь! Все просто супер! Теперь
                      прописались с женой на этом сайте! Спасибо сотрудникам
                      магазина за их работу!!!
                    </span>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">
                    Широкий диапозон цен, ассортимента.
                  </div>
                  <div className="collapsible-body">
                    <span className="grey-text" style={{ fontSize: 15 }}>
                      Считаю немаловажным,что в эпоху кризисов есть
                      интернет-маг.с демократичными ценами и адекватным
                      сервисом.Приятно удивил ненавязчиво-дружеский тон
                      интернет-рассылки.Приобретал Axxx Beads. Рельефная
                      штука.Со слов подруги-такие же впечатления от неё...
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contacts;
