import productReducer from './productReducer';
import orderReducer from './orderReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    products: productReducer,
    orders: orderReducer
});
