import React from "react";

import CategoryCard from "../../assets/CategoryCard/CategoryCard";

const data = [
  {
    photo: "/static/218.jpg",
    name: "Фаллоимитаторы",
    path: "/catalog/for-female/falloimetators",
  },
  {
    photo: "/static/179413.jpg",
    name: "Анальные игрушки",
    path: "/catalog/for-female/anal-toys",
  },
  {
    photo: "/static/137293.jpg",
    name: "Насадки и удлинители",
    path: "/catalog/for-male/nozzles-and-extensions",
  },
  {
    photo: "/static/56253.jpg",
    name: "Вибраторы",
    path: "/catalog/for-female/vibrators",
  },
];

const Popular = () => {
  return (
    <div className="section">
      <div className="container">
        <h3>ПОПУЛЯРНЫЕ КАТЕГОРИИ</h3>
        <div className="row">
          {data.map((dat, i) => (
            <CategoryCard dat={dat} size={true} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
