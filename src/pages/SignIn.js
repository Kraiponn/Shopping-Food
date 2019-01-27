import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { withRouter } from 'react-router-dom';


class SignIn extends React.Component {

    constructor(props){
        super(props)
        this.state = { 
            uname: '',
            pwd: ''
         }
    }

    handleClearForm = (e) => {
        // this.setState((prev) => {
        //     return {
        //         uname: prev.uname = ''  
        //     }      
        // });
        
        this.txtUname.value = '';
        this.txtPwd.value = '';
        this.setState({
            uname: '',
            pwd: ''
        });

        localStorage.removeItem("access-token");

        console.log("---------------------------")
        console.log("User ", this.state.uname)
        console.log("Pass ", this.state.pwd)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("User ", this.state.uname)
        console.log("Pass ", this.state.pwd)

        if(this.state.uname && this.state.uname !== ''){
            localStorage.setItem("access-token", this.state.uname);
            this.props.history.push("/");
        }
    }

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        });
    }


    render(){
        return(
            <div className="">
                <Header />
                    
                 <div className="container col-md-4">
                    <form className="card p-3 m-3" onSubmit={this.handleSubmit}>
                        <div className="card-body">
                            <h2 className="title">ลงชื่อเข้าใช้งาน</h2>
                        </div>
                        <div className="form-btn-group">
                            <label className="title has-text-weight-bold">ชื่อ-เข้าใช้งาน</label>
                            <input 
                                type="text" 
                                name="uname" 
                                value={this.state.value}
                                onChange={this.handleChange}
                                ref={(input) => {this.txtUname = input}}
                                className="form-control title" />
                        </div>

                        <div className="form-btn-group">
                            <label className="title has-text-weight-bold">รหัส-ผ่าน</label>
                            <input 
                                type="password" 
                                name="pwd" 
                                value={this.state.value}
                                onChange={this.handleChange}
                                ref={(input) => {this.txtPwd = input}}
                                className="form-control title" />
                        </div>

                        <div className="m-3 mt-5">
                            <button 
                                className="btn btn-outline-success col-sm-5 title"
                                type="button"
                                onClick={this.handleClearForm}> ล้างข้อมูล
                            </button>
                            <button 
                                className="btn btn-outline-primary col-sm-5 float-right title"
                                type="submit"> ยืนยัน
                            </button>
                        </div>
                    </form>
                 </div>   

                <Footer />
            </div>
        )
    }

}

export default withRouter(SignIn);