/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useCallback, useRef } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Link, useHistory } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import M from "materialize-css";

import REVIEW_MUTATION from "../../graphql/mutations/review";

const NewResponse = () => {
  const selectRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    rate: "Отличный магазин",
    review: "",
  });
  const [policy, setPolicy] = useState(false);
  const [captcha, setCaptcha] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [validate, setValidate] = useState(false);

  const history = useHistory();

  const [review, { data, loading }] = useMutation(REVIEW_MUTATION);

  useEffect(() => {
    if (!loading && data) {
      M.toast({ html: data.review.successMessage });
      history.push("/responses");
    }
  }, [data, loading, history]);

  useEffect(() => {
    if (
      policy &&
      captcha &&
      validate &&
      form.name !== "" &&
      form.email !== "" &&
      form.review !== ""
    )
      setDisabled(false);
  }, [validate, form, policy, captcha]);

  useEffect(() => {
    if (selectRef.current) {
      M.FormSelect.init(selectRef.current);
    }
  }, []);

  const handleBlur = (event) => {
    if (event.target.className === "validate invalid") {
      setValidate(false);
    } else {
      setValidate(true);
    }
  };

  const handleFormChange = useCallback(
    (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    },
    [form]
  );

  const handleSubmit = async () => {
    try {
      await review({
        variables: {
          data: {
            name: form.name,
            email: form.email,
            rate: form.rate,
            review: form.review,
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
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
              <Link to="/responses" className="orange-text">
                Отзывы
              </Link>
            </li>
            <li className="black-text">Новый</li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col s12 m7" style={{ marginBottom: 50 }}>
            <h4>Оставьте свой отзыв</h4>

            <form className="col s12">
              <div className="row">
                <div className="input-field col s12 m6">
                  <i className="material-icons prefix">account_circle</i>
                  <input
                    name="name"
                    id="icon_prefix"
                    type="text"
                    className="validate"
                    value={form.name}
                    onChange={handleFormChange}
                  />
                  <label htmlFor="icon_prefix">Ваше Имя</label>
                </div>

                <div className="input-field col s12 m6">
                  <i className="material-icons prefix">email</i>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    className="validate"
                    value={form.email}
                    onChange={handleFormChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="email">Email</label>
                  <span
                    className="helper-text"
                    data-error="Неверный email"
                    id="email-span"
                  />
                </div>

                <div className="input-field col s12">
                  <i className="material-icons prefix">star</i>
                  <select
                    ref={selectRef}
                    name="rate"
                    defaultValue={form.rate}
                    onChange={handleFormChange}
                  >
                    <option value="Отличный магазин">Отличный магазин</option>
                    <option value="Хороший магазин">Хороший магазин</option>
                    <option value="Обычный магазин">Обычный магазин</option>
                    <option value="Плохой магазин">Плохой магазин</option>
                    <option value="Ужасный магазин">Ужасный магазин</option>
                  </select>
                  <label>Оценка магазина</label>
                </div>

                <div className="input-field col s12">
                  <i className="material-icons prefix">message</i>
                  <textarea
                    name="review"
                    id="icon_prefix2"
                    className="materialize-textarea"
                    value={form.review}
                    onChange={handleFormChange}
                  ></textarea>
                  <label htmlFor="icon_prefix2">Ваш отзыв</label>
                </div>
              </div>
            </form>

            <p>
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => setPolicy(e.target.checked)}
                />
                <span>
                  Устанавливая здесь флажок, Вы даете{" "}
                  <Link
                    to="/info/pdp"
                    target="_blank"
                    className="orange-text under-line"
                  >
                    согласие на обработку своих персональных данных
                  </Link>
                </span>
              </label>
            </p>

            <div style={{ marginTop: 20, marginBottom: 20 }}>
              <ReCAPTCHA
                sitekey="6LcWvLUZAAAAAJR6UvDipu6pg6h7Malp2Ln7o_jl"
                onChange={(v) =>
                  v == null ? setCaptcha(false) : setCaptcha(true)
                }
              />
            </div>

            <a
              className={`waves-effect waves-light btn-large black ${
                (disabled || loading) && "disabled"
              }`}
              onClick={handleSubmit}
            >
              Отправить
              {loading && (
                <div className="progress">
                  <div className="indeterminate"></div>
                </div>
              )}
            </a>
          </div>

          <div className="col s12 m4 offset-m1">
            <h4>Как писать отзыв</h4>
            <p>
              Подробно опишите свой опыт взаимодействия с магазином. Расскажите,
              как вас обслуживали при выборе, заказе, доставке, возврате товара.
              Сам товар оценивать не нужно — лучше оставить о нём отдельный
              отзыв. Мы не сможем опубликовать отзывы, которые содержат
              оскорбления, ненормативную лексику или написаны большими буквами.
            </p>
            <Link
              to="/responses"
              className="btn right grey waves-effect waves-light"
            >
              Отзывы покупателей
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewResponse;
