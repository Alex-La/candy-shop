import React, { useContext } from "react";

import OrderContext from "../../../../context/OrderContext";

const RussianPostForm = () => {
  const { russianPostForm, setRussianPostForm } = useContext(OrderContext);

  const onFormChange = (e) => {
    setRussianPostForm({ ...russianPostForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="row">
      <div className="input-field col s12 l6">
        <input
          id="post_index"
          type="text"
          placeholder="Почтовый индекс*"
          name="postIndex"
          value={russianPostForm.postIndex}
          onChange={onFormChange}
        />
      </div>
      <div className="input-field col s12 l6">
        <input
          id="house_number"
          type="text"
          placeholder="Номер дома*"
          name="houseNumber"
          value={russianPostForm.houseNumber}
          onChange={onFormChange}
        />
      </div>
      <div className="input-field col s12 l6">
        <input
          id="street"
          type="text"
          placeholder="Улица*"
          name="street"
          value={russianPostForm.street}
          onChange={onFormChange}
        />
      </div>
      <div className="input-field col s12 l6">
        <input
          id="flat"
          type="text"
          placeholder="Квартира"
          name="flat"
          value={russianPostForm.flat}
          onChange={onFormChange}
        />
      </div>
    </div>
  );
};

export default RussianPostForm;
