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
    path: "/catalog/all-for-sex/lubricants/anal-lubricants",
    name: "Анальные смазки",
  },
  {
    path: "/catalog/all-for-sex/lubricants/exciting",
    name: "Возбуждающие",
  },
  {
    path: "/catalog/all-for-sex/lubricants/massage-oils-and-candles",
    name: "Массажные масла и свечи",
  },
  {
    path: "/catalog/all-for-sex/lubricants/water-based",
    name: "На водной основе",
  },
  {
    path: "/catalog/all-for-sex/lubricants/silicone-based",
    name: "На силиконовой основе",
  },
  {
    path: "/catalog/all-for-sex/lubricants/prolongators",
    name: "Пролонгаторы",
  },
];

const Exciting = () => {
  const [loadingOnButton, setLoadingOnButton] = useState(false);
  const [priceRange, setPriceRange] = useState([]);
  const [radio, setRadio] = useState("block");
  const [orderBy, setOrderBy] = useState("DEFAULT");

  const { data, loading, fetchMore, refetch } = useQuery(PRODUCTS_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: {
      subsection: "Возбуждающие",
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
                  Всё для секса
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog/all-for-sex/lubricants"
                  className="orange-text"
                >
                  Смазки и лубриканты
                </Link>
              </li>
              <li className="black-text">Возбуждающие</li>
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

export default Exciting;
