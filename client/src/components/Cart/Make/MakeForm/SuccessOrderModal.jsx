import React, { useEffect, useRef } from "react";

import M from "materialize-css";

import { useHistory } from "react-router-dom";

const SuccessOrderModal = ({ setInstance }) => {
  const modalRef = useRef(null);

  const history = useHistory();

  useEffect(() => {
    if (modalRef.current) {
      const instance = M.Modal.init(modalRef.current, {
        onCloseEnd: () => {
          history.push("/carts/make/success");
        },
      });
      setInstance(instance);
    }
  }, [history, setInstance]);

  return (
    <div id="success-modal" className="modal" ref={modalRef}>
      <div className="modal-content">
        <button>Payed</button>
      </div>
      <div className="modal-footer">
        <button>Close</button>
      </div>
    </div>
  );
};

export default SuccessOrderModal;
