import productReducer from './productReducer';
import orderReducer from './orderReducer';
import { combineReducers } from 'redux';
import {reducer as reduxForm} from 'redux-form';

export default combineReducers({
    products: productReducer,
    orders: orderReducer,
    form: reduxForm
});
