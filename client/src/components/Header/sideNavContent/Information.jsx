/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";

const Information = () => {
  const [expand, setExpand] = useState(false);

  const history = useHistory();

  const handleRedirect = (path) => {
    history.push(path);
  };

  return (
    <li>
      <a className="white-text">
        <b onClick={() => handleRedirect("/info")}>Информация</b>
        <i
          className="collapsible-header material-icons white-text right"
          onClick={() => setExpand(!expand)}
        >
          {expand ? "expand_less" : "expand_more"}
        </i>
      </a>

      <div className="collapsible-body">
        <ul className="collapsible">
          <li>
            <Link to="/info/contacts">Контакты</Link>
          </li>
          <li>
            <Link to="/info/delivery">Доставка и оплата</Link>
          </li>
          <li>
            <Link to="/info/refund">Гарантии и возврат</Link>
          </li>
          <li>
            <Link to="/info/privacy">Конфиденциальность</Link>
          </li>
          <li>
            <Link to="/responses">Отзывы о магазине</Link>
          </li>
          <li>
            <Link to="/catalog/manufacturer">Производители</Link>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Information;
