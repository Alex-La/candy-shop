import React from "react";

import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductCont = ({ data, refetch, loading, loadingOnButton, radio }) => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          {loading && !loadingOnButton ? (
            Array(12)
              .fill()
              .map((_, index) => (
                <div key={index} className="col s12 m4 xl3">
                  <ProductCardSkeleton />
                </div>
              ))
          ) : data && data.length > 0 ? (
            data.map((dat, index) => (
              <div
                key={index}
                className={`col s12 ${radio === "block" && "m4 xl3"}`}
              >
                <ProductCard
                  vendor_code={dat.vendor_code}
                  image_small={dat.photo_small}
                  image={dat.photos[0]}
                  name={dat.name}
                  description={dat.description}
                  color={dat.color[0]}
                  size={dat.size[0]}
                  price={dat.price_retail}
                  radio={radio}
                />
              </div>
            ))
          ) : refetch ? (
            <div className="col s12 ">
              <div className="center card-panel orange-text">
                <span>Ошибка! Попробуйте снова</span>
                <button onClick={() => refetch()} className="btn-flat">
                  <i className="material-icons">refresh</i>
                </button>
              </div>
            </div>
          ) : (
            <div className="col s12 ">
              <div className="center card-panel orange-text">
                На данный момент нет товаров данной категории.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCont;
