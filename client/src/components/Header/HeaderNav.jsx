import React from "react";

import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <ul className="right">
      <li>
        <Link to="/search">
          <i className="material-icons black-text">search</i>
        </Link>
      </li>
      <li>
        <Link to="/auth" className="hide-on-med-and-down">
          <i
            className="material-icons black-text tooltipped"
            data-position="bottom"
            data-tooltip="Войти"
          >
            account_circle
          </i>
        </Link>
      </li>
      <li>
        <Link to="/info/contacts" className="hide-on-med-and-down">
          <i
            className="material-icons black-text tooltipped"
            data-position="bottom"
            data-tooltip="Контакты"
          >
            location_on
          </i>
        </Link>
      </li>
      <li>
        <Link to="/personal/carts" className="hide-on-med-and-down">
          <i
            className="material-icons black-text tooltipped"
            data-position="bottom"
            data-tooltip="Корзина"
          >
            shopping_cart
          </i>
        </Link>
      </li>
    </ul>
  );
};

export default HeaderNav;
