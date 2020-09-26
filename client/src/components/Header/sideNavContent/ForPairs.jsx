/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect } from "react";

import { Link, useHistory } from "react-router-dom";

import M from "materialize-css";

const ForPairs = () => {
  const collapsibleRef = useRef(null);

  const [expand, setExpand] = useState(false);

  const history = useHistory();

  const handleRedirect = (path) => {
    history.push(path);
  };

  useEffect(() => {
    if (collapsibleRef.current) {
      M.Collapsible.init(collapsibleRef.current);
    }
  }, []);

  return (
    <li>
      <a className="white-text">
        <b onClick={() => handleRedirect("/catalog/for-pairs")}>BDSM</b>
        <i
          className="collapsible-header material-icons white-text right"
          onClick={() => setExpand(!expand)}
        >
          {expand ? "expand_less" : "expand_more"}
        </i>
      </a>

      <div className="collapsible-body">
        <ul className="collapsible" ref={collapsibleRef}>
          <li>
            <a>
              <b
                onClick={() =>
                  handleRedirect("/catalog/for-pairs/bdsm-products")
                }
              >
                BDSM, садо-мазо товары
              </b>
              <i className="collapsible-header material-icons right">add</i>
            </a>

            <div className="collapsible-body">
              <ul className="collapsible">
                <li>
                  <Link to="/catalog/for-pairs/bdsm-products/other-bdsm-products">
                    Другие BDSM товары
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-pairs/bdsm-products/intimate-jewelry">
                    Интимные украшения
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-pairs/bdsm-products/whips">
                    Кнуты, плётки, хлысты
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-pairs/bdsm-products/masks-gags">
                    Маски, кляпы
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-pairs/bdsm-products/medical-fetish">
                    Медицинский фетиш
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-pairs/bdsm-products/handcuffs-collars">
                    Наручники, ошейники
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-pairs/bdsm-products/electrostimulators">
                    Электростимуляторы
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <a>
              <b
                onClick={() =>
                  handleRedirect(
                    "/catalog/for-pairs/strap-ons-phalloprostheses"
                  )
                }
              >
                Страпоны, фаллопрот...
              </b>
              <i className="collapsible-header material-icons right">add</i>
            </a>
            <div className="collapsible-body">
              <ul className="collapsible">
                <li>
                  <Link to="/catalog/for-pairs/strap-ons-phalloprostheses/beltless">
                    Безремневые
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-pairs/strap-ons-phalloprostheses/female-strapon">
                    Женские страпоны
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-pairs/strap-ons-phalloprostheses/male-strapon">
                    Мужские страпоны
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-pairs/strap-ons-phalloprostheses/panties-and-attachments">
                    Трусики и насадки
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
                <li>
                  <Link to="/catalog/for-pairs/strap-ons-phalloprostheses/falloprostheses">
                    фаллопротезы
                    <i className="material-icons">chevron_right</i>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default ForPairs;
