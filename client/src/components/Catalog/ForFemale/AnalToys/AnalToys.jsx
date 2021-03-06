import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/react-hooks";
import PRODUCTS_QUERY from "../../../../graphql/queries/products";

import Filter from "../../../assets/Filter/Filter";
import ProductCont from "../../../assets/Product/ProductCont";
import LoadMoreButton from "../../../assets/Filter/LoadMoreButton";
import FixedToCartButton from "../../../assets/FloatActionBtn/FixedToCartButton";
import CategoryCard from "../../../assets/CategoryCard/CategoryCard";

const catalogData = [
  {
    photo: "/static/anal_vibrators.jpg",
    path: "/catalog/for-female/anal-toys/anal-vibrators",
    name: "Анальные вибраторы",
  },
  {
    photo: "/static/anal_plugs.jpg",
    path: "/catalog/for-female/anal-toys/anal-plugs",
    name: "Анальные пробки",
  },
  {
    photo: "/static/anal_plug_no_vibro.jpg",
    path: "/catalog/for-female/anal-toys/anal-stimulators-without-vibration",
    name: "Анальные стимуляторы без вибрации",
  },
  {
    photo: "/static/anal_phallouses.jpg",
    path: "/catalog/for-female/anal-toys/anal-dildos",
    name: "Анальные фаллоимитаторы",
  },
  {
    photo: "/static/anal_eggs.jpg",
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

const AnalToys = () => {
  const [loadingOnButton, setLoadingOnButton] = useState(false);
  const [priceRange, setPriceRange] = useState([]);
  const [radio, setRadio] = useState("block");
  const [orderBy, setOrderBy] = useState("DEFAULT");

  const { data, loading, fetchMore, refetch } = useQuery(PRODUCTS_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: {
      main: ["Анальные игрушки"],
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
                  Для женщин
                </Link>
              </li>
              <li className="black-text">Анальные игрушки</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            {catalogData.slice(0, 5).map((dat, index) => (
              <CategoryCard dat={dat} key={index} />
            ))}
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

export default AnalToys;
