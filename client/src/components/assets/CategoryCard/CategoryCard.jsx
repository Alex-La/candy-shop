import React, { useState } from "react";

import { useHistory } from "react-router-dom";

const CategoryCard = ({ dat, size }) => {
  const [isHovered, setIsHovered] = useState(false);

  const history = useHistory();

  return (
    <div
      className={`col card horizontal ${isHovered && "z-depth-2"}`}
      style={{ cursor: "pointer", margin: 5 }}
      onClick={() => history.push(dat.path)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-image">
        <img
          style={{ marginTop: 10, marginLeft: 10 }}
          width={size ? "110px" : "50px"}
          height={size ? "110px" : "50px"}
          src={dat.photo}
          alt={dat.photo}
        />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <p>{dat.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
