import React from "react";

import ForMale from "./ForMale";
import ForPairs from "./ForPairs";
import ToysForFemale from "./ToysForFemale";

const TopSection = () => {
  return (
    <div>
      <div className="section">
        <div className="row">
          <ToysForFemale />
          <ForPairs />
          <ForMale />
        </div>
      </div>
      <br />
    </div>
  );
};

export default TopSection;
