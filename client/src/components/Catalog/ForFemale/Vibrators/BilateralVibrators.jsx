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
    path: "/catalog/for-female/vibrators/hi-tech",
    name: "Hi-tech",
  },
  {
    path: "/catalog/for-female/vibrators/anal-vaginal-vibrators",
    name: "Анально-вагинальные",
  },
  {
    path: "/catalog/for-female/vibrators/big-vibrators",
    name: "Большие вибраторы",
  },
  {
    path: "/catalog/for-female/vibrators/vibration-kits",
    name: "Вибронаборы",
  },
  {
    path:
      "/catalog/for-female/vibrators/vibration-stimulators-and-vibration-bullets",
    name: "Вибростимуляторы, вибропульки",
  },
  {
    path: "/catalog/for-female/vibrators/waterproof",
    name: "Водонепроницаемые",
  },
  {
    path: "/catalog/for-female/vibrators/rotating",
    name: "Вращающиеся",
  },
  {
    path: "/catalog/for-female/vibrators/bilateral-vibrators",
    name: "Двусторонние",
  },
  {
    path: "/catalog/for-female/vibrators/for-two",
    name: "Для двоих",
  },
  {
    path: "/catalog/for-female/vibrators/classic",
    name: "Классические",
  },
  {
    path: "/catalog/for-female/vibrators/computer-type",
    name: "Компьтерного типа",
  },
  {
    path: "/catalog/for-female/vibrators/realistic-vibrators",
    name: "Реалистики",
  },
  {
    path: "/catalog/for-female/vibrators/with-radio-control",
    name: "С радиоуправлением",
  },
  {
    path: "/catalog/for-female/vibrators/with-clitoris-stimulator",
    name: "Со стимулятором клитора",
  },
  {
    path: "/catalog/for-female/vibrators/g-spot-stimulants-vibrators",
    name: "Стимуляторы G-точки",
  },
];

const BilateralVibrators = () => {
  const [loadingOnButton, setLoadingOnButton] = useState(false);
  const [priceRange, setPriceRange] = useState([]);
  const [radio, setRadio] = useState("block");
  const [orderBy, setOrderBy] = useState("DEFAULT");

  const { data, loading, fetchMore, refetch } = useQuery(PRODUCTS_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: {
      main: ["Вибраторы"],
      subsection: "Двусторонние",
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
                  to="/catalog/for-female/vibrators"
                  className="orange-text"
                >
                  {window.innerWidth <= 425 && <br />}
                  Вибраторы
                </Link>
              </li>
              <li className="black-text">Двусторонние</li>
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

export default BilateralVibrators;
