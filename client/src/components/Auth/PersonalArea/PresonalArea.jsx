import React, { Fragment } from "react";

import { Link } from "react-router-dom";

const PersonalArea = () => {
  const onLogOut = () => {
    localStorage.removeItem("token");
    document.location.reload();
  };

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
              <li className="black-text">Личный кабинет</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col s12 l5 xl4">
              <ul className="collection with-header">
                <li className="collection-header">
                  <div>
                    <span style={{ fontSize: 20 }}>Личный кабинет</span>
                    <button
                      onClick={onLogOut}
                      className="right orange-text btn-flat"
                    >
                      <i className="large material-icons">exit_to_app</i>
                    </button>
                  </div>
                </li>
                <li className="collection-item">
                  <Link to="/personal/profile" className="collection-item">
                    Персональные данные
                  </Link>
                </li>
                <li className="collection-item">
                  <Link to="/personal/orders" className="collection-item">Заказы</Link>
                </li>
                <li className="collection-item">
                  <Link to="/carts" className="collection-item">
                    Моя корзина
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col s12 l7 xl8">
              <h4>Персональный раздел</h4>
              <p className="grey-text">
                В личном кабинете Вы можете проверить текущее состояние корзины,
                ход выполнения Ваших заказов, просмотреть или изменить личную
                информацию, а также подписаться на новости и другие
                информационные рассылки.
              </p>
            </div>
            <div className="col s12 m6 xl4">
              <h5>Личная информация</h5>
              <div className="collection">
                <Link
                  to="/personal/profile"
                  className="collection-item orange-text"
                >
                  Изменить регистрационные данные
                </Link>
              </div>
            </div>
            <div className="col s12 m6 xl4">
              <h5>Заказы</h5>
              <div className="collection">
                <Link to="/personal/orders" className="collection-item orange-text">
                  Ознакомиться с состоянием заказов
                </Link>
                <Link to="/carts" className="collection-item orange-text">
                  Посмотреть содержимое корзины
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PersonalArea;
