import PRODUCTS_TO_ORDER_QUERY from "../graphql/queries/productsToOrder";
import { useQuery } from "@apollo/react-hooks";

const useOrderAPI = (productsInCart) => {
    const { data, loading } = useQuery(PRODUCTS_TO_ORDER_QUERY, { variables: { 
        vendorCode: productsInCart && productsInCart.map(({vendor_code}) => vendor_code), 
        size: productsInCart && productsInCart.map(item => item.size),
        color: productsInCart && productsInCart.map(item => item.color)
    } });

    return { data, loading };
}

export default useOrderAPI;