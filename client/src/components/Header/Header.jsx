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
        <div className="nav-wrapper container">
          <Link
            to="/"
            className="brand-logo grey-text text-darken-4"
            id="logo-container"
          >
            <img src={Logo} alt={Logo} height="58px" width="110px" />
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
