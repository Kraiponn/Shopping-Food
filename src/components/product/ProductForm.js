import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import {connect} from 'react-redux';
import {productFormField} from './productFormField';
import FormField from '../common/ProductField';

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    renderFormProduct(proInput){
        return (
            proInput && proInput.map(({label, type, name, required}) => {
                return (
                    <Field 
                        key={name}
                        type={type}
                        name={name}
                        required={required}
                        label={label}
                        component={FormField}
                    />
                )
            })
        )
    }

    render() { 
        const { onProductSubmit } = this.props;

        return ( 
            <div className="">
                <form onSubmit={this.props.handleSubmit(onProductSubmit)}>
                    {this.renderFormProduct(productFormField)}
                    <div>
                        <button 
                            className="btn btn-success btn-block title"
                            type="submit">
                            ยืนยัน
                        </button>
                    </div>
                </form>
            </div>
         );
    }
}

ProductForm = reduxForm({ form: "productForm", validate })(ProductForm)

function validate(values){
    const error = {}
    productFormField.forEach(({name, required}) => {
        if(!values[name] && required){
            if(name === 'productName'){
                error[name] = "กรุณากรอกชื่อสินค้าด้วย"
            }else if(name === 'unitPrice'){
                error[name] = "กรุณากรอกราคาสินค้าด้วย"
            }else{
                error[name] = "กรุณากรอกที่อยู่รูปภาพด้วย"
            }
        }
    }) 

    return error;
}

function mapStateToProps(state){
    //console.log(state.products)
    //return {initialValues: products.data}
    const products = state.products.data

    if(products && products.id){
        return {initialValues: products}
    }else{
        return {}
    }
}


export default connect(mapStateToProps, {})(ProductForm);