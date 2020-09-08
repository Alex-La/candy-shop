import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/react-hooks";
import PRODUCTS_QUERY from "../../../../graphql/queries/products";

import Filter from "../../../assets/Filter/Filter";
import ProductCont from "../../../assets/Product/ProductCont";
import LoadMoreButton from "../../../assets/Filter/LoadMoreButton";
import FixedToCartButton from "../../../assets/FloatActionBtn/FixedToCartButton";

const catalogData = [
  {
    path: "/catalog/for-female/sex-products-for-female/vaginal-balls",
    name: "Вагинальные шарики",
  },
  {
    path: "/catalog/for-female/sex-products-for-female/vibrating-egg",
    name: "Виброяйцо",
  },
  {
    path: "/catalog/for-female/sex-products-for-female/clitoral-stimulants",
    name: "Клиторальные стимуляторы",
  },
  {
    path: "/catalog/for-female/sex-products-for-female/clitoris-pumps",
    name: "Помпы для клитора",
  },
  {
    path:
      "/catalog/for-female/sex-products-for-female/breast-pumps-and-stimulants",
    name: "Помпы и стимуляторы для груди",
  },
];

const VaginalBalls = () => {
  const [loadingOnButton, setLoadingOnButton] = useState(false);
  const [priceRange, setPriceRange] = useState([]);
  const [radio, setRadio] = useState("block");
  const [orderBy, setOrderBy] = useState("DEFAULT");

  const { data, loading, fetchMore, refetch } = useQuery(PRODUCTS_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: {
      subsection: "Вагинальные шарики",
      orderBy,
      priceRange: priceRange.length !== 0 ? priceRange : [],
    },
  });

  return (
    <Fragment>
      <div className="section">
        <div className="row">
          <div className="col s12">
            <ul className="breadcrumb">
              <li>
                <Link to="/" className="orange-text">
                  Главная страница
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="orange-text">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/catalog/for-female" className="orange-text">
                  Женщинам
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog/for-female/sex-products-for-female"
                  className="orange-text"
                >
                  {window.innerWidth <= 425 && <br />}
                  Секс-товары для женщин
                </Link>
              </li>
              <li className="black-text">Вагинальные шарики</li>
            </ul>
          </div>
        </div>
      </div>

      <Filter
        setLoadingOnButton={setLoadingOnButton}
        catalogData={catalogData}
        setPriceRange={setPriceRange}
        radio={radio}
        setRadio={setRadio}
        setOrderBy={setOrderBy}
        price_range={data && data.products && data.products.price_range}
      />

      <ProductCont
        data={data && data.products && data.products.products}
        refetch={data && data.products.refetch_require && refetch}
        loading={loading}
        loadingOnButton={loadingOnButton}
        radio={radio}
      />

      <LoadMoreButton
        cursor={data && data.products && data.products.cursor}
        hasMore={data && data.products && data.products.hasMore}
        loading={loading}
        setLoadingOnButton={setLoadingOnButton}
        fetchMore={fetchMore}
      />

      <FixedToCartButton />
    </Fragment>
  );
};

export default VaginalBalls;
