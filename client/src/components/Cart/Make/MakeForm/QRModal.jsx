import React, { useEffect, useRef, useState } from "react";

import M from "materialize-css";

const QRModal = ({ openQRModal, setOpenQRModal }) => {
  const modalRef = useRef(null);

  const [instance, setInstance] = useState(null);

  useEffect(() => {
    if (openQRModal) instance.open();
  }, [openQRModal]);

  useEffect(() => {
    if (modalRef.current) {
      const instance = M.Modal.init(modalRef.current, {
        onCloseEnd: () => {
          setOpenQRModal(false);
        },
      });
      setInstance(instance);
    }
  }, [setOpenQRModal]);

  return (
    <div id="qr-modal" className="modal" ref={modalRef}>
      <div className="modal-content">
        <button>Payed</button>
      </div>
    </div>
  );
};

export default QRModal;
