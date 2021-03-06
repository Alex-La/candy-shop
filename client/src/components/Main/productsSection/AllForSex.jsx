import React, { Fragment } from "react";

import { useQuery } from "@apollo/react-hooks";
import PRODUCTS_QUERY from "../../../graphql/queries/products";

import ProductCard from "../../assets/Product/ProductCard";
import ProductCardSkeleton from "../../assets/Product/ProductCardSkeleton";

import { Link } from "react-router-dom";

const AllForSex = () => {
  const { data, loading, refetch } = useQuery(PRODUCTS_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: {
      pageSize: 7,
      main: [
        "Косметика с феромонами",
        "Приятные мелочи",
        "Секс-мебель и качели",
        "Смазки, лубриканты",
      ],
    },
  });

  return (
    <Fragment>
      <div className="row">
        <div className="col">
          <Link to="/catalog/all-for-sex" className="black-text under-line">
            <h4>Принадлежности</h4>
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
                sale={product.sale}
                vendor_code={product.vendor_code}
                image_small={product.photo_small}
                image={product.photos[0]}
                name={product.name}
                description={product.description}
                color={product.color[0]}
                size={product.size[0]}
                price={product.price_retail}
              />
            </div>
          ))
        )}
      </div>
    </Fragment>
  );
};

export default AllForSex;
