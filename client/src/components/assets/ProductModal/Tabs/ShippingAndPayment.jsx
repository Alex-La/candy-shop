import React from "react";

const ShippingAndPayment = () => {
  return (
    <div className="row">
      <div className="col s12 m6">
        <h6>
          <b>Доставка</b>
          <p>
            Доставка заказов бесплатная в том случае, если сумма заказа
            превышает 3000 рублей.
          </p>
          <p>
            Стоимость доставки заказов по России на меньшую сумму составляет 300
            рублей в не зависимости от региона России.
          </p>
          <ul className="collection">
            <li className="collection-item grey lighten-5">
              Курьером - по Москве.
            </li>
            <li className="collection-item grey lighten-5">
              Курьером DPD - по России.
            </li>
            <li className="collection-item grey lighten-5">
              Курьером СДЭК - по России.
            </li>
            <li className="collection-item grey lighten-5">
              Постоматы и пункты самовывоза PickPoint - по Москве и по России.
            </li>
            <li className="collection-item grey lighten-5">
              Самовывоз - метро Автозаводская.
            </li>
            <li className="collection-item grey lighten-5">
              Почтой - По Москве и в пределах России.
            </li>
          </ul>
        </h6>
      </div>
      <div className="col s12 m6">
        <h6>
          <b>Конфиденциальность</b>
          <p>
            Упаковка заказов максимально нейтральная. Товары, заказанные Вами,
            упаковываются в непрозрачный пакет, который в свою очередь
            помещается в плаcтиковую сумку.
          </p>
          <ul className="collection">
            <li className="collection-item grey lighten-5">
              На пакетах нет рекламы нашего магазина или товаров, также на них
              не указано название магазина.
            </li>
            <li className="collection-item grey lighten-5">
              По внешнему виду невозможно догадаться о содержимом, но Вы всегда
              можете проверить комплектацию полученного заказа до его оплаты.
            </li>
            <li className="collection-item grey lighten-5">
              Курьер не сообщает Вашим сотрудникам или родственникам из какого
              магазина он приехал и что привез.
            </li>
          </ul>
        </h6>
      </div>
    </div>
  );
};

export default ShippingAndPayment;
