import React, { useContext } from "react";

import OrderContext from "../../../../context/OrderContext";

const CourierMoscowForm = () => {
  const { courierMoscowForm, setCourierMoscowForm } = useContext(OrderContext);

  const onFormChange = (event) => {
    setCourierMoscowForm({
      ...courierMoscowForm,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="row">
      <div className="input-field col s12 l6">
        <input
          id="street"
          type="text"
          placeholder="Улица*"
          name="street"
          value={courierMoscowForm.street}
          onChange={onFormChange}
        />
      </div>
      <div className="input-field col s12 l6">
        <input
          id="flat"
          type="text"
          placeholder="Квартира"
          name="flat"
          value={courierMoscowForm.flat}
          onChange={onFormChange}
        />
      </div>
      <div className="input-field col s12 l6">
        <input
          id="house_number"
          type="text"
          placeholder="Номер дома*"
          name="houseNumber"
          value={courierMoscowForm.houseNumber}
          onChange={onFormChange}
        />
      </div>
      <div className="input-field col s12 l6">
        <input
          id="add_info"
          type="text"
          placeholder="Доп. информация(подъезд, этаж)"
          name="addInfo"
          value={courierMoscowForm.addInfo}
          onChange={onFormChange}
        />
      </div>
    </div>
  );
};

export default CourierMoscowForm;
