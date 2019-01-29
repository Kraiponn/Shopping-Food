import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Order from './pages/orders/order';
import SignIn from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute';
import Product from './pages/products/Product';
import ProductEdit from './pages/products/ProductEdit';
import NotFound from './pages/NotFound';

class App extends Component {

  renderRouter(){
    return (
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/products" component={Product} />
        <PrivateRoute exact path="/about" component={About} />
        <PrivateRoute exact path="/orders" component={Order} />
        <PrivateRoute exact path="/products/add" component={ProductEdit} />
        <PrivateRoute exact path="/products/edit/:id" component={ProductEdit} />
        <Route exact path="/signin" component={SignIn} />
        <Route component={NotFound} />
      </Switch>
    )
  }

  render() {
    return (
      <BrowserRouter>
          {this.renderRouter()}
      </BrowserRouter>
    );
  }
}

export default App;
