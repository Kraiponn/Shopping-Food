import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { connect } from 'react-redux';
import { orderFetchs, orderDeleted, orderSetDefault } from '../../actions';
import Notifications, {notify} from 'react-notify-toast';


class Order extends Component{

    componentDidMount(){
        this.props.orderFetchs();
    }

    // componentDidUpdate() {
    //     //this.toastStatus();
    // }

    renderOrderList(orders){
        return Array.isArray(orders) && orders.map((order, oid) => {
            return (
                <div className="col-md-4 mb-2" key={oid}>
                    <div className="bg-secondary p-2 text-right">
                        <button 
                            className="btn btn-sm btn-danger title"
                            onClick={() => this.props.orderDeleted(order.id)}>X</button>
                    </div>
                    <h6 className="title ml-2 mt-2">{order.orderedDate}</h6>
                    <ul>
                        {
                            order.orders.map((list, x) => {
                                return (
                                    <li className="title" key={x}>
                                        {list.product.productName} [{list.quantity} set]
                                        &nbsp;= {list.quantity * list.product.unitPrice} THB
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="title text-danger text-right has-text-weight-bold">
                        <h4>Total: {order.totalPrice}</h4>
                    </div>
                </div>
            )
        })
    }

    toastStatus(){
        const {orders} = this.props;
        //console.log("Hello toast", orders)

        if(orders && orders.saved && orders.msg){
            //console.log("Hello loop")
            notify.show(orders.msg, "success", 1000, "");
            this.props.orderSetDefault();
        }
    }

    setRenderType(orders){
        if(orders && orders.saved){
            //console.log("Deletet loop")
            //this.toastStatus();
            notify.show(orders.msg, "success", 1000, "");
            this.props.orderSetDefault();
            //return this.renderOrderList(orders.data);
        }else{
            //console.log("Normal loop")
            return this.renderOrderList(orders);
        }
    }


    render(){
        const { orders } = this.props;

        return(
            <div className="">
                <Header />
                <Notifications />

                <div className="container-fluid p-3">
                    <h1 className="title text-success">รายการสั่งซื้อ</h1>
                    <hr />
                    <div className="row">
                        {this.setRenderType(orders)}
                    </div>
                </div>
                
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log("Oders ", state)

    if(state.orders && state.orders.saved){
        //console.log("Deletet loop #1")
        return { orders: state.orders }
    }else{
        //console.log("Deletet loop #2")
        return { orders: state.orders.data }
    }
}

export default connect(mapStateToProps, { orderFetchs, orderDeleted, orderSetDefault })(Order);