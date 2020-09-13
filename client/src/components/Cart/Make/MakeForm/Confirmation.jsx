import React, { Fragment, useState } from "react";

const Confirmation = () => {
  const [comment, setComment] = useState("");

  return (
    <Fragment>
      <h5 className="first center">4. Подтверждение и отправка</h5>

      <div className="input-field col s12">
        <textarea
          placeholder="Любая дополнительная информация"
          id="comment"
          className="materialize-textarea"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <label className="active" htmlFor="textarea1">
          Комментарии к заказу
        </label>
      </div>
    </Fragment>
  );
};

export default Confirmation;
