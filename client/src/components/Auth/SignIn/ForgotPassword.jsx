/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";

import { Link } from "react-router-dom";

const ForgotPassword = () => {
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
              <li>
                <Link to="/auth" className="orange-text">
                  Авторизация
                </Link>
              </li>
              <li className="black-text">Новый пароль</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col s12 m6 offset-m3" style={{ fontSize: 20 }}>
              <div className="card">
                <div className="card-content">
                  <span className="card-title">
                    <h4>Восстановление пароля</h4>
                  </span>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="email" type="email" className="validate" />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <a className="btn black waves-effect waves-light">
                        Восстановить пароль
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ForgotPassword;
