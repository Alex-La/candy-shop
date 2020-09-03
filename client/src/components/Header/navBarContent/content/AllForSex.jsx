import React from "react";

import { Link } from "react-router-dom";

const AllForSex = () => {
  return (
    <div className="section">
      <div className="row">
        <div className="col s12 m3">
          <div className="icon-block">
            <ul className="collection with-header">
              <li className="collection-header">
                <Link to="/catalog/all-for-sex/cosmetics-with-pheromones">
                  <h6 className="black-text">Косметика с феромонами</h6>
                </Link>
              </li>
              <Link
                to="/catalog/all-for-sex/cosmetics-with-pheromones/perfumes-and-lubricants-for-female"
                className="collection-item grey-text"
              >
                Духи и смазки для женщин
              </Link>
              <Link
                to="/catalog/all-for-sex/cosmetics-with-pheromones/perfumes-and-lubricants-for-male"
                className="collection-item grey-text"
              >
                Духи и смазки для мужчин
              </Link>
              <Link
                to="/catalog/all-for-sex/cosmetics-with-pheromones/pheromone-concentrates"
                className="collection-item grey-text"
              >
                Концентраты феромонов
              </Link>
              <Link
                to="/catalog/all-for-sex/cosmetics-with-pheromones/body-care-products-cosmetics"
                className="collection-item grey-text"
              >
                Средства по уходу за телом, косметика
              </Link>
            </ul>
          </div>
        </div>

        <div className="col s12 m3">
          <div className="icon-block">
            <ul className="collection with-header">
              <li className="collection-header">
                <Link to="/catalog/all-for-sex/pleasant-trifles">
                  <h6 className="black-text">Приятные мелочи</h6>
                </Link>
              </li>
              <Link
                to="/catalog/all-for-sex/pleasant-trifles/vape"
                className="collection-item grey-text"
              >
                Вейп
              </Link>
              <Link
                to="/catalog/all-for-sex/pleasant-trifles/excitatory-agents"
                className="collection-item grey-text"
              >
                Возбуждающие средства
              </Link>
              <Link
                to="/catalog/all-for-sex/pleasant-trifles/darsonval"
                className="collection-item grey-text"
              >
                Дарсонваль
              </Link>
              <Link
                to="/catalog/all-for-sex/pleasant-trifles/christmas-decorations"
                className="collection-item grey-text"
              >
                Ёлочные ишрушки
              </Link>
              <Link
                to="/catalog/all-for-sex/pleasant-trifles/intimate-hygiene"
                className="collection-item grey-text"
              >
                Интимная гигиена
              </Link>
              <Link
                to="/catalog/all-for-sex/pleasant-trifles/masks-antiseptics"
                className="collection-item grey-text"
              >
                Маски, антисептики
              </Link>
              <Link
                to="/catalog/all-for-sex/pleasant-trifles/condoms"
                className="collection-item grey-text"
              >
                Презервативы
              </Link>
              <Link
                to="/catalog/all-for-sex/pleasant-trifles/souvenirs"
                className="collection-item grey-text"
              >
                Сувениры
              </Link>
              <Link
                to="/catalog/all-for-sex/pleasant-trifles/batteries-and-accessories"
                className="collection-item grey-text"
              >
                Элементы питания и аксессуары
              </Link>
              <Link
                to="/catalog/all-for-sex/pleasant-trifles/erotic-literature"
                className="collection-item grey-text"
              >
                Эротическая литература
              </Link>
              <Link
                to="/catalog/all-for-sex/pleasant-trifles/erotic-games"
                className="collection-item grey-text"
              >
                Эротические игры
              </Link>
              <Link
                to="/catalog/all-for-sex/pleasant-trifles/erotic-sets"
                className="collection-item grey-text"
              >
                Эротические наборы
              </Link>
            </ul>
          </div>
        </div>

        <div className="col s12 m3">
          <div className="icon-block">
            <ul className="collection with-header">
              <li className="collection-header">
                <Link to="/catalog/all-for-sex/sex-furniture-and-swings">
                  <h6 className="black-text">Секс-мебель и качели</h6>
                </Link>
              </li>
              <Link
                to="/catalog/all-for-sex/sex-furniture-and-swings/sex-swings"
                className="collection-item grey-text"
              >
                Секс-качели
              </Link>
              <Link
                to="/catalog/all-for-sex/sex-furniture-and-swings/sex-machines"
                className="collection-item grey-text"
              >
                Секс-машины
              </Link>
              <Link
                to="/catalog/all-for-sex/sex-furniture-and-swings/sex-furniture"
                className="collection-item grey-text"
              >
                Секс-мебель
              </Link>
            </ul>
          </div>
        </div>

        <div className="col s12 m3">
          <div className="icon-block">
            <ul className="collection with-header">
              <li className="collection-header">
                <Link to="/catalog/all-for-sex/lubricants">
                  <h6 className="black-text">Смазки и лубриканы</h6>
                </Link>
              </li>
              <Link
                to="/catalog/all-for-sex/lubricants/anal-lubricants"
                className="collection-item grey-text"
              >
                Анальные смазки
              </Link>
              <Link
                to="/catalog/all-for-sex/lubricants/exciting"
                className="collection-item grey-text"
              >
                Возбуждающие
              </Link>
              <Link
                to="/catalog/all-for-sex/lubricants/massage-oils-and-candles"
                className="collection-item grey-text"
              >
                Массажные масла и свечи
              </Link>
              <Link
                to="/catalog/all-for-sex/lubricants/water-based"
                className="collection-item grey-text"
              >
                На водной основе
              </Link>
              <Link
                to="/catalog/all-for-sex/lubricants/silicone-based"
                className="collection-item grey-text"
              >
                На силиконовой основе
              </Link>
              <Link
                to="/catalog/all-for-sex/lubricants/prolongators"
                className="collection-item grey-text"
              >
                Пролонгаторы
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllForSex;
