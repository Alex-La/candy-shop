import React, { useContext, useState, Fragment, useEffect } from "react";

import Context from "../../../../context/Context";

import M from "materialize-css";

import useOrderAPI from "../../../../hooks/useOrderAPI";

import QRModal from "./QRModal";
import SuccessOrderModal from "./SuccessOrderModal";

const MakeOrderButton = ({
  policy,
  data,
  checkContactDataForm,
  checkDeliveryMethod,
}) => {
  const [openQrModal, setOpenQrModal] = useState(false);
  const [instance, setInstance] = useState(null);

  const { productsInCart, setProductsInCart } = useContext(Context);

  const order = useOrderAPI(productsInCart);

  useEffect(() => {
    if (order.data) M.toast({ html: order.data.createOrder.ResultStatusMsg });
    if (order.data && order.data.createOrder.ResultStatus[0] === "5") {
      if (instance) instance.open();
    }
  }, [order.data, instance]);

  const onSendOrder = () => {
    const contactForm = checkContactDataForm(
      data.contactDataForm,
      data.address
    );
    if (contactForm) return M.toast({ html: contactForm });

    const delivery = checkDeliveryMethod(data);
    if (delivery) return M.toast({ html: delivery });

    if (data.paymentMethodRadio === "card_payment") return setOpenQrModal(true);

    order.makeOrder(data);

    //Clear cart
    // setProductsInCart(null);
    // localStorage.removeItem("products_in_cart");
  };

  return (
    <Fragment>
      <button
        className={`waves-effect waves-light btn-large black right ${
          !policy && order.loading && "disabled"
        }`}
        onClick={onSendOrder}
      >
        Заказать
      </button>

      <QRModal openQRModal={openQrModal} setOpenQRModal={setOpenQrModal} />
      <SuccessOrderModal setInstance={setInstance} />
    </Fragment>
  );
};

export default MakeOrderButton;
