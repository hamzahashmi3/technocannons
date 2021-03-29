import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className="section-1">
        <div className="container">
          <div className="head d-flex justify-content-center pt-5">
            <img src="./images/final-logo-new-01.png" alt="logo" height="170px" style={{marginTop:"100px"}}/>
          </div>
          <div className="row mt-5 d-flex text-center">
            <div className="col-sm-4 text-white">
              <span className="material-icons 2x themeColor" style={{color:"#3282b8", fontSize:"40px"}}>location_on</span>
              <p>UM-51 Zanaib Tower, Model Town Link Road, Lahore, Pakistan</p>
              <h6>Our Address</h6>
            </div>
            <div className="col-sm-4 text-white">
              <span className="material-icons 2x themeColor" style={{color:"#3282b8", fontSize:"40px"}}>email</span>
              <p>UM-51 Zanaib Tower, Model Town Link Road, Lahore, Pakistan</p>
              <h6>Our Address</h6>
            </div>
            <div className="col-sm-4 text-white">
              <span className="material-icons themeColor" style={{color:"#3282b8", fontSize:"40px"}}>phone_in_talk</span>
              <p>UM-51 Zanaib Tower, Model Town Link Road, Lahore, Pakistan</p>
              <h6>Our Address</h6>
            </div>
          </div>
    

    <div className="footer">
        <div style={{marginTop:"100px"}} className="nav-icons justify-content-center d-flex flex-row">
          <ul className="d-flex flex-row">
            <Link exact to="/home" className="text-white">Home</Link>
            <Link exact to="/company" className="text-white">Company</Link>
            <Link exact to="/services" className="text-white">Services</Link>
            <Link exact to="/projects" className="text-white">Projects</Link>
            <Link exact to="/blog" className="text-white">Blog</Link>
            <Link exact to="/contactUs" className="text-white">ContactUs</Link>
          </ul>
        </div>
        <p className="text-white text-center">
          Copyright <span style={{color:"#3282b8"}}>&#169;</span> 2021 TechnoCannons. All Rights Reserved.
        </p>
        <div className="icons-3 d-flex justify-content-center ">
          <span className="themeColor material-icons ml-5 mt-2 " style={{color:"#3282b8", fontSize:"40px"}}>facebook</span>
          <span className="material-icons ml-5 mt-2 themeColor" style={{color:"#3282b8", fontSize:"40px"}}>language</span>
          <span className="material-icons ml-5 mt-2 themeColor" style={{color:"#3282b8", fontSize:"40px"}}>email</span>
          <span className="material-icons ml-5 mt-2 themeColor" style={{color:"#3282b8", fontSize:"40px"}}>wifi_calling_3</span>
          <span className="material-icons ml-5 mt-2 themeColor" style={{color:"#3282b8", fontSize:"40px"}}>public</span>
          <span className="material-icons ml-5 mt-2 themeColor" style={{color:"#3282b8", fontSize:"40px"}}>group</span>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Footer
