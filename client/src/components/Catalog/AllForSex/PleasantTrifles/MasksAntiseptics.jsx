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
    path: "/catalog/all-for-sex/pleasant-trifles/vape",
    name: "Вейп",
  },
  {
    path: "/catalog/all-for-sex/pleasant-trifles/excitatory-agents",
    name: "Возбуждающие средства",
  },
  {
    path: "/catalog/all-for-sex/pleasant-trifles/darsonval",
    name: "Дарсонваль",
  },
  {
    path: "/catalog/all-for-sex/pleasant-trifles/christmas-decorations",
    name: "Ёлочные ишрушки",
  },
  {
    path: "/catalog/all-for-sex/pleasant-trifles/intimate-hygiene",
    name: "Интимная гигиена",
  },
  {
    path: "/catalog/all-for-sex/pleasant-trifles/masks-antiseptics",
    name: "Маски, антисептики",
  },
  {
    path: "/catalog/all-for-sex/pleasant-trifles/condoms",
    name: "Презервативы",
  },
  {
    path: "/catalog/all-for-sex/pleasant-trifles/souvenirs",
    name: "Сувениры",
  },
  {
    path: "/catalog/all-for-sex/pleasant-trifles/batteries-and-accessories",
    name: "Элементы питания и аксессуары",
  },
  {
    path: "/catalog/all-for-sex/pleasant-trifles/erotic-literature",
    name: "Эротическая литература",
  },
  {
    path: "/catalog/all-for-sex/pleasant-trifles/erotic-games",
    name: "Эротические игры",
  },
  {
    path: "/catalog/all-for-sex/pleasant-trifles/erotic-sets",
    name: "Эротические наборы",
  },
];

const MasksAntiseptics = () => {
  const [loadingOnButton, setLoadingOnButton] = useState(false);
  const [priceRange, setPriceRange] = useState([]);
  const [radio, setRadio] = useState("block");
  const [orderBy, setOrderBy] = useState("DEFAULT");

  const { data, loading, fetchMore, refetch } = useQuery(PRODUCTS_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: {
      subsection: "Маски, антисептики",
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
                <Link to="/catalog/all-for-sex" className="orange-text">
                  Принадлежности
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog/all-for-sex/pleasant-trifles"
                  className="orange-text"
                >
                  Приятные мелочи
                </Link>
              </li>
              <li className="black-text">Маски, антисептики</li>
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

export default MasksAntiseptics;
