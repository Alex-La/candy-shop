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
    path: "/catalog/for-female/anal-toys/anal-vibrators",
    name: "Анальные вибраторы",
  },
  {
    path: "/catalog/for-female/anal-toys/anal-plugs",
    name: "Анальные пробки",
  },
  {
    path: "/catalog/for-female/anal-toys/anal-stimulators-without-vibration",
    name: "Анальные стимуляторы без вибрации",
  },
  {
    path: "/catalog/for-female/anal-toys/anal-dildos",
    name: "Анальные фаллоимитаторы",
  },
  {
    path: "/catalog/for-female/anal-toys/anal-beads-and-chains",
    name: "Анальные шарики, цепочки",
  },
  {
    path: "/catalog/for-female/anal-toys/inflatable-expanders",
    name: "Надувные расширители",
  },
  {
    path: "/catalog/for-female/anal-toys/glass-and-metal",
    name: "Стеклянные и металлические",
  },
  {
    path: "/catalog/for-female/anal-toys/fisting",
    name: "Фистинг",
  },
];

const AnalVibrators = () => {
  const [loadingOnButton, setLoadingOnButton] = useState(false);
  const [priceRange, setPriceRange] = useState([]);
  const [radio, setRadio] = useState("block");
  const [orderBy, setOrderBy] = useState("DEFAULT");

  const { data, loading, fetchMore, refetch } = useQuery(PRODUCTS_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: {
      subsection: "Анальные вибраторы",
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
              <li className="black-text">Всё для секса</li>
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

export default AnalVibrators;
