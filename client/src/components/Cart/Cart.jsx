import React, { Fragment, useContext, useState, useEffect } from "react";

import Context from "../../context/Context";

import { Link } from "react-router-dom";

import useRemoveFromCart from "../../hooks/useRemoveFromCart";

import M from "materialize-css";

import { useLazyQuery } from "@apollo/react-hooks";
import GET_PROMO_CODE_QUERY from "../../graphql/queries/getPromoCode";
import InputNumber from "./InputNumber";

const Cart = () => {
  const { productsInCart, setCurrentVendorCode } = useContext(Context);
  const [price, setPrice] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const [percent, setPercent] = useState(null);

  const { removeFromCart } = useRemoveFromCart();

  const [validateCode, { data, loading }] = useLazyQuery(GET_PROMO_CODE_QUERY);

  useEffect(() => {
    setPercent(sessionStorage.getItem("promo_code"));
  }, []);

  useEffect(() => {
    if (data) {
      if (data.getPromoCode) {
        setPercent(data.getPromoCode);
        sessionStorage.setItem("promo_code", data.getPromoCode);
      } else {
        M.toast({ html: "Неверный промокод!" });
      }
    }
  }, [data]);

  useEffect(() => {
    let price = 0;
    for (let i in productsInCart) {
      const priceToInt = productsInCart[i].price.slice(
        0,
        productsInCart[i].price.length - 3
      );
      price += parseInt(priceToInt, 10);
    }
    if (percent) setPrice(() => Math.floor((price * (100 - percent)) / 100));
    else setPrice(price);
  }, [productsInCart, data, percent]);

  const onRemove = (vendor_code) => {
    removeFromCart(vendor_code);
  };

  const onPromoCodeChange = (event) => {
    setPromoCode(event.target.value);
  };

  const usePromoCode = () => {
    validateCode({ variables: { name: promoCode } });
    setPromoCode("");
  };

  const onOrder = () => {
    sessionStorage.removeItem("promo_code");
    localStorage.setItem("price", price);
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
              <li className="black-text">Корзина</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            {productsInCart === null || productsInCart.length === 0 ? (
              <div className="col s12 center">
                <div className="card-panel">
                  <h6 className="orange-text">
                    В вашей корзине пусто! Самое время{" "}
                    <Link to="/catalog" className="under-line">
                      перейти к покупкам
                    </Link>
                  </h6>
                </div>
              </div>
            ) : (
              <Fragment>
                <div className="col m12 xl8">
                  <div className="row">
                    <div className="col">
                      <h4>Ваш заказ</h4>
                    </div>
                    <div className="col" style={{ marginTop: 23 }}>
                      <div
                        className="waves-effect waves-dark btn-small white black-text"
                        onClick={() => window.location.reload()}
                      >
                        Обновить
                      </div>
                    </div>
                  </div>
                  {productsInCart &&
                    productsInCart.map((prod, index) => (
                      <div
                        key={index}
                        className={`card ${
                          window.innerWidth >= 768 && "horizontal"
                        }`}
                      >
                        <div className="card-image" style={{ width: 200 }}>
                          <img src={prod.image_small} alt={prod.image_small} />
                        </div>
                        <div className="card-stacked">
                          <div className="card-content">
                            <p>{prod.name}</p>
                            <i className="grey-text">
                              {[prod.color, prod.size].join(" / ")}
                            </i>
                            <h6 className="orange-text">{prod.price}</h6>
                            <div className="row">
                              <div className="col" style={{ marginTop: 8 }}>
                                Количество:{" "}
                              </div>
                              <InputNumber />
                            </div>
                          </div>
                          <div className="card-action">
                            <a
                              className="waves-effect waves-dark btn white black-text modal-trigger"
                              href="#ProductModal"
                              onClick={() =>
                                setCurrentVendorCode(parseInt(prod.vendor_code))
                              }
                            >
                              <i className="material-icons">open_in_new</i>
                            </a>
                            <button
                              className="btn-flat right"
                              onClick={() => onRemove(prod.vendor_code)}
                            >
                              <i className="material-icons">close</i>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="col m12 xl4 center">
                  <h4>Сумма</h4>
                  <p className="divider" />
                  <h3>{price} р.</h3>
                  <p className="grey-text">
                    Заказы на сумму от 3000 рублей{" "}
                    <b className="black-text">доставляютя бесплатно</b>
                  </p>
                  <Link
                    to="/carts/make"
                    className="waves-effect waves-light btn-large black"
                    onClick={onOrder}
                  >
                    Оформить заказ
                  </Link>
                  <p style={{ marginTop: 30 }}>
                    Скидка {percent ? percent : 0}%
                  </p>
                  {percent === null && (
                    <div className="row">
                      <div className="input-field col s10">
                        <input
                          id="promo_code"
                          type="text"
                          value={promoCode}
                          onChange={onPromoCodeChange}
                        />
                        <label htmlFor="promo_code">Введите промокод</label>
                      </div>
                      <div style={{ marginTop: 20 }} className="col s2">
                        <button
                          className={`btn orange waves-effect waves-light ${
                            loading && "disabled"
                          }`}
                          onClick={usePromoCode}
                        >
                          <i className="material-icons">check</i>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
