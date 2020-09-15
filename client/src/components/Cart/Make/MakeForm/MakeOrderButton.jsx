import React from "react";

import M from "materialize-css";

const MakeOrderButton = ({
  policy,
  data,
  checkContactDataForm,
  checkDeliveryMethod,
}) => {
  const onSendOrder = () => {
    const contactForm = checkContactDataForm(
      data.contactDataForm,
      data.address
    );
    if (contactForm) return M.toast({ html: contactForm });

    const delivery = checkDeliveryMethod(data);
    if (delivery) return M.toast({ html: delivery });
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
