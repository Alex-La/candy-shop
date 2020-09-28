import React, { useState } from "react";

const InputNumber = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue((val) => val + 1);
  };

  const decrement = () => {
    if (value === 0) return;
    setValue((val) => val - 1);
  };

  return (
    <div className="input-number">
      <button type="button" onClick={decrement}>
        &minus;
      </button>
      <span>{value}</span>
      <button type="button" onClick={increment}>
        &#43;
      </button>
    </div>
  );
};

export default InputNumber;
