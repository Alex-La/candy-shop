/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState, useCallback } from "react";

import M from "materialize-css";
import { Link } from "react-router-dom";

import Swipe from "react-easy-swipe";
import useDragHandler from "../../../hooks/useDragHandler";

const Slider = ({ images }) => {
  const sliderRef = useRef(null);
  const [instance, setInstance] = useState(null);

  const { onDrag, onDragEnd, onDragStart } = useDragHandler(instance);

  const height = useCallback((width) => {
    if (width >= 2560) return 800;
    if (width >= 1440) return 600;
    if (width >= 1024) return 500;
    if (width >= 425) return 400;
    return 300;
  }, []);

  useEffect(() => {
    const width = window.innerWidth;

    if (sliderRef.current) {
      const instance = M.Slider.init(sliderRef.current, {
        height: height(width),
      });
      setInstance(instance);
    }
  }, [height]);

  const onSwipeLeft = () => {
    instance.next();
  };

  const onSwipeRight = () => {
    instance.prev();
  };

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <div className="row">
        <div className="slider" ref={sliderRef}>
          <Swipe onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight}>
            <ul
              style={{ cursor: "ew-resize" }}
              className="slides"
              onDragStart={onDragStart}
              onDrag={onDrag}
              onDragEnd={onDragEnd}
            >
              <li>
                <img src={images[0]} alt={images[0]} />
                <div className="caption left-align grey-text text-lighten-4">
                  <h3>Под какой маской ты?</h3>
                  <h6 className="light grey-text text-lighten-4">
                    Секс-маски - это то, что придаст пикантности вашей
                    сексуальной жизни.
                  </h6>
                  <Link
                    to="/catalog/for-pairs/bdsm-products/masks-gags"
                    className="btn-small white black-text "
                  >
                    Все маски
                  </Link>
                </div>
              </li>
              <li>
                <img src={images[1]} alt={images[1]} />
                <div className="caption left-align grey-text text-lighten-4">
                  <h3>Сексуальное белье</h3>
                  <h6 className=" grey-text text-lighten-4">
                    Невероятно соблазнительное белье для воплощения всех ваших
                    фантазий.
                  </h6>
                  <Link
                    to="/catalog/erotic-clothes"
                    className="btn-small white black-text "
                  >
                    Все белье
                  </Link>
                </div>
              </li>
              <li>
                <img src={images[2]} alt={images[2]} />
                <div className="caption left-align orange-text">
                  <h3>Интимные смазки</h3>
                  <h6 className="orange-text ">
                    Невероятные ощущения от близости.
                  </h6>
                  <Link
                    to="/catalog/all-for-sex/lubricants"
                    className="btn-small orange white-text "
                  >
                    Все смазки
                  </Link>
                </div>
              </li>
            </ul>
          </Swipe>
        </div>
      </div>
    </div>
  );
};

export default Slider;
