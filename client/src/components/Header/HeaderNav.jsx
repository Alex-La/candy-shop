/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {
  useEffect,
  useRef,
  Fragment,
  useState,
  useContext,
} from "react";

import { Link, useHistory } from "react-router-dom";

import Context from "../../context/Context";

import M from "materialize-css";
import { useCallback } from "react";

const HeaderNav = () => {
  const [value, setValue] = useState("");
  const [instance, setInstance] = useState(null);

  const dropdownRef = useRef(null);

  const { setSearchInputValue } = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    if (dropdownRef.current) {
      const instance = M.Dropdown.init(dropdownRef.current, {
        alignment: "right",
        constrainWidth: false,
        coverTrigger: false,
        closeOnClick: false,
      });
      setInstance(instance);
    }
  }, []);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleSearch = () => {
    setSearchInputValue(value);
    instance.close();
    setValue("");
    history.push("/search");
  };

  return (
    <Fragment>
      <ul className="right">
        <li>
          <a
            className="dropdown-trigger"
            data-target="search"
            ref={dropdownRef}
          >
            <i className="material-icons black-text">search</i>
          </a>
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

      <div id="search" className="dropdown-content row">
        <div className="col s10">
          <input
            value={value}
            placeholder="search..."
            id="search"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="col s2" style={{ marginTop: 5 }}>
          <i
            className="material-icons orange-text"
            onClick={handleSearch}
            style={{ cursor: "pointer" }}
          >
            search
          </i>
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderNav;
