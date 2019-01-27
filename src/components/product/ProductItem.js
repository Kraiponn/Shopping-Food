import React, { Component } from 'react';


class ProductItem extends Component{


    render(){
        const { productName, unitPrice, thumbnail } = this.props.product;
        return(
            <div className="col-md-4 mt-3 mb-3">
                <div className="card h-100">
                    <a className="wrapper-img" href="www.google.com">
                        <img src={thumbnail} alt="" className="img-fluid" />
                    </a>
                    <div className="card-body">
                        <h4 className="title text-center">{productName}</h4>
                        <p className="title text-right">{unitPrice} THB</p>
                        <hr />
                    </div>
                    
                    {this.props.onAddOrder && (
                        <div className="p-2">
                            <button 
                                className="btn btn-secondary btn-block title"
                                onClick={() => this.props.onAddOrder(this.props.product)}>
                                <i className="fa fa-plus" aria-hidden="true"></i>
                                &nbsp;ซื้อสินค้า
                            </button>
                        </div>
                    )}

                    {this.props.onEditOrder && this.props.onDeleteOrder && (
                        <div className="p-2">
                            <button className="btn btn-secondary btn-sm title col-sm-5">
                                <i class="fa fa-pencil" aria-hidden="true"></i>
                                &nbsp;แก้ไขสินค้า
                            </button>
                            <button className="btn btn-danger btn-sm title col-sm-5">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                                &nbsp;ลบสินค้า
                            </button>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default ProductItem;