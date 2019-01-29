import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductForm from '../../components/product/ProductForm';
import { productFetchById, productCreated, productUpdate } from '../../actions';
import { connect } from 'react-redux';


class ProductEdit extends Component {

    componentDidMount(){
        if(this.props.match.params.id){
            this.props.productFetchById(this.props.match.params.id);
        }        
    }

    render() { 
        const {match, formValues, productCreated, productUpdate, products} = this.props;
        //console.log(match)

        return ( 
            <div className="">
                <Header />
                <div className="container col-md-4">
                    {match.path.indexOf("add") > 0 && (
                        <div className="card p-3 mt-3">
                            <h2 className="title">ฟอร์มเพิ่มสินค้า</h2>
                            <hr />
                            {products.saved && (
                                <div className="alert alert-success title">{products.msg}</div>
                            )}
                            <ProductForm 
                                onProductSubmit={() => productCreated(formValues)} />
                        </div>
                    )}

                    {match.path.indexOf("edit") > 0 && (
                        <div className="card p-3 mt-3">
                            <h2 className="title">ฟอร์มแก้ไขข้อมูลสินค้า</h2>
                            <hr />

                            {products.saved && (
                                <div className="alert alert-success title">{products.msg}</div>
                            )}
                            <ProductForm 
                                onProductSubmit={() => productUpdate(products.data.id, formValues)} />
                        </div>
                    )}
                </div>
                <Footer />
            </div>
         );
    }
}

function mapStateToProps({form, products}){
    console.log(products)
    return { formValues: form.productForm ? form.productForm.values : null, products }
}
 
export default connect(mapStateToProps, {productFetchById, productCreated, productUpdate})(ProductEdit);