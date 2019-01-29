import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { 
            productFetchs, productDeleted, 
            productCreated, productUpdate 
        } from '../../actions';
import ProductList from '../../components/product/ProductList';


class Product extends Component {
    
    constructor(props){
        super(props)
        this.delPrduct = this.delPrduct.bind(this)
        this.editProduct = this.editProduct.bind(this)
    }

    componentDidMount(){
        this.props.productFetchs();
    }

    delPrduct(product){
        this.props.productDeleted(product.id)
        //console.log("Delete ... ", product.id)
    }

    editProduct(product){
        this.props.history.push("products/edit/" + product.id)
    }

    render() {
        const {products} = this.props;
        //console.log(match)
        
        return ( 
            <div className="">
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="title font-weight-bold">สินค้า</h1>
                        </div>
                        <div className="col-md-6 p-2">
                            <button className="btn btn-success title float-right"
                                    onClick={() => this.props.history.push("products/add")}>
                                เพิ่มสินค้า
                            </button>
                        </div>
                    </div>

                    <ProductList 
                        products={products.data} 
                        onDeleteProduct={this.delPrduct}
                        onEditProduct={this.editProduct} />
                </div>

                <Footer />           
            </div>
         );
    }
}


function mapStateToProps(state){
    //console.log(products)
    return {products: state.products}
}
 
export default withRouter(connect(mapStateToProps, 
                        { productFetchs, 
                          productDeleted, 
                          productUpdate, 
                          productCreated })(Product));
                