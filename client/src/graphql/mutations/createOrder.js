import { gql } from "apollo-boost";

const CREATE_ORDER_MUTATION = gql`
    mutation createOrder($data: OrderData) {
        createOrder(data: $data) {
            ResultStatus
            ResultStatusMsg
            timestamp
            orderID
            totalSum
            ExtTotalSum
            ExtDeliveryCost
            OrderItems
            pickupDate
            ErrorItems
            messages
        }
    }
`;

export default CREATE_ORDER_MUTATION;