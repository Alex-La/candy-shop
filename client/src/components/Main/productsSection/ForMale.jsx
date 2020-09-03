import React, { Fragment } from "react";

import { useQuery } from "@apollo/react-hooks";
import PRODUCTS_QUERY from "../../../graphql/queries/products";

import ProductCard from "../../assets/Product/ProductCard";
import ProductCardSkeleton from "../../assets/Product/ProductCardSkeleton";

import { Link } from "react-router-dom";

const ForMale = () => {
  const { data, loading, refetch } = useQuery(PRODUCTS_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: {
      data: {
        pageSize: 7,
        main: ["Секс-товары для мужчин"],
      },
    },
  });

  return (
    <Fragment>
      <div className="row">
        <div className="col">
          <Link to="/catalog/for-male" className="black-text under-line">
            <h3>Для сильных духом</h3>
          </Link>
        </div>
      </div>

      <div className="row scrolling-wrapper">
        {loading ? (
          Array(7)
            .fill()
            .map((_, index) => (
              <div key={index} className="col scrolling-item">
                <ProductCardSkeleton />
              </div>
            ))
        ) : data.products.refetch_require ? (
          <div className="col s12 ">
            <div className="center card-panel orange-text">
              <span>Ошибка! Попробуйте снова...</span>
              <button
                onClick={() => refetch()}
                className="btn-flat toast-action"
              >
                <i className="material-icons">refresh</i>
              </button>
            </div>
          </div>
        ) : (
          data.products.products.map((product, index) => (
            <div key={index} className="col scrolling-item">
              <ProductCard
                vendor_code={product.vendor_code}
                image_small={product.photo_small}
                image={product.photos[0]}
                name={product.name}
                description={product.description}
                price={product.price_retail}
              />
            </div>
          ))
        )}
      </div>
    </Fragment>
  );
};

export default ForMale;
