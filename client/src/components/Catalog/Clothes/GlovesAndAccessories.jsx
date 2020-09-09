import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/react-hooks";
import PRODUCTS_QUERY from "../../../graphql/queries/products";

import Filter from "../../assets/Filter/Filter";
import ProductCont from "../../assets/Product/ProductCont";
import LoadMoreButton from "../../assets/Filter/LoadMoreButton";
import FixedToCartButton from "../../assets/FloatActionBtn/FixedToCartButton";

const catalogData = [
  {
    path: "/catalog/erotic-clothes/beauty-accessories",
    name: "Beauty-аксессуары",
  },
  {
    path: "/catalog/erotic-clothes/bikinis-and-sets",
    name: "Бикини и комплекты",
  },
  {
    path: "/catalog/erotic-clothes/bodysuits-and-jumpsuits",
    name: "Боди и комбинезоны",
  },
  {
    path: "/catalog/erotic-clothes/big-sizes",
    name: "БОЛЬШИЕ размеры",
  },
  {
    path: "/catalog/erotic-clothes/bustier-and-bra",
    name: "Бюстье и бра",
  },
  {
    path: "/catalog/erotic-clothes/game-costumes",
    name: "Игровые костюмы",
  },
  {
    path: "/catalog/erotic-clothes/corsets-and-grace",
    name: "Корсеты и грации",
  },
  {
    path: "/catalog/erotic-clothes/swimwear",
    name: "Купальники",
  },
  {
    path: "/catalog/erotic-clothes/mens-underwear",
    name: "Мужское белье",
  },
  {
    path: "/catalog/erotic-clothes/vinyl-clothing",
    name: "Одежда из винила",
  },
  {
    path: "/catalog/erotic-clothes/latex-clothing",
    name: "Одежда из латекса",
  },
  {
    path: "/catalog/erotic-clothes/gloves-and-accessories",
    name: "Перчатки и аксессуары",
  },
  {
    path: "/catalog/erotic-clothes/shirts-and-baby-dollar",
    name: "Сорочки, беби-долл",
  },
  {
    path: "/catalog/erotic-clothes/panties-shorts",
    name: "Трусики и шорты",
  },
  {
    path: "/catalog/erotic-clothes/robes-and-negligees",
    name: "Халаты и пеньюары",
  },
  {
    path: "/catalog/erotic-clothes/stockings-and-tights",
    name: "Чулки и колготки",
  },
  {
    path: "/catalog/erotic-clothes/erotic-shoes",
    name: "Эротическая обувь",
  },
  {
    path: "/catalog/erotic-clothes/erotic-dress",
    name: "Эротическое платье",
  },
];

const GlovesAndAccessories = () => {
  const [loadingOnButton, setLoadingOnButton] = useState(false);
  const [priceRange, setPriceRange] = useState([]);
  const [radio, setRadio] = useState("block");
  const [orderBy, setOrderBy] = useState("DEFAULT");

  const { data, loading, fetchMore, refetch } = useQuery(PRODUCTS_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: {
      subsection: "Перчатки и аксессуары",
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
                <Link to="/catalog/erotic-clothes" className="orange-text">
                  Одежда
                </Link>
              </li>
              <li className="black-text">Перчатки и аксессуары</li>
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

export default GlovesAndAccessories;
