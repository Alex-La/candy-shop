/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";

import M from "materialize-css";

const FixedToCartButton = () => {
  const [instance, setInstance] = useState(null);

  const floatingActionButtonRef = useRef(null);

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
    </div>
  );
};

export default FixedToCartButton;
