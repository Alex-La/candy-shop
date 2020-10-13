import React, { useContext, useState, Fragment, useEffect } from "react";

import Context from "../../../../context/Context";

import M from "materialize-css";

import useOrderAPI from "../../../../hooks/useOrderAPI";
import { useHistory } from "react-router-dom";

import QRModal from "./QRModal";

const MakeOrderButton = ({
  policy,
  data,
  checkContactDataForm,
  checkDeliveryMethod,
}) => {
  const [qrModalInstance, setQrModalInstance] = useState(null);

  const { productsInCart, setProductsInCart } = useContext(Context);
  const history = useHistory();

  const order = useOrderAPI(productsInCart);

  useEffect(() => {
    if (order.loading) M.toast({ html: "loading..." });
    if (order.data) M.toast({ html: order.data.createOrder.ResultStatusMsg });
    if (order.data && order.data.createOrder.ResultStatus[0] === "1") {
      history.push("/carts/make/success");

      setProductsInCart(null);
      localStorage.removeItem("products_in_cart");
    }
  }, [order.data, order.loading, history, setProductsInCart]);

  const onSendOrder = () => {
    const contactForm = checkContactDataForm(
      data.contactDataForm,
      data.address
    );
    if (contactForm) return M.toast({ html: contactForm });

    const delivery = checkDeliveryMethod(data);
    if (delivery) return M.toast({ html: delivery });

    if (data.paymentMethodRadio === "card_payment") return qrModalInstance.open();

    order.makeOrder(data);
  };

  const onPaySuccess = () => {
    order.makeOrder(data);
  }

  return (
    <Fragment>
      <button
        className={`waves-effect waves-light btn-large black right ${
          !policy && !order.loading && "disabled"
        }`}
        onClick={onSendOrder}
      >
        Заказать
      </button>

      <QRModal setQrModalInstance={setQrModalInstance} onPaySuccess={onPaySuccess}/>
    </Fragment>
  );
};

export default MakeOrderButton;
