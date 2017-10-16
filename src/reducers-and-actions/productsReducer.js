import { ADD_PRODUCT, DELETE_PRODUCT } from '../constants/actions';
import createReducer from './reducerFactory';

const INITIAL_STATE = {
    productsList: []
};

const reducerMap = {
    [ADD_PRODUCT]: (state, data) => {
        const { productsList } = state;
        const newProductsList = [...productsList, data];

        return {
            productsList: newProductsList
        };
    },
    [DELETE_PRODUCT]: (state, id) => {
        const { productsList } = state;
        const newProductsList = productsList.filter(product => product.id !== id);

        return {
            productsList: newProductsList
        };
    }
};

export default createReducer(reducerMap, INITIAL_STATE);
