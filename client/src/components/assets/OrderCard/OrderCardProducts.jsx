import React, { Fragment } from "react";

import { useQuery } from "@apollo/react-hooks";
import PRODUCTS_BY_AID_QUERY from "../../../graphql/queries/productsByAid";

const OrderCardProducts = ({ aids }) => {

    const { data, loading } = useQuery(PRODUCTS_BY_AID_QUERY, { variables: { aids } });

    const returnCard = () => {
        if (data && data.productsByAid) return data.productsByAid.map((item, index) => (<div key={index} className="section">
            <div className={`z-depth-0 card ${window.innerWidth > 425 && "horizontal"}`} style={{ border: "1px solid silver" }}>
                <div className="card-image">
                    <img src={item.photo_small} alt={item.photo_small} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h6 className="orange-text">{item.name}</h6>
                        <p className="black-text">{item.description}</p>
                    </div>
                </div>
            </div>
        </div>));

        return <Fragment />;
    }

    return loading ? <div className="progress">
        <div className="indeterminate"></div>
    </div> : returnCard();
};

export default OrderCardProducts;