import { ADD_TO_CART } from "../constants";

export default function addToCart(data) {
    return {
        type: ADD_TO_CART,
        data: data
    }
}