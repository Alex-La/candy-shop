/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";

const ForMale = () => {
  const [expand, setExpand] = useState(false);

  const history = useHistory();

  const handleRedirect = (path) => {
    history.push(path);
  };

  return (
    <li>
      <a className="white-text">
        <b onClick={() => handleRedirect("/catalog/for-male")}>Мужчинам</b>
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
            <Link to="/catalog/for-male/vaginas">Вагины</Link>
          </li>

          <li>
            <Link to="/catalog/for-male/vacuum-pumps">Вакуумные помпы</Link>
          </li>

          <li>
            <Link to="/catalog/for-male/prostate-massagers">
              Массажеры простаты
            </Link>
          </li>

          <li>
            <Link to="/catalog/for-male/masturbators">Мастурбаторы</Link>
          </li>

          <li>
            <Link to="/catalog/for-male/nozzles-and-extensions">
              Насадки и удлинители
            </Link>
          </li>

          <li>
            <Link to="/catalog/for-male/sex-dolls">Секс куклы</Link>
          </li>

          <li>
            <Link to="/catalog/for-male/cock-rings">Эрекционные кольца</Link>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default ForMale;
