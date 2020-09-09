import React, {
  Fragment,
  useEffect,
  useRef,
  useContext,
  useState,
} from "react";

import { useMutation } from "@apollo/react-hooks";
import UPDATE_ME_MUTATION from "../../../graphql/mutations/updateMe";

import UserContext from "../../../context/UserContext";

import { Link } from "react-router-dom";

import M from "materialize-css";

const PersonalData = () => {
  const selectRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    sex: "",
    password: "",
    passwordRepeat: "",
  });
  const [formHasChange, setFormHasChange] = useState(false);

  const user = useContext(UserContext);

  const [update, { data, loading }] = useMutation(UPDATE_ME_MUTATION);

  useEffect(() => {
    if (data) {
      M.toast({ html: data.updateMe });
    }
  }, [data]);

  useEffect(() => {
    const { name, surname, email, sex, password, passwordRepeat } = form;
    if (
      name.length !== 0 ||
      email.length !== 0 ||
      surname.length !== 0 ||
      sex.length !== 0 ||
      password.length !== 0 ||
      passwordRepeat.length !== 0
    ) {
      setFormHasChange(true);
    } else setFormHasChange(false);
  }, [form]);

  useEffect(() => {
    if (selectRef.current) {
      M.FormSelect.init(selectRef.current);
    }
  }, []);

  const onLogOut = () => {
    localStorage.removeItem("token");
    document.location.reload();
  };

  const handleForChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (form.passwordRepeat !== form.password)
      return M.toast({ html: "Пароли не совпадают!" });
    const { name, surname, email, sex, password } = form;
    update({ variables: { data: { name, surname, email, password, sex } } });
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
              <li>
                <Link to="/personal" className="orange-text">
                  Личный кабинет
                </Link>
              </li>
              <li className="black-text">Персональные данные</li>
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
                  <Link className="collection-item">Заказы</Link>
                </li>
                <li className="collection-item">
                  <Link to="/carts" className="collection-item">
                    Моя корзина
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col s12 l7">
              <h4>Профиль пользователя</h4>
              <p className="grey-text">
                В личном кабинете Вы можете проверить текущее состояние корзины,
                ход выполнения Ваших заказов, просмотреть или изменить личную
                информацию, а также подписаться на новости и другие
                информационные рассылки.
              </p>
            </div>

            <div className="col s12">
              <h5>Личные данные</h5>

              <div className="row">
                <div className="input-field col s12 m6">
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleForChange}
                    type="text"
                    className="validate"
                  />
                  <label htmlFor="name">{user.name}</label>
                </div>
                <div className="input-field col s12 m6">
                  <input
                    id="surname"
                    name="surname"
                    value={form.surname}
                    onChange={handleForChange}
                    type="text"
                    className="validate"
                  />
                  <label htmlFor="surname">{user.surname}</label>
                </div>
                <div className="input-field col s12 m6">
                  <input
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleForChange}
                    type="text"
                    className="validate"
                  />
                  <label htmlFor="email">{user.email}</label>
                </div>
                <div className="input-field col s12 m6">
                  <select
                    name="sex"
                    onChange={handleForChange}
                    defaultValue={user.sex === null ? "Неизвестно" : user.sex}
                    ref={selectRef}
                  >
                    <option value="Неизвестно">Неизвестно</option>
                    <option value="Женский">Женский</option>
                    <option value="Мужской">Мужской</option>
                  </select>
                  <label>Пол</label>
                </div>
                <div className="input-field col s12 m6">
                  <input
                    name="password"
                    value={form.password}
                    onChange={handleForChange}
                    id="password"
                    type="password"
                    className="validate"
                  />
                  <label htmlFor="password">Новый пароль</label>
                </div>
                <div className="input-field col s12 m6">
                  <input
                    name="passwordRepeat"
                    value={form.passwordRepeat}
                    onChange={handleForChange}
                    id="password-repeat"
                    type="password"
                    className="validate"
                  />
                  <label htmlFor="password-repeat">
                    Повторите новый пароль
                  </label>
                </div>
              </div>

              <div className="col s12">
                <button
                  onClick={onSubmit}
                  className={`waves-effect waves-light btn black right ${
                    (!formHasChange || loading) && "disabled"
                  }`}
                >
                  Обновить информацию
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PersonalData;
