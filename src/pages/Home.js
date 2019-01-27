import React, { Component } from 'react';
import Header from '../components/Header';
import Main from '../components/monitor/main';
import Footer from '../components/Footer';


class Home extends Component{

    render() {

        return (
            <div className="">
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default Home;