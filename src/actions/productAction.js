import { 
    PRODUCT_FETCHS,
    PRODUCT_FETCH,
    PRODUCT_CREATE,
    PRODUCT_UPDATE,
    PRODUCT_DELETE,
    PRODUCT_SET_DEFAULT
} from './type';
import axios from 'axios';


export const productFetchs = () => {
    return dispatch => {
        axios.get(process.env.REACT_APP_API_URL + "/products").then(
            res => {
                dispatch({ type: PRODUCT_FETCHS, payload: res.data });
            }
        )
    }
}

export const productFetchById = id => {
    return dispatch => {
        axios.get(process.env.REACT_APP_API_URL + "/products/" + id).then(
            res => {
                dispatch({ type: PRODUCT_FETCH, payload: res.data });
            }
        )
    }
}


export const productDeleted = id => {
    return dispatch => {
        axios.delete(process.env.REACT_APP_API_URL + "/products/" + id).then(
            res => {
                axios.get(process.env.REACT_APP_API_URL + "/products").then(
                    res => {
                        dispatch({ type: PRODUCT_DELETE, payload: res.data });
                    }
                )
            }
        )
    }
}


export const productCreated = values => {
    return dispatch => {
        axios.post(process.env.REACT_APP_API_URL + "/products", values).then(
            res => {
                dispatch({ type: PRODUCT_CREATE});
            }
        )
    }
}


export const productUpdate = (id, values) => {
    return dispatch => {
        axios.put(process.env.REACT_APP_API_URL + "/products/" + id, values).then(
            res => {
                axios.get(process.env.REACT_APP_API_URL + "/products").then(
                    res => {
                        dispatch({ type: PRODUCT_UPDATE, payload: res.data });
                    }
                )
            }
        )
    }
}


export const productSetDefault = () => {
    return dispatch => {
        axios.get(process.env.REACT_APP_API_URL + "/products").then(
            res => {
                dispatch({ type: PRODUCT_SET_DEFAULT, payload: res.data });
            }
        )
    }
}

