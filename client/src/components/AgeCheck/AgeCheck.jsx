import React, { useEffect, useRef, useState } from "react";

import Adult from "../../assets/adult.svg";

import M from "materialize-css";

const AgeCheck = () => {
  const [instance, setInstance] = useState(null);

  const modalRef = useRef(null);

  useEffect(() => {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.9,
      dismissible: false,
      startingTop: "5%",
      endingTop: "20%",
    };

    if (modalRef.current) {
      const instance = M.Modal.init(modalRef.current, options);
      setInstance(instance);
    }
  }, []);

  useEffect(() => {
    const isAdult = sessionStorage.getItem("adult");
    if (!isAdult && instance) instance.open();
  }, [instance]);

  const handleAgeTrue = () => {
    sessionStorage.setItem("adult", true);
    instance.close();
  };

  return (
    <div ref={modalRef} className="modal">
      <div className="modal-content">
        <h4 style={{ color: "#E94444" }}>
          Внимание <img src={Adult} alt={Adult} style={{ width: "60px" }} />
        </h4>
        <p>
          Добро пожаловать на сайт candy-shop.ru. Для доступа необходимо
          подтвердить совершеннолетний возраст.
        </p>
      </div>
      <div className="modal-footer">
        <button
          className="modal-close waves-effect waves-green btn-flat green-text text-darken-4"
          onClick={handleAgeTrue}
        >
          Мне есть 18 лет
        </button>
        <a
          href="about:home"
          className="modal-close waves-effect waves-red btn-flat red-text"
        >
          Выйти
        </a>
      </div>
    </div>
  );
};

export default AgeCheck;
