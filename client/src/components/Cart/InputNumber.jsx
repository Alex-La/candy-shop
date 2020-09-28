import React, { useState, useEffect, useContext } from "react";

import Context from "../../context/Context";

const InputNumber = ({ vendorCode }) => {
  const [value, setValue] = useState(1);

  const { productsInCart } = useContext(Context);

  useEffect(() => {
    for (let i in productsInCart) {
      if (productsInCart[i].vendor_code === vendorCode) {
        productsInCart[i].count = value;
      }
    }
    localStorage.setItem("products_in_cart", JSON.stringify(productsInCart));
  }, [vendorCode, value, productsInCart]);

  const increment = () => {
    setValue((val) => val + 1);
  };

  const decrement = () => {
    if (value === 1) return;
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
