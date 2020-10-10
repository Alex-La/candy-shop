import PRODUCTS_TO_ORDER_QUERY from "../graphql/queries/productsToOrder";
import CREATE_ORDER_MUTATION from "../graphql/mutations/createOrder";
import { useQuery, useMutation } from "@apollo/react-hooks";

const useOrderAPI = (productsInCart) => {
    const products = useQuery(PRODUCTS_TO_ORDER_QUERY, { variables: { 
        vendorCode: productsInCart && productsInCart.map(({vendor_code}) => vendor_code), 
        size: productsInCart && productsInCart.map(item => item.size),
        color: productsInCart && productsInCart.map(item => item.color)
    } });

    const [sendOrder, { data, loading }] = useMutation(CREATE_ORDER_MUTATION);

    const makeOrder = (data) => {
      console.log(data);
      console.log(products.data);
      console.log(productsInCart);
    }

    return { makeOrder, data, loading };
}

export default useOrderAPI;