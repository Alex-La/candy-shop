/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";

import M from "materialize-css";
import { Link } from "react-router-dom";

const Slider = ({ images }) => {
  const carouselRef = useRef(null);
  const [instance, setInstance] = useState(null);

  useEffect(() => {
    if (carouselRef.current) {
      const instance = M.Carousel.init(carouselRef.current, {
        fullWidth: true,
        indicators: false,
      });
      setInstance(instance);
    }
  }, []);

  return (
    <div class="container" style={{ marginTop: 20 }}>
      <div
        class="carousel carousel-slider center"
        data-indicators="true"
        ref={carouselRef}
      >
        <div class="carousel-fixed-item center middle-indicator hide-on-med-and-down">
          <div class="left">
            <a
              href="Previo"
              class="middle-indicator-text waves-effect waves-light content-indicator"
              onClick={(e) => {
                e.preventDefault();
                instance.prev();
              }}
            >
              <i class="material-icons left  middle-indicator-text">
                chevron_left
              </i>
            </a>
          </div>

          <div class="right">
            <a
              href="Siguiente"
              class="middle-indicator-text waves-effect waves-light content-indicator"
              onClick={(e) => {
                e.preventDefault();
                instance.next();
              }}
            >
              <i class="material-icons right middle-indicator-text">
                chevron_right
              </i>
            </a>
          </div>
        </div>

        <a className="carousel-item">
          <img src={images[1]} alt={images[1]} />
        </a>
        <a className="carousel-item">
          <img src={images[1]} alt={images[1]} />
        </a>
        <a className="carousel-item">
          <img src={images[2]} alt={images[2]} />
        </a>
      </div>
    </div>
  );
};

export default Slider;
