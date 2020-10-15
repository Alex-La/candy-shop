import React, { useEffect } from "react";

const OrderCard = ({ orders }) => {

  useEffect(() => {
    console.log(orders);
  }, [orders]);

  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-content white-text">
            <span className="card-title black-text">Заказ номер: <b className="orange-text">816387</b></span>
            <table className="striped black-text">
              <tbody>
                <tr>
                  <td>Дата размещения заказа</td>
                  <td>2020-10-15 14:59:39</td>
                </tr>
                <tr>
                  <td>Статус оплаты заказа</td>
                  <td>Заказ оплачен Мерчанту</td>
                </tr>
                <tr>
                  <td>Конечная стоимость товаров</td>
                  <td>459.00</td>
                </tr>
                <tr>
                  <td>Стоимость доставки</td>
                  <td>300.00</td>
                </tr>
                <tr>
                  <td>Способ доставки</td>
                  <td>Постомат PickPoint</td>
                </tr>
                <tr>
                  <td>Плановая дата отгрузки заказа со склада</td>
                  <td>2020-10-16 14:00:00</td>
                </tr>
                <tr>
                  <td>Текущий статус заказа</td>
                  <td>Принят</td>
                </tr>
                <tr>
                  <td>Трекинг отправления</td>
                  <td>Пока что не назначен, либо не поддерживается</td>
                </tr>
              </tbody>
            </table>

            <div className="section">
              <div className={`card ${window.innerWidth > 425 && "horizontal"}`}>
                <div className="card-image">
                  <img src="https://feed.p5s.ru/images/small/18/small_180066.jpg" />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <h6 className="orange-text">Чёрная бесшовная юбка из латекса</h6>
                    <p className="black-text">Юбка изготовлена из бесшовного латекса. Для сохранности обработана тальком. Правила ухода за изделиями из латекса смотрите на упаковке, это позволит надолго сохранить ваши вещи в хорошем состоянии и продлить срок их службы.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;