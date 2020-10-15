import { gql } from "apollo-boost";

const GET_ORDERS_BY_ID_MUTATION = gql`
    mutation getOrdersById($id: String) {
        getOrdersById(id: $id) {
            ResultStatus
            Orders{
      Orders_Item{
        orderID
        ExtDateOfAdded
        ExtOrderPaid
        ExtOrderTotal
        ExtDeliveryCost
        dsDelivery
        pickupDate
        status
        postData
        OrderItems{
          OrderItems_Item {
            aID
          }
        }
      }
    }
        }
    }
`;

export default GET_ORDERS_BY_ID_MUTATION;