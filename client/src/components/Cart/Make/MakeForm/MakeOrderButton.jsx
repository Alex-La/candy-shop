import React, { useContext, useState, Fragment } from "react";

import Context from "../../../../context/Context";

import M from "materialize-css";

import useOrderAPI from "../../../../hooks/useOrderAPI";

import QRModal from "./QRModal";

const MakeOrderButton = ({
  policy,
  data,
  checkContactDataForm,
  checkDeliveryMethod,
}) => {
  const [openQrModal, setOpenQrModal] = useState(false);

  const { productsInCart, setProductsInCart } = useContext(Context);

  const { makeOrder } = useOrderAPI(productsInCart);

  const onSendOrder = () => {
    const contactForm = checkContactDataForm(
      data.contactDataForm,
      data.address
    );
    if (contactForm) return M.toast({ html: contactForm });

    const delivery = checkDeliveryMethod(data);
    if (delivery) return M.toast({ html: delivery });

    if (data.paymentMethodRadio === "card_payment") return setOpenQrModal(true);

    makeOrder(data);

    //Clear cart
    // setProductsInCart(null);
    // localStorage.removeItem("products_in_cart");
  };

  return (
    <Fragment>
      <button
        className={`waves-effect waves-light btn-large black right ${
          !policy && "disabled"
        }`}
        onClick={onSendOrder}
      >
        Заказать
      </button>

      <QRModal openQRModal={openQrModal} setOpenQRModal={setOpenQrModal} />
    </Fragment>
  );
};

export default MakeOrderButton;
