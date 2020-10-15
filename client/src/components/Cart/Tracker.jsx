import React, { Fragment, useState, useEffect } from "react";

import { useMutation } from "@apollo/react-hooks";
import GET_ORDERS_BY_ID_MUTATION from "../../graphql/mutations/getOrdersById";

import M from "materialize-css";
import OrderCard from "../assets/OrderCard";

const Tracker = () => {
    const [inputVal, setInputVal] = useState("");

    const [getOrders, { data, loading }] = useMutation(GET_ORDERS_BY_ID_MUTATION);

    useEffect(() => {
        if (data && data.getOrdersById) {
            const { ResultStatus } = data.getOrdersById;
            switch (ResultStatus[0]) {
                case "21":
                    M.toast({ html: "Заказ не найден!" });
                    break;
                case "20": 
                    M.toast({ html: "Укажите номер заказа!" });
                    break;
                default: 
                    break;
            }
        }
    }, [data]);

    const handleChangeInput = (e) => {
        setInputVal(e.target.value);
    }

    const handleFindBtn = () => {
        getOrders({ variables: { id: inputVal } });
    }

    return (
        <Fragment>
        <div className="section">
            <div className="container">
                <h2>Введите номер заказа.</h2>
                <div className="row">
                <div className="input-field col s8">
                    <input onChange={handleChangeInput} id="order_id" type="text" />
                    <label htmlFor="order_id">Номер заказа</label>
                </div>
                <div className="col s4">
                    <button onClick={handleFindBtn} className={`btn orange waves-effect waves-light ${loading && "disabled"}`} style={{ marginTop: 20 }}>Найти</button>
                </div>
                </div>
            </div>
        </div>

        <div className="section">
            <div className="container">
                <OrderCard orders={data && data.getOrdersById && data.getOrdersById.Orders} />
            </div>
        </div>
        </Fragment>
    );
}

export default Tracker;