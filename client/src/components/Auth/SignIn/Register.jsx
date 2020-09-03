/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState, useCallback, useEffect } from "react";
import isEmail from "isemail";
import { Link, useHistory } from "react-router-dom";

import { useMutation } from "@apollo/react-hooks";
import REGISTRATION_MUTATION from "../../../graphql/mutations/registration";

import M from "materialize-css";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const history = useHistory();
  const [registrate, { data, loading }] = useMutation(REGISTRATION_MUTATION);

  useEffect(() => {
    if (data) {
      if (data.registration === "Пользователь создан") {
        M.toast({ html: data.registration });
        history.push("/auth");
      } else M.toast({ html: data.registration || "Неизвестная ошибка!" });
    }
  }, [data, history]);

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
    if (form.password !== form.passwordRepeat) {
      return M.toast({ html: "Пароли не совпадают!" });
    }

    try {
      await registrate({
        variables: {
          data: {
            email: form.email,
            password: form.passwordRepeat,
            name: form.name,
            surname: form.surname,
          },
        },
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
              <li className="black-text">Регистрация</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col s12" style={{ fontSize: 20 }}>
              <div className="card">
                <div className="card-content">
                  <span className="card-title">
                    <h4>Регистрация на сайте</h4>
                  </span>

                  <div className="row">
                    <div className="input-field col s12 m6">
                      <input
                        name="name"
                        onChange={handleFormChange}
                        id="first_name"
                        type="text"
                        className="validate"
                      />
                      <label htmlFor="first_name">Имя</label>
                    </div>
                    <div className="input-field col s12 m6">
                      <input
                        name="surname"
                        onChange={handleFormChange}
                        id="last_name"
                        type="text"
                        className="validate"
                      />
                      <label htmlFor="last_name">Фамилия</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12 m6">
                      <input
                        name="password"
                        onChange={handleFormChange}
                        id="password"
                        type="password"
                        className="validate"
                      />
                      <label htmlFor="password">Пароль</label>
                    </div>
                    <div className="input-field col s12 m6">
                      <input
                        name="email"
                        onChange={handleFormChange}
                        id="email"
                        type="email"
                        className="validate"
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12 m6">
                      <input
                        name="passwordRepeat"
                        onChange={handleFormChange}
                        id="password-repeat"
                        type="password"
                        className="validate"
                      />
                      <label htmlFor="password-repeat">Повторите пароль</label>
                    </div>
                    <div className="input-field col s12 m6">
                      <a
                        className={`btn-large black waves-effect waves-light right ${
                          loading && "disabled"
                        }`}
                        onClick={onSubmit}
                      >
                        Зарегистрироваться
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

export default Register;
