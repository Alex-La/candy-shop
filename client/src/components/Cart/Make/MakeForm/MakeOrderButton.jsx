import React, { useContext } from "react";

import Context from "../../../../context/Context";

import M from "materialize-css";

import useOrderAPI from "../../../../hooks/useOrderAPI";

const MakeOrderButton = ({
  policy,
  data,
  checkContactDataForm,
  checkDeliveryMethod,
}) => {
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

    makeOrder(data);

    //Clear cart
    // setProductsInCart(null);
    // localStorage.removeItem("products_in_cart");
  };

  return (
    <button
      className={`waves-effect waves-light btn-large black right ${
        !policy && "disabled"
      }`}
      onClick={onSendOrder}
    >
      Заказать
    </button>
  );
};

export default MakeOrderButton;
