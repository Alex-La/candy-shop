/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ProductCardSkeleton = () => {
  return (
    <div className="card">
      <div className="card-image">
        <Skeleton height={300} />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <h5>
            <Skeleton width={200} />
          </h5>
          <Skeleton />
        </div>
        <div className="card-action">
          <a
            className="waves-effect waves-light btn black tooltipped disabled"
            data-position="top"
            data-tooltip="В корзину"
          >
            <i className="material-icons">add_shopping_cart</i>
          </a>
          <a className="right" style={{ fontSize: 20 }}>
            <SkeletonTheme color="#ff9800" highlightColor="#fff3e0">
              <Skeleton width={70} height={28} />
            </SkeletonTheme>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
