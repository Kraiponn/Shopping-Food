import { 
    ORDER_FETCHS,
    ORDER_FETCH,
    ORDER_CREATE,
    ORDER_UPDATE,
    ORDER_DELETE,
    ORDER_SET_DEFAULT
} from '../actions/type';

export default (state = [], action) => {
    switch(action.type){
        case ORDER_FETCHS:
            return { data: action.payload };
        case ORDER_FETCH:
            return { data: action.payload };
        case ORDER_CREATE:
            return { saved: true, msg: 'สั่งซื้อสินค้าเรียบร้อย' };
        case ORDER_UPDATE:
            return { saved: true, msg: 'แก้ไขข้อมูลการสั่งซื้อสินค้าเรียบร้อย' };
        case ORDER_DELETE:
            return { saved: true, msg: 'ลบสินค้าสำเร็จ' };
        case ORDER_SET_DEFAULT:
            return { data: action.payload };
        default:
            return state;
    }
}