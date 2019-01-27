import { 
    PRODUCT_FETCHS,
    PRODUCT_FETCH,
    PRODUCT_CREATE,
    PRODUCT_UPDATE,
    PRODUCT_DELETE,
    PRODUCT_SET_DEFAULT
} from '../actions/type';

export default (state = [], action) => {
    switch(action.type){
        case PRODUCT_FETCHS:
            return { data: action.payload };
        case PRODUCT_FETCH:
            return { data: action.payload };
        case PRODUCT_CREATE:
            return { saved: true, msg: 'เพิ่มข้อมูลสินค้าสำเร็จ' };
        case PRODUCT_UPDATE:
            return { saved: true, msg: 'แก้ไขข้อมูลสินค้าสำเร็จ' };
        case PRODUCT_DELETE:
            return { saved: true, msg: 'ลบสินค้าสำเร็จ' };
        case PRODUCT_SET_DEFAULT:
            return { data: action.payload }; 
        default: 
            return state;
    }
}