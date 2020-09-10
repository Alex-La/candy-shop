import { useContext } from "react";

import Context from "../context/Context";

const useRemoveFromCart = () => {
  const { productsInCart, setProductsInCart } = useContext(Context);

  const removeFromCart = (vendor_code) => {
    const products = productsInCart;
    const filtred = products.filter((el) => el.vendor_code !== vendor_code);
    localStorage.setItem("products_in_cart", JSON.stringify(filtred));
    setProductsInCart(filtred);
  };

  return { removeFromCart };
};

export default useRemoveFromCart;
