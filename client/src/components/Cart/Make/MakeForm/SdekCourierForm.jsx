import React, { useContext } from "react";

import OrderContext from "../../../../context/OrderContext";

const SdekCourierForm = () => {
  const { sdekCourierForm, setSdekCourierForm } = useContext(OrderContext);

  const onFormChange = (e) => {
    setSdekCourierForm({ ...sdekCourierForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="row">
      <div className="input-field col s12 l6">
        <input
          id="street"
          type="text"
          placeholder="Улица*"
          name="street"
          value={sdekCourierForm.postIndex}
          onChange={onFormChange}
        />
      </div>
      <div className="input-field col s12 l6">
        <input
          id="flat"
          type="text"
          placeholder="Квартира"
          name="flat"
          value={sdekCourierForm.postIndex}
          onChange={onFormChange}
        />
      </div>
      <div className="input-field col s12 l6">
        <input
          id="house_number"
          type="text"
          placeholder="Номер дома*"
          name="houseNumber"
          value={sdekCourierForm.postIndex}
          onChange={onFormChange}
        />
      </div>
      <div className="input-field col s12 l6">
        <input
          id="add_info"
          type="text"
          placeholder="Доп. информация(подъезд, этаж)"
          name="addInfo"
          value={sdekCourierForm.postIndex}
          onChange={onFormChange}
        />
      </div>
    </div>
  );
};

export default SdekCourierForm;
