import React, { useEffect, useRef, useState } from "react";

import M from "materialize-css";

const QRModal = ({ setQrModalInstance, onPaySuccess }) => {
  const modalRef = useRef(null);

  const [instance, setInstance] = useState(null);

  useEffect(() => {
    if (modalRef.current) {
      const instance = M.Modal.init(modalRef.current);
      setQrModalInstance(instance);
      setInstance(instance);
    }
  }, [setQrModalInstance]);

  return (
    <div id="qr-modal" className="modal" ref={modalRef}>
      <div className="modal-content">
        <button onClick={() => {onPaySuccess(); instance.close()}}>Payed</button>
      </div>
    </div>
  );
};

export default QRModal;
