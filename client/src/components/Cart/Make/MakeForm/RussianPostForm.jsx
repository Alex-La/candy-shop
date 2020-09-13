import React, { useState } from "react";

const RussianPostForm = () => {
  const [form, setForm] = useState({
    postIndex: "",
    houseNumber: "",
    street: "",
    flat: "",
  });

  const onFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="row">
      <div className="input-field col s12 l6">
        <input
          id="post_index"
          type="text"
          placeholder="Почтовый индекс*"
          name="postIndex"
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
          value={form.houseNumber}
          onChange={onFormChange}
        />
      </div>
      <div className="input-field col s12 l6">
        <input
          id="street"
          type="text"
          placeholder="Улица*"
          name="street"
          value={form.street}
          onChange={onFormChange}
        />
      </div>
      <div className="input-field col s12 l6">
        <input
          id="flat"
          type="text"
          placeholder="Квартира"
          name="flat"
          value={form.flat}
          onChange={onFormChange}
        />
      </div>
    </div>
  );
};

export default RussianPostForm;
