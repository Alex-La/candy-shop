import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const height = () => {
  if (window.innerWidth >= 2560) return 400;
  if (window.innerWidth >= 1440) return 250;
  return 200;
};

const OverviewSkeleton = () => {
  return (
    <div className="row">
      <div className="col s12 m6">
        <Skeleton height={height()} />
      </div>

      <div className="col s12 m6">
        <h4>
          <Skeleton style={{ marginTop: 5 }} width="70%" />
          <Skeleton />
        </h4>
        <p>
          <b>Артикул:</b> <Skeleton width="50px" />, ID:{" "}
          <Skeleton width="50px" />
        </p>
        <b>Дата отгрузки:</b> <Skeleton width="150px" />{" "}
        <SkeletonTheme color="#4caf50" highlightColor="#e8f5e9">
          <Skeleton width="70px" height="30px" />
        </SkeletonTheme>
        <p>
          <Skeleton count={5} />
        </p>
        <div className="row" style={{ marginTop: 20 }}>
          <div className="col s2">
            <b>Цвет:</b>
          </div>
          <div className="col s10">
            <Skeleton width={25} height={25} />
          </div>
        </div>
        <br />
        <h4>
          <SkeletonTheme color="#ff9800" highlightColor="#fff3e0">
            <Skeleton width="40%" />
          </SkeletonTheme>
        </h4>
      </div>
    </div>
  );
};

export default OverviewSkeleton;
