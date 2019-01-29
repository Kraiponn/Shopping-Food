import React, { Component } from 'react';
import ProductItem from './ProductItem';


class ProductList extends Component{

    renderProductList(products){
        //console.log("list render  ", products)

        if(products && Array.isArray(products)){
            return products && products.map((product, id) => {
                return (
                    <ProductItem 
                        key={id} 
                        product={product} 
                        onAddOrder={this.props.onAddOrder}
                        onEditProduct={this.props.onEditProduct}
                        onDeleteProduct={this.props.onDeleteProduct}
                    />
                )
            })
        }
    }

    render(){
        const { products } = this.props;
        //console.log("Hello product list ", products)

        return(
            <div className="row">
                {this.renderProductList(products)}
            </div>
        )
    }
}

export default ProductList;