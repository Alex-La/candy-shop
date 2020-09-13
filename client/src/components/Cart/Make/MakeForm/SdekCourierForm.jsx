import React, { useState } from "react";

const SdekCourierForm = () => {
  const [form, setForm] = useState({
    street: "",
    flat: "",
    houseNumber: "",
    addInfo: "",
  });

  const onFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="row">
      <div className="input-field col s12 l6">
        <input
          id="street"
          type="text"
          placeholder="Улица*"
          name="street"
          value={form.postIndex}
          onChange={onFormChange}
        />
      </div>
      <div className="input-field col s12 l6">
        <input
          id="flat"
          type="text"
          placeholder="Квартира"
          name="flat"
          value={form.postIndex}
          onChange={onFormChange}
        />
      </div>
      <div className="input-field col s12 l6">
        <input
          id="house_number"
          type="text"
          placeholder="Номер дома*"
          name="houseNumber"
          value={form.postIndex}
          onChange={onFormChange}
        />
      </div>
      <div className="input-field col s12 l6">
        <input
          id="add_info"
          type="text"
          placeholder="Доп. информация(подъезд, этаж)"
          name="addInfo"
          value={form.postIndex}
          onChange={onFormChange}
        />
      </div>
    </div>
  );
};

export default SdekCourierForm;
