import PRODUCTS_TO_ORDER_QUERY from "../graphql/queries/productsToOrder";
import CREATE_ORDER_MUTATION from "../graphql/mutations/createOrder";
import { useQuery, useMutation } from "@apollo/react-hooks";

const useOrderAPI = (productsInCart) => {
  const products = useQuery(PRODUCTS_TO_ORDER_QUERY, {
    variables: {
      vendorCode:
        productsInCart && productsInCart.map(({ vendor_code }) => vendor_code),
      size: productsInCart && productsInCart.map((item) => item.size),
      color: productsInCart && productsInCart.map((item) => item.color),
    },
  });

  const [sendOrder, { data, loading }] = useMutation(CREATE_ORDER_MUTATION);

  const makeOrder = (data) => {
    console.log(data);
    console.log(products.data);
    console.log(productsInCart);

    const order = {};
    const orderArr = [];
    for (let i in products.data.productsToOrder) {
      for (let j in productsInCart) {
        if (
          products.data.productsToOrder[i].vendor_code ===
          productsInCart[j].vendor_code
        ) {
          orderArr.push(
            products.data.productsToOrder[i].aid +
              "-" +
              productsInCart[j].count +
              "-" +
              products.data.productsToOrder[i].price_retail
          );
        }
      }
    }
    order.order = orderArr;

    if (data.paymentMethodRadio === "card_payment") order.ExtOrderPaid = "1";
    else order.ExtOrderPaid = "0";

    if (parseInt(localStorage.getItem("total_price"), 10) <= 3000)
      order.ExtDeliveryCost = "300";
    else order.ExtDeliveryCost = "0";

    switch (data.deliveryMethodRadio) {
      case "pick_point":
        order.dsDelivery = "5";
        order.dsPickUpId = data.pickPointData.id;
        break;
      case "sdek_terminals":
        order.dsDelivery = "11";
        order.dsPickUpId = data.sdekTerminalData.id;
        break;
      case "sdek_courier":
        order.dsStreet =
          data.sdekCourierForm.street + " " + data.sdekCourierForm.addInfo;
        order.dsHouse = data.sdekCourierForm.houseNumber;
        order.dsFlat = data.sdekCourierForm.flat;
        order.dsDelivery = "10";
        break;
      case "russian_post":
        order.dsHouse = data.russianPostForm.houseNumber;
        order.dsStreet = data.russianPostForm.street;
        order.dsFlat = data.russianPostForm.flat;
        order.dsPostcode = data.russianPostForm.postIndex;
        order.dsDelivery = "2";
        break;
      case "courier_moscow":
        order.dsHouse = data.courierMoscowForm.houseNumber;
        order.dsStreet =
          data.courierMoscowForm.street + " " + data.courierMoscowForm.addInfo;
        order.dsFlat = data.courierMoscowForm.flat;
        order.dsDelivery = "1";
        break;
      case "pickup":
        order.dsDelivery = "4";
        break;
    }

    const fio = [];
    fio.push(data.contactDataForm.name);
    fio.push(data.contactDataForm.surname);

    order.dsFio = fio;

    order.dsMobPhone = data.contactDataForm.number;
    order.dsEmail = data.contactDataForm.email;
    order.dsCity = data.address.value;
    order.dsCountry = data.address.data.country;
    order.dsArea = data.address.data.region_with_type;
    order.dsComments = data.comment;

    console.log(order);
  };

  return { makeOrder, data, loading };
};

export default useOrderAPI;
