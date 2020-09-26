import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Context from "../../context/Context";

const HeaderNav = () => {
  const [productsCount, setProductsCount] = useState(0);

  const { productsInCart } = useContext(Context);

  useEffect(() => {
    if (productsInCart) {
      if (productsInCart.length > 9) setProductsCount("9+");
      else setProductsCount(productsInCart.length);
    } else setProductsCount(0);
  }, [productsInCart]);

  return (
    <ul className="right">
      <li>
        <Link to="/search">
          <i className="material-icons black-text">search</i>
        </Link>
      </li>
      <li>
        <Link to="/auth" className="hide-on-med-and-down">
          <i className="material-icons black-text">account_circle</i>
        </Link>
      </li>
      <li>
        <Link to="/info/contacts" className="hide-on-med-and-down">
          <i className="material-icons black-text">location_on</i>
        </Link>
      </li>
      <li>
        <Link to="/carts" className="hide-on-med-and-down">
          <i className="material-icons black-text">shopping_cart</i>
          {productsCount !== 0 && (
            <span className="cart-counter cart-counter-header">
              {productsCount}
            </span>
          )}
        </Link>
      </li>
    </ul>
  );
};

export default HeaderNav;
