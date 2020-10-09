import React, { useContext } from "react";

import Context from "../../../../context/Context";

import M from "materialize-css";

import PRODUCTS_TO_ORDER_QUERY from "../../../../graphql/queries/productsToOrder";
import { useQuery } from "@apollo/react-hooks";

const MakeOrderButton = ({
  policy,
  data,
  checkContactDataForm,
  checkDeliveryMethod,
}) => {
  const { productsInCart, setProductsInCart } = useContext(Context);

  const queryRes = useQuery(PRODUCTS_TO_ORDER_QUERY, { variables: { 
    vendorCode: productsInCart && productsInCart.map(({vendor_code}) => vendor_code), 
    size: productsInCart && productsInCart.map(item => item.size),
    color: productsInCart && productsInCart.map(item => item.color)
} });

  const onSendOrder = () => {
    const contactForm = checkContactDataForm(
      data.contactDataForm,
      data.address
    );
    if (contactForm) return M.toast({ html: contactForm });

    const delivery = checkDeliveryMethod(data);
    if (delivery) return M.toast({ html: delivery });

    console.log(queryRes.data && queryRes.data.productsToOrder);
    console.log(data);

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
