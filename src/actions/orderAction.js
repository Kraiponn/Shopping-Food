import { 
    ORDER_FETCHS,
    ORDER_FETCH,
    ORDER_CREATE,
    ORDER_UPDATE,
    ORDER_DELETE,
    ORDER_SET_DEFAULT
} from './type';
import axios from 'axios';

export const orderFetchs = () => {
    return dispatch => {
        axios.get(process.env.REACT_APP_API_URL + "/orders").then(
            res => {
                dispatch({ type: ORDER_FETCHS, payload: res.data });
            }
        )
    }
}

export const orderFetchById = id => {
    return dispatch => {
        axios.get(process.env.REACT_APP_API_URL + "/orders/" + id).then(
            res => {
                dispatch({ type: ORDER_FETCH, payload: res.data });
            }
        )
    }
}


export const orderDeleted = id => {
    return dispatch => {
        axios.delete(process.env.REACT_APP_API_URL + "/orders/" + id).then(
            res => {
                dispatch({ type: ORDER_DELETE });
            }
        )
    }
}


export const orderCreated = values => {
    return dispatch => {
        axios.post(process.env.REACT_APP_API_URL + "/orders", values).then(
            res => {
                dispatch({ type: ORDER_CREATE});
            }
        )
    }
}


export const orderUpdate = (id, values) => {
    return dispatch => {
        axios.put(process.env.REACT_APP_API_URL + "/orders/" + id, values).then(
            res => {
                dispatch({ type: ORDER_UPDATE});
            }
        )
    }
}

export const orderSetDefault = () => {
    return dispatch => {
        axios.get(process.env.REACT_APP_API_URL + "/orders").then(
            res => {
                dispatch({ type: ORDER_SET_DEFAULT, payload: res.data });
            }
        )
    }
}
