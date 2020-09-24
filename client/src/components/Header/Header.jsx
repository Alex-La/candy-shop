/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";

import { Link } from "react-router-dom";

import Logo from "../../assets/logo.svg";

import SideNavContent from "./sideNavContent/SideNavContent";
import HeaderNav from "./HeaderNav";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <Fragment>
      <nav className="nav-extended white" role="navigation">
        <div className="nav-content hide-on-med-and-down">
          <div
            className="container black-text"
            style={{ paddingTop: 10, paddingBottom: 10 }}
          >
            <Link
              style={{ paddingRight: 10, borderRight: "1px solid silver" }}
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
              }}
              to="/catalog/manufacturer"
              className="under-line grey-text"
            >
              Производители
            </Link>
            <Link
              style={{ marginLeft: 9 }}
              to="/responses"
              className="under-line grey-text"
            >
              Отзывы о магазине
            </Link>
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
