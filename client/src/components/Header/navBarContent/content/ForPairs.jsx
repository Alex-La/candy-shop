import React from "react";

import { Link } from "react-router-dom";

const ForPairs = () => {
  return (
    <div className="section">
      <div className="row">
        <div className="col s12 m6">
          <div className="icon-block">
            <ul className="collection with-header">
              <li className="collection-header">
                <Link to="/catalog/for-pairs/bdsm-products">
                  <h5 className="black-text">BDSM, садо-мазо товары</h5>
                </Link>
              </li>
              <Link
                to="/catalog/for-pairs/bdsm-products/other-bdsm-products"
                className="collection-item grey-text"
              >
                Другие BDSM товары
              </Link>
              <Link
                to="/catalog/for-pairs/bdsm-products/intimate-jewelry"
                className="collection-item grey-text"
              >
                Интимные украшения
              </Link>
              <Link
                to="/catalog/for-pairs/bdsm-products/whips"
                className="collection-item grey-text"
              >
                Кнуты, плётки, хлысты
              </Link>
              <Link
                to="/catalog/for-pairs/bdsm-products/masks-gags"
                className="collection-item grey-text"
              >
                Маски, кляпы
              </Link>
              <Link
                to="/catalog/for-pairs/bdsm-products/medical-fetish"
                className="collection-item grey-text"
              >
                Медицинский фетиш
              </Link>
              <Link
                to="/catalog/for-pairs/bdsm-products/handcuffs-collars"
                className="collection-item grey-text"
              >
                Наручники, ошейники
              </Link>
              <Link
                to="/catalog/for-pairs/bdsm-products/electrostimulators"
                className="collection-item grey-text"
              >
                Электростимуляторы
              </Link>
            </ul>
          </div>
        </div>

        <div className="col s12 m6">
          <div className="icon-block">
            <ul className="collection with-header">
              <li className="collection-header">
                <Link to="/catalog/for-pairs/strap-ons-phalloprostheses">
                  <h5 className="black-text">Страпоны, фаллопротезы</h5>
                </Link>
              </li>
              <Link
                to="/catalog/for-pairs/strap-ons-phalloprostheses/beltless"
                className="collection-item grey-text"
              >
                Безремневые
              </Link>
              <Link
                to="/catalog/for-pairs/strap-ons-phalloprostheses/female-strapon"
                className="collection-item grey-text"
              >
                Женские страпоны
              </Link>
              <Link
                to="/catalog/for-pairs/strap-ons-phalloprostheses/male-strapon"
                className="collection-item grey-text"
              >
                Мужские страпоны
              </Link>
              <Link
                to="/catalog/for-pairs/strap-ons-phalloprostheses/panties-and-attachments"
                className="collection-item grey-text"
              >
                Трусики и насадки
              </Link>
              <Link
                to="/catalog/for-pairs/strap-ons-phalloprostheses/falloprostheses"
                className="collection-item grey-text"
              >
                Фаллопротезы
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForPairs;
