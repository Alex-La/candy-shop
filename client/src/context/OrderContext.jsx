import { createContext } from "react";

const OrderContext = createContext({
  contactDataForm: null,
  setContactDataForm: () => {},
  address: null,
  setAddress: () => {},
  deliveryMethodRadio: null,
  setDeliveryMethodRadio: () => {},
  sdekTerminalData: null,
  setSdekTerminalData: () => {},
  pickPointData: null,
  setPickPointData: () => {},
  sdekCourierForm: null,
  setSdekCourierForm: () => {},
  russianPostForm: null,
  setRussianPostForm: () => {},
  courierMoscowForm: null,
  setCourierMoscowForm: () => {},
  paymentMethodRadio: null,
  setPaymentMethodRadio: () => {},
  comment: null,
  setComment: () => {},
});

export default OrderContext;
