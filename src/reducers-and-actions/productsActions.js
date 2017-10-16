import { ADD_PRODUCT, DELETE_PRODUCT } from '../constants/actions';

export function addProduct(data) {
    return {
        type: ADD_PRODUCT,
        payload: data,
    };
}

export function deleteProduct(data) {
    return {
        type: DELETE_PRODUCT,
        payload: data,
    };
}
