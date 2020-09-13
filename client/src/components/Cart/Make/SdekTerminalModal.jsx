import React, { useRef, useEffect } from "react";

import M from "materialize-css";

const SdekTerminalModal = ({ setSdekTerminalData }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      const instance = M.Modal.init(modalRef.current);

      const widget = new window.ISDEKWidjet({
        defaultCity: "auto",
        cityFrom: "Москва",
        country: "Россия",
        link: "forpvz",
        hidedelt: true,
        zoom: 10,
      });

      const choosePVZ = (wat) => {
        setSdekTerminalData(wat);
        instance.close();
      };

      widget.binders.add(choosePVZ, "onChoose");
    }
  }, [setSdekTerminalData]);

  return (
    <div id="sdek_terminal_modal" className="modal" ref={modalRef}>
      <div className="modal-content">
        <div id="forpvz" style={{ width: "100%", height: "600px" }} />
      </div>
      <div className="modal-footer">
        <button className="modal-close waves-effect waves-darken btn-flat">
          Close
        </button>
      </div>
    </div>
  );
};

export default SdekTerminalModal;
