/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState } from "react";

import { Link } from "react-router-dom";

import Logo from "../../assets/logo.svg";

import SideNavContent from "./sideNavContent/SideNavContent";
import HeaderNav from "./HeaderNav";
import NavBar from "./NavBar";

const Header = () => {
  const [close, setClose] = useState(
    sessionStorage.getItem("stock")
      ? JSON.parse(sessionStorage.getItem("stock"))
      : false
  );

  const handleClose = () => {
    setClose(true);
    sessionStorage.setItem("stock", "true");
  };

  return (
    <Fragment>
      <nav className="nav-extended white" role="navigation">
        {!close && (
          <div className="row grey darken-3">
            <div className="col s12 center">
              Акция! Скидка 5% по промокоду HOT5
              <i
                onClick={handleClose}
                style={{ cursor: "pointer" }}
                className="material-icons right"
              >
                close
              </i>
            </div>
          </div>
        )}
        <div className="nav-content hide-on-med-and-down">
          <div
            className="container black-text"
            style={{ paddingTop: 10, paddingBottom: 10 }}
          >
            <Link
              style={{
                paddingRight: 10,
                borderRight: "1px solid silver",
                fontSize: 11,
              }}
              to="/info/contacts"
              className="under-line grey-text"
            >
              Контакты
            </Link>
            <Link
              style={{
                marginLeft: 9,
                paddingRight: 10,
                borderRight: "1px solid silver",
                fontSize: 11,
              }}
              to="/info/delivery"
              className="under-line grey-text"
            >
              Доставка и оплата
            </Link>
            <Link
              style={{
                marginLeft: 9,
                paddingRight: 10,
                borderRight: "1px solid silver",
                fontSize: 11,
              }}
              to="/info/refund"
              className="under-line grey-text"
            >
              Гарантии и возврат
            </Link>
            <Link
              style={{
                marginLeft: 9,
                paddingRight: 10,
                borderRight: "1px solid silver",
                fontSize: 11,
              }}
              to="/catalog/manufacturer"
              className="under-line grey-text"
            >
              Производители
            </Link>
            <Link
              style={{ marginLeft: 9, fontSize: 11 }}
              to="/responses"
              className="under-line grey-text"
            >
              Отзывы о магазине
            </Link>

            <a href="tel:+79001259458" className="under-line black-text right">
              <b>+79001259458</b>
            </a>
            <a
              className="right grey-text center"
              style={{ fontSize: 10, marginRight: 10 }}
            >
              пн-вс
              <br />с 9:00 до 21:00
            </a>
          </div>
          <div className="divider" />
        </div>
        <div className="nav-wrapper container" style={{ height: 100 }}>
          <Link
            to="/"
            className="brand-logo grey-text text-darken-4"
            id="logo-container"
          >
            <img src={Logo} alt={Logo} height="100px" width="200px" />
          </Link>
          <HeaderNav />

          <SideNavContent />
          <a href="#" data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons grey-text text-darken-4 ">menu</i>
          </a>
        </div>
        <NavBar />
      </nav>
    </Fragment>
  );
};

export default Header;
