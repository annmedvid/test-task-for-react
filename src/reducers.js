import { combineReducers } from 'redux';
import products from './reducers-and-actions/productsReducer';

const rootReducer = combineReducers({
	products,
});

export default rootReducer;
