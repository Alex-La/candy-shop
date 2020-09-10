import React, { useState } from "react";

import { useQuery, useMutation } from "@apollo/react-hooks";
import GET_PROMO_CODES_QUERY from "../../graphql/queries/getPromoCodes";
import REMOVE_PROMO_CODE_MUTATION from "../../graphql/mutations/removePromoCode";
import CREATE_PROMO_CODE_MUTATION from "../../graphql/mutations/createPromoCode";
import { useEffect } from "react";

import M from "materialize-css";

const AdminPanel = () => {
  const [code, setCode] = useState("");
  const [percent, setPercent] = useState("");

  const getPromo = useQuery(GET_PROMO_CODES_QUERY);
  const [removePromo, removeData] = useMutation(REMOVE_PROMO_CODE_MUTATION);
  const [createPromo, createData] = useMutation(CREATE_PROMO_CODE_MUTATION);

  useEffect(() => {
    if (removeData.data) M.toast({ html: removeData.data.removePromoCode });
  }, [removeData.data]);

  useEffect(() => {
    if (createData.data) M.toast({ html: createData.data.createPromoCode });
  }, [createData.data]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ul className="collection with-header">
            <li className="collection-header">
              <h4>Promo codes</h4>
            </li>
            {getPromo.data &&
              getPromo.data.getPromoCodes.map((code, index) => (
                <li key={index} className="collection-item">
                  <div>
                    {code.name + " - " + code.percent + "%"}
                    <button
                      className="secondary-content btn-flat"
                      onClick={() => {
                        removePromo({ variables: { name: code.name } });
                        getPromo.refetch();
                      }}
                    >
                      <i className="material-icons">close</i>
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className="input-field col s3">
          <input
            id="promo_code"
            type="text"
            value={code}
            onChange={(event) => setCode(event.target.value)}
          />
          <label htmlFor="promo_code">New code</label>
        </div>
        <div className="input-field col s3">
          <input
            id="percent"
            type="text"
            value={percent}
            onChange={(event) => setPercent(event.target.value)}
          />
          <label htmlFor="percent">Percent</label>
        </div>
        <div className="col s2" style={{ marginTop: 20 }}>
          <button
            className="btn orange"
            onClick={() => {
              createPromo({
                variables: { name: code, percent: parseInt(percent, 10) },
              });
              getPromo.refetch();
            }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
