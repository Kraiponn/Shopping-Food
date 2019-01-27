import React, { Component } from 'react';



class Calculator extends Component{

    renderOrder(orders){
        if(!orders || orders.length === 0){
            //console.log(orders, "YES")
            return (
                <li className="text-right title text-success">
                    <strong>ยังไม่รายการที่สั่ง</strong>
                </li>
            )
        }else{
            //console.log(orders, " No")
            return orders && orders.map((order, oid) => {
                return (
                    <li className="text-right title text-success" key={oid}>
                        {order.product.productName} x {order.quantity} set =
                        &nbsp;{order.quantity * order.product.unitPrice} &nbsp;
                        <button 
                            className="btn btn-sm btn-light"
                            onClick={() => this.props.onDeleteOrder(order.product)}>X
                        </button>
                    </li>
                )
            })
        }
    }

    render(){
        const { totalPrice, orders } = this.props;
        return(
            <div className="">
                <h2 className="title mt-2 text-right font-weight-bold">{totalPrice} THB</h2>
                <hr />
                <ul className="list-unstyled">
                    {this.renderOrder(orders)}
                </ul>
                <hr />

                <div className="p-2">
                    <button 
                        className="btn btn-block btn-success"
                        onClick={() => this.props.onConfirmOrder()}>
                        ยืนยันรายการ
                    </button>
                    <button 
                        className="btn btn-block btn-warning"
                        onClick={() => this.props.onCancelOrder()}>
                        ยกเลิกรายการ
                    </button>
                </div>
            </div>
        )
    }
}

export default Calculator;