import React from "react";

import { Link } from "react-router-dom";

const IconNav = () => {
  return (
    <li>
      <div className="row" style={{ marginLeft: 5 }}>
        <div className="col">
          <Link to="/auth">
            <i className="material-icons" data-position="bottom">
              account_circle
            </i>
          </Link>
        </div>
        <div className="col">
          <Link to="/info/contacts">
            <i className="material-icons" data-position="bottom">
              location_on
            </i>
          </Link>
        </div>
        <div className="col">
          <Link to="/carts">
            <i className="material-icons " data-position="bottom">
              shopping_cart
            </i>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default IconNav;
