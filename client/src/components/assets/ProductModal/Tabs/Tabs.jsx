import React, { useRef, useEffect, Fragment } from "react";

import M from "materialize-css";

import Overview from "./Overview";
import OverviewSkeleton from "./OverviewSkeleton";
import FullDescription from "./FullDescription";
import FullDescriptionSkeleton from "./FullDescriptionSkeleton";
import ShippingAndPayment from "./ShippingAndPayment";
import Reviews from "./Reviews";

const Tabs = ({ data, loading, refetch, instance, vendorCode }) => {
  const tabsRef = useRef(null);

  useEffect(() => {
    if (tabsRef.current) {
      M.Tabs.init(tabsRef.current);
    }
  }, []);

  return (
    <Fragment>
      <h4>
        <ul className="tabs grey lighten-5" ref={tabsRef}>
          <li className="tab col s3">
            <a href="#overview" className="active">
              Обзор
            </a>
          </li>
          <li className="tab col s3">
            <a href="#fullDescription">Полное описание</a>
          </li>
          <li className="tab col s3">
            <a href="#shippingAndPayment">Доставка и оплата</a>
          </li>
          <li className="tab col s3">
            <a href="#reviews">Отзывы</a>
          </li>
        </ul>
      </h4>

      <div id="overview" className="col s12">
        {data && data.product && data.product.product && !loading ? (
          data.product.refetch_require ? (
            <div className="col s12 ">
              <div className="center card-panel orange-text">
                <span>Ошибка! Попробуйте снова</span>
                <button onClick={() => refetch()} className="btn-flat">
                  <i className="material-icons">refresh</i>
                </button>
              </div>
            </div>
          ) : (
            <Overview product={data.product.product} />
          )
        ) : (
          <OverviewSkeleton />
        )}
      </div>
      <div id="fullDescription" className="col s12">
        {data && data.product && data.product.product && !loading ? (
          data.product.refetch_require ? (
            <div className="col s12 ">
              <div className="center card-panel orange-text">
                <span>Ошибка! Попробуйте снова</span>
                <button onClick={() => refetch()} className="btn-flat">
                  <i className="material-icons">refresh</i>
                </button>
              </div>
            </div>
          ) : (
            <FullDescription
              product={data.product.product}
              instance={instance}
            />
          )
        ) : (
          <FullDescriptionSkeleton />
        )}
      </div>
      <div id="shippingAndPayment" className="col s12">
        <ShippingAndPayment />
      </div>
      <div id="reviews" className="col s12">
        <Reviews instance={instance} vendorCode={vendorCode} />
      </div>
    </Fragment>
  );
};

export default Tabs;
