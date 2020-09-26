/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {
  useEffect,
  useRef,
  useState,
  useContext,
  Fragment,
} from "react";

import M from "materialize-css";

import Context from "../../../context/Context";

const FixedToCartButton = () => {
  const [instance, setInstance] = useState(null);
  const [productsCount, setProductsCount] = useState(0);
  const [productsPriceCount, setProductsPriceCount] = useState(0);

  const { productsInCart } = useContext(Context);
  const floatingActionButtonRef = useRef(null);

  useEffect(() => {
    if (productsInCart) {
      let price = 0;
      for (let i in productsInCart) {
        const priceString = productsInCart[i].price.slice(
          0,
          productsInCart[i].price.length - 3
        );
        price += parseInt(priceString, 10);
      }
      setProductsPriceCount(price);
    }
  }, [productsInCart]);

  useEffect(() => {
    if (productsInCart) {
      if (productsInCart.length > 9) setProductsCount("9+");
      else setProductsCount(productsInCart.length);
    } else setProductsCount(0);
  }, [productsInCart]);

  useEffect(() => {
    if (floatingActionButtonRef.current) {
      const instance = M.FloatingActionButton.init(
        floatingActionButtonRef.current,
        {
          hoverEnabled: false,
        }
      );
      setInstance(instance);
    }
  }, []);

  useEffect(() => {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 1000 ||
        document.documentElement.scrollTop > 1000
      ) {
        instance && instance.open();
      } else {
        instance && instance.close();
      }
    };
  }, [instance]);

  const onToTopClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="fixed-action-btn" ref={floatingActionButtonRef}>
      <a
        className="btn-floating btn-large black modal-trigger"
        onClick={(event) => event.preventDefault()}
        href="#cart-modal"
      >
        <i className="large material-icons">shopping_cart</i>
      </a>
      <ul>
        <li>
          <a className="btn-floating white" onClick={onToTopClick}>
            <i className="material-icons black-text">arrow_upward</i>
          </a>
        </li>
      </ul>
      {productsCount !== 0 && (
        <Fragment>
          <span className="cart-counter cart-counter-float-btn">
            {productsCount}
          </span>
          <span className="cart-counter cart-counter-price-float-btn">
            {productsPriceCount}p.
          </span>
        </Fragment>
      )}
    </div>
  );
};

export default FixedToCartButton;
