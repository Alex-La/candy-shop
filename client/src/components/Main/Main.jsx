import React, { Fragment } from "react";

import { useQuery } from "@apollo/react-hooks";

import MAIN_QUERY from "../../graphql/queries/main";

import Preloader from "../assets/Preloader/Preloader";
import FixedToCartButton from "../assets/FloatActionBtn/FixedToCartButton";

import TopSection from "./topSection/TopSection";
import Slider from "./slider/Slider";
import ProductsSection from "./productsSection/ProductsSection";
import Popular from "./topSection/Popular";

const Main = () => {
  const { data, loading } = useQuery(MAIN_QUERY);

  return loading ? (
    <Preloader />
  ) : (
    <Fragment>
      <Slider images={data && data.main && data.main.slider_images} />
      <Popular />
      <TopSection images={data && data.main && data.main.top_section_images} />
      <ProductsSection />
      <FixedToCartButton />
    </Fragment>
  );
};

export default Main;
