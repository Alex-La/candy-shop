import React, { Fragment } from "react";
import OrderCardProducts from "./OrderCardProducts";

const OrderCard = ({ orders, loading }) => {

  const returnPaidStatus = (code) => {
    if (code === "1") return "Заказ оплачен Мерчанту";
    else return "Оплата заказа при получении";
  };

  const returnDeliveryMethod = (code) => {
    switch (code) {
      case "1":
        return "Наш курьер по Москве";
      case "2":
        return "Почта РФ";
      case "4":
        return "Самовывоз Москва, м. Автозаводская";
      case "5":
        return "Постомат PickPoint";
      case "8":
        return "Курьер по России";
      case "10":
        return "Курьер по России (СДЭК до двери)";
      default:
        return "";
    }
  }

  const returnStatusName = (code) => {
    switch (code) {
      case "1":
        return "Принят";
      case "2":
        return "Обработка на складе";
      case "3":
        return "Ожидает подтверждения";
      case "4":
        return "Товар забронирован";
      case "5":
        return "Готов к отгрузке";
      case "6":
        return "Выслан на почту";
      case "7":
        return "Оплачен и доставлен";
      case "8":
        return "Отказ";
      case "9":
        return "Комплектация товара на складе";
      case "10":
        return "Злонамеренный отказ";
      case "11":
        return "Отправлен с курьером";
      case "12":
        return "Отгружен. Ожидаем оплату";
      case "13":
        return "Удален";
      default:
        return "";
    }
  }

  const returnAids = (OrderItems) => {
    const aids = [];
    OrderItems.map(item => (
      aids.push(item.OrderItems_Item[0].aID[0])));
    return aids;
  }

  const returnTrackData = (data) => {
    if (!data) return "Не назначен, либо не поддерживается";
    return (
      <Fragment>
        <p className="black-text">Идентификатор отправления: {data[0].PostCode[0]}</p>
        <p className="black-text">Cтатус отправления: {data[0].PostStatusName[0]}</p>
        <p className="black-text">Адрес отслеживания: {data[0].TrackingUrl[0]}</p>
      </Fragment>
    );
  }

  const dataMap = () => {
    return orders.map((item, index) => (
      <div key={index} className="card">
        <div className="card-content white-text">
          <span className="card-title black-text">Заказ номер: <b className="orange-text">{item.Orders_Item[0].orderID[0]}</b></span>
          <table className="striped black-text">
            <tbody>
              <tr>
                <td>Дата размещения заказа</td>
                <td>{item.Orders_Item[0].ExtDateOfAdded[0]}</td>
              </tr>
              <tr>
                <td>Статус оплаты заказа</td>
                <td>{returnPaidStatus(item.Orders_Item[0].ExtOrderPaid[0])}</td>
              </tr>
              <tr>
                <td>Конечная стоимость товаров</td>
                <td>{item.Orders_Item[0].ExtOrderTotal[0]}</td>
              </tr>
              <tr>
                <td>Стоимость доставки</td>
                <td>{item.Orders_Item[0].ExtDeliveryCost[0]}</td>
              </tr>
              <tr>
                <td>Способ доставки</td>
                <td>{returnDeliveryMethod(item.Orders_Item[0].dsDelivery[0])}</td>
              </tr>
              <tr>
                <td>Плановая дата отгрузки заказа со склада</td>
                <td>{item.Orders_Item[0].pickupDate[0]}</td>
              </tr>
              <tr>
                <td>Текущий статус заказа</td>
                <td>{returnStatusName(item.Orders_Item[0].status[0])}</td>
              </tr>
              <tr>
                <td>Трекинг отправления</td>
                <td>{returnTrackData(item.Orders_Item[0].postData)}</td>
              </tr>
            </tbody>
          </table>

          <OrderCardProducts aids={returnAids(item.Orders_Item[0].OrderItems)} />
        </div>
      </div>
    ));
  }

  return orders ? (
    <div className="row">
      <div className="col s12">
        {loading ? <div className="progress">
          <div className="indeterminate"></div>
        </div> : dataMap()}
      </div>
    </div>
  ) : <Fragment />;
}

export default OrderCard;