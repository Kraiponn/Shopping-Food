import React, { Component } from 'react';
import { 
        productFetchs, 
        orderCreated 
} from '../../actions';
import { connect } from 'react-redux';
import ProductList from '../product/ProductList';
import Calculator from './Calculator';
import Notifications, {notify} from 'react-notify-toast';

class Main extends Component{

    constructor(props){
        super(props)
        this.state = {totalPrice: 0, orders: [], confirm: false, msg: ''};
        //console.log(process.env.REACT_APP_API_URL)
        this.addOrder = this.addOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
        this.cancelOrder = this.cancelOrder.bind(this);
        this.confirmOrder = this.confirmOrder.bind(this);
    }

    componentDidMount(){
        this.props.productFetchs();
    }

    addOrder(product){
        let findOrder = this.state.orders.find(o => o.product.id === product.id);
        if(findOrder){
            findOrder.quantity++;
        }else{
            this.state.orders.push({product: product, quantity: 1});
        }

        const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);
        
        this.setState({totalPrice: totalPrice, orders: this.state.orders, confirm: false});
    }

    deleteOrder(product){
        let findOrder = this.state.orders.find(o => o.product.id === product.id);
        let resOrder = this.state.orders.filter(o => o.product.id !== product.id);
        const totalPrice = this.state.totalPrice - (findOrder.quantity*findOrder.product.unitPrice);
        
        this.setState({
            totalPrice: totalPrice,
            orders: resOrder,
            confirm: false,
            msg: 'ลบข้อมูลสำเร็จ'
        })
    }

    cancelOrder(){
        this.setState({totalPrice: 0, orders: [], confirm:false, msg:''});
    }

    confirmOrder(){
        if(this.state.orders && this.state.orders.length > 0){
            const { totalPrice, orders } = this.state;
            this.props.orderCreated(
                {
                    orderedDate: new Date(),
                    totalPrice,
                    orders
                }
            );
            
            notify.show("สั่งสินค้าเรียบร้อย", "success", 1000, "");
            this.cancelOrder();
        }
    }



    render(){
        
        return(
            <div className="container-fluid">
            <Notifications />
                <div className="row">
                    <div className="col-md-9">
                        <h2 className="title">รายการสินค้า</h2>
                        <ProductList 
                            products={this.props.products} 
                            onAddOrder={this.addOrder}/>
                    </div>
                    <div className="col-md-3">
                        <Calculator 
                            totalPrice={this.state.totalPrice}
                            orders={this.state.orders}
                            onDeleteOrder={this.deleteOrder}
                            onConfirmOrder={this.confirmOrder}
                            onCancelOrder={this.cancelOrder}
                        />
                    </div>
                </div>
                {/* notify.show(orders.msg, "success", 1000, ""); */}
            
            </div>
        )
    }
}

function mapStateToProps(state){
    //console.log("Main ", state)

    if(state.orders && state.orders.saved){
        return { orders: state.orders, products: state.products.data };
    }else{
        return { products: state.products.data };
    }
}

export default connect(mapStateToProps, { productFetchs, orderCreated })(Main);