import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';



class About extends Component{

    render() {

        return (
            <div className="">
                <Header />
                <div className="container col-md-5 p-3">
                    <h2 className="title">เกี่ยวเรา</h2>
                    <hr />
                    <p className="title">
                        ยินดีต้อนรับสู่ <strong>KSN-Development</strong> &nbsp;เราคือผู้นำทางด้าน IT
                        และเทคโนโลยี IOT
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default About;