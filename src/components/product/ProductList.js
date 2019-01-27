import React, { Component } from 'react';
import ProductItem from './ProductItem';


class ProductList extends Component{

    renderProductList(products){
        if(products && Array.isArray(products)){
            return products && products.map((product, id) => {
                return (
                    <ProductItem 
                        key={id} 
                        product={product} 
                        onAddOrder={this.props.onAddOrder}
                        onEditOrder={this.props.onEditOrder}
                        onDeleteOrder={this.props.onDeleteOrder}
                    />
                )
            })
        }
    }

    render(){
        const { products } = this.props;
        return(
            <div className="row">
                {this.renderProductList(products)}
            </div>
        )
    }
}

export default ProductList;