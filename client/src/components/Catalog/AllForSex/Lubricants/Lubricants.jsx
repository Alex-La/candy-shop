import React, { Fragment, useState, useContext } from "react";
import { Link } from "react-router-dom";

import Context from "../../../../context/Context";

import { useQuery } from "@apollo/react-hooks";
import PRODUCTS_QUERY from "../../../../graphql/queries/products";

import Filter from "../../../assets/Filter/Filter";
import ProductCont from "../../../assets/Product/ProductCont";
import LoadMoreButton from "../../../assets/Filter/LoadMoreButton";
import FixedToCartButton from "../../../assets/FloatActionBtn/FixedToCartButton";
import CategoryCard from "../../../assets/CategoryCard/CategoryCard";

const catalogData = [
  {
    photo: "/static/anal_lubricants.jpg",
    path: "/catalog/all-for-sex/lubricants/anal-lubricants",
    name: "Анальные смазки",
  },
  {
    photo: "/static/exciting.jpg",
    path: "/catalog/all-for-sex/lubricants/exciting",
    name: "Возбуждающие",
  },
  {
    photo: "/static/oils.jpg",
    path: "/catalog/all-for-sex/lubricants/massage-oils-and-candles",
    name: "Массажные масла и свечи",
  },
  {
    photo: "/static/water_based.jpg",
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

const Lubricants = () => {
  const [loadingOnButton, setLoadingOnButton] = useState(false);
  const [priceRange, setPriceRange] = useState([]);
  const [radio, setRadio] = useState("block");
  const [orderBy, setOrderBy] = useState("DEFAULT");

  const { filter } = useContext(Context);

  const { data, loading, fetchMore, refetch } = useQuery(PRODUCTS_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: {
      filter,
      main: ["Смазки, лубриканты"],
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
                  {window.innerWidth <= 375 && <br />}
                </Link>
              </li>
              <li>
                <Link to="/catalog/all-for-sex" className="orange-text">
                  Принадлежности
                </Link>
              </li>
              <li className="black-text">Смазки и лубриканты</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            {catalogData.slice(0, 4).map((dat, index) => (
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

export default Lubricants;
