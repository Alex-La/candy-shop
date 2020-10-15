import { gql } from "apollo-boost";

const GET_ORDERS_BY_EMAIL_QUERY = gql`
    query getOrdersByEmail{
        getOrdersByEmail {
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
        postData{
          PostCode
          PostStatusName
          TrackingUrl 
        }
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

export default GET_ORDERS_BY_EMAIL_QUERY;