import React, { Fragment, useState } from "react";

import DeliveryMethod from "./DeliveryMethod";
import EnterContactData from "./EnterContactData";

const MakeForm = () => {
  const [adress, setAdress] = useState({});

  return (
    <Fragment>
      <EnterContactData setAdress={setAdress} />
      <DeliveryMethod adress={adress} />
    </Fragment>
  );
};

export default MakeForm;
