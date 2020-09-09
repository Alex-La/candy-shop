/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import M from "materialize-css";

import Context from "../../../context/Context";

import useRemoveFromCart from "../../../hooks/useRemoveFromCart";

const CartModal = () => {
  const modalRef = useRef(null);

  const { removeFromCart } = useRemoveFromCart();

  const {
    productsInCart,
    setCurrentVendorCode,
    setCartModalInstance,
  } = useContext(Context);

  useEffect(() => {
    if (modalRef.current) {
      const instance = M.Modal.init(modalRef.current);
      setCartModalInstance(instance);
    }
  }, [setCartModalInstance]);

  const onOpenModal = (e, vendor_code) => {
    e.preventDefault();
    setCurrentVendorCode(parseInt(vendor_code, 10));
  };

  return (
    <div id="cart-modal" className="modal bottom-sheet" ref={modalRef}>
      <div className="modal-content">
        <ul className="collection">
          {productsInCart && productsInCart.length !== 0 ? (
            productsInCart.map((prod, index) => (
              <li key={index} className="collection-item avatar">
                <img
                  src={prod.image_small}
                  alt={prod.image_small}
                  className="circle"
                />
                <h5 className="title truncate">{prod.name}</h5>
                <p className="orange-text">{prod.price}</p>
                <div className="secondary-content">
                  <a
                    href=""
                    onClick={(e) => removeFromCart(e, prod.vendor_code)}
                  >
                    <i className="material-icons black-text">close</i>
                  </a>
                  <br />
                  <a
                    className="modal-trigger"
                    href="#ProductModal"
                    onClick={(e) => onOpenModal(e, prod.vendor_code)}
                  >
                    <i className="material-icons black-text">open_in_new</i>
                  </a>
                </div>
              </li>
            ))
          ) : (
            <li className="collection-item avatar">
              <h5 className="title orange-text">
                На данный момент в корзине пусто!
              </h5>
            </li>
          )}
        </ul>
      </div>
      <div className="modal-footer">
        <Link
          to="/carts"
          className="modal-close waves-effect waves-dark btn-flat"
        >
          К корзине
        </Link>
      </div>
    </div>
  );
};

export default CartModal;
