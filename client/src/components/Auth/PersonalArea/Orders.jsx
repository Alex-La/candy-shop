import React, { Fragment } from "react";

import { useQuery } from "@apollo/react-hooks";
import GET_ORDERS_BY_EMAIL_QUERY from "../../../graphql/queries/getOrdersByEmail";

import OrderCard from "../../assets/OrderCard/OrderCard";

import { Link } from "react-router-dom";

const Orders = () => {
    const { data, loading } = useQuery(GET_ORDERS_BY_EMAIL_QUERY);

    const returnOrderCard = () => {
        if (data && data.getOrdersByEmail && data.getOrdersByEmail.ResultStatus[0] === "1")
            return (<OrderCard orders={data && data.getOrdersByEmail && data.getOrdersByEmail.Orders} loading={loading} />);
        else return <h4>Вы ещё не совершали заказы. Самое время перейти <Link to="/catalog" className="orange-text under-line">к покупкам.</Link></h4>;
    }

    return (
        <Fragment>
            <div className="section">
                <div className="row">
                    <div className="col s12">
                        <ul className="breadcrumb">
                            <li>
                                <Link to="/" className="orange-text">
                                    Главная страница
                </Link>
                            </li>
                            <li>
                                <Link to="/personal" className="orange-text">
                                    Личный кабинет
                </Link>
                            </li>
                            <li className="black-text">Заказы</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    {loading ? <div className="progress">
                        <div className="indeterminate"></div>
                    </div> : returnOrderCard()}
                </div>
            </div>
        </Fragment>
    );
}

export default Orders;