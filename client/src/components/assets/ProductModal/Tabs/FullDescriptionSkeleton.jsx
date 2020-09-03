import React from "react";

import Skeleton from "react-loading-skeleton";

const FullDescriptionSkeleton = () => {
  return (
    <div className="row">
      <div className="col s12">
        <h5>
          <Skeleton width="80%" />
        </h5>

        <Skeleton count={5} />
        <Skeleton width="90%" />

        <ul className="collection">
          <li className="collection-item grey lighten-5">
            <b>Артикул:</b> <Skeleton width="100px" />
          </li>
          <li className="collection-item grey lighten-5">
            <b>Упаковка:</b> <Skeleton width="100px" />
          </li>
          <li className="collection-item grey lighten-5">
            <b>Материал:</b> <Skeleton width="100px" />
          </li>
          <li className="collection-item grey lighten-5">
            <b>Функция:</b> <Skeleton width="100px" />
          </li>
          <li className="collection-item grey lighten-5">
            <b>Отгрузка со склада:</b> <Skeleton width="100px" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FullDescriptionSkeleton;
