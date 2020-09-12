import React, { useEffect, useRef } from "react";

import { YMaps, Map, Placemark } from "react-yandex-maps";

import M from "materialize-css";

const YandexMap = () => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) M.Modal.init(modalRef.current);
  }, []);

  return (
    <div id="map_modal" className="modal" ref={modalRef}>
      <div className="modal-content">
        <YMaps>
          <Map
            width="100%"
            height="500px"
            defaultState={{
              center: [55.705902, 37.646426],
              zoom: 16,
            }}
          >
            <Placemark geometry={[55.705902, 37.646426]} />
          </Map>
        </YMaps>
      </div>
      <div className="modal-footer">
        <button className="modal-close waves-effect waves-darken btn-flat">
          Close
        </button>
      </div>
    </div>
  );
};

export default YandexMap;
