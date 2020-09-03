/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState, useCallback, useEffect } from "react";

import isEmail from "isemail";

import { useMutation } from "@apollo/react-hooks";
import LOGIN_MUTATION from "../../../graphql/mutations/login";
import ME_QUERY from "../../../graphql/queries/me";

import { Link } from "react-router-dom";
import M from "materialize-css";

const Auth = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const [login, { data, loading }] = useMutation(LOGIN_MUTATION, {
    update: (cache, { data }) => {
      if (!data.login) return;
      const { token, user } = data.login;
      localStorage.setItem("token", token);
      cache.writeQuery({
        query: ME_QUERY,
        data: { me: user },
      });
    },
  });

  useEffect(() => {
    if (data) {
      if (data.login.message) {
        M.toast({ html: data.login.message });
      } else document.location.reload();
    }
  }, [data]);

  const handleFormChange = useCallback(
    (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    },
    [form]
  );

  const onSubmit = async () => {
    if (!isEmail.validate(form.email)) {
      return M.toast({ html: "Неверный Email!" });
    }
    if (form.password < 6) {
      return M.toast({ html: "Пароль слишком короткий!" });
    }

    try {
      await login({
        variables: { data: { email: form.email, password: form.password } },
      });
    } catch (e) {
      console.log(e);
    }
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
              <li className="black-text">Авторизация</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col s12 m6" style={{ fontSize: 20 }}>
              <div className="card">
                <div className="card-content">
                  <span className="card-title">
                    <h4>Авторизация</h4>
                  </span>
                  <i className="grey-text">
                    Если у вас есть учётная запись на нашем сайте, пожалуйста,
                    авторизируйтесь.
                  </i>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        name="email"
                        value={form.email}
                        id="email"
                        type="email"
                        className="validate"
                        onChange={handleFormChange}
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        name="password"
                        value={form.password}
                        id="password"
                        type="password"
                        className="validate"
                        onChange={handleFormChange}
                      />
                      <label htmlFor="password">Пароль</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 m6">
                      <a
                        className={`btn-large black waves-effect waves-light ${
                          loading && "disabled"
                        }`}
                        onClick={onSubmit}
                      >
                        Войти
                      </a>
                    </div>
                    <div className="col s12 m6" style={{ marginTop: 10 }}>
                      <Link to="/auth/forgot-password">Забыли пароль?</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m6" style={{ fontSize: 20, marginTop: 30 }}>
              <h4>Регистрация</h4>
              <i className="grey-text">
                Создав учётную запись на нашем сайте, вы будете тратить меньше
                времени на оформление заказа, сможете хранить несколько адресов
                доставки, отслеживать состояние заказов, а также многое другое.
              </i>
              <div style={{ marginTop: 20 }}>
                <Link
                  to="/register"
                  className="btn-large orange right waves-effect waves-light"
                >
                  Зарегистрироваться
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Auth;
