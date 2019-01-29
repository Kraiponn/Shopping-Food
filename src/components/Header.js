import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { 
    Collapse, 
    Navbar, 
    NavbarToggler, 
    NavbarBrand 
} from 'reactstrap';

class Header extends Component{

    constructor(props) {
        super(props);
    
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true
        };
      }
    
      toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }

    

    render() {

        return (
            <div className="">
                <Navbar className="navbar-dark bg-dark" expand="md" >
                    <NavbarBrand href="/" className="mr-auto">
                        KSN-Dev&nbsp;
                        <img className="img-fluid" src="/images/logo/logo.png" alt="" />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        {this.renderNavLink()}
                    </Collapse>
                </Navbar>
            </div>
        )
    }

    handleLogOut = () => {
        localStorage.removeItem("access-token");
        this.props.history.push("/signin");
    }


    renderNavLink = () => {
        if(localStorage.getItem("access-token")){
            return (
                <ul className="ml-auto navbar-nav">
                    <li className="nav-item">
                        <Link to="/">หน้าแรก</Link>
                    </li>
                    <li className="nav-item ml-2 text-light">|</li>
                    <li className="nav-item ml-2">
                        <Link to="/products">สินค้า</Link>
                    </li>
                    <li className="nav-item ml-2 text-light">|</li>
                    <li className="nav-item ml-2">
                        <Link to="/orders">รายการสั่งซื้อ</Link>
                    </li>
                    <li className="nav-item ml-2 text-light">|</li>
                    <li className="nav-item ml-2">
                        <Link to="/about">เกี่ยวกับเรา</Link>
                    </li>
                    <li className="nav-item ml-2 text-light">|</li>
                    <li className="nav-item ml-2">
                        <button className="btn btn-danger title"
                                onClick={this.handleLogOut}>
                            <i className="fa fa-circle-o-notch" aria-hidden="true"></i>
                            &nbsp;ออกจากระบบ
                        </button>
                    </li>
                </ul>
            )
        }
    }

}

export default withRouter(Header);