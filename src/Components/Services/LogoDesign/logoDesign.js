import React from 'react'
import './logodesign.css';


function logoDesign() {
    return (
        <div>
              <section className="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="img/team/pic1-service1.png" className="img-fluid" alt="pic1-service1" />
                        </div>
                        <div className="col-md-6 my-3">
                            <h6>ABOUT SERVICE</h6>
                            <h1>We Provide Best <br />Web Development</h1>
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <h6>01.</h6>
                                    <h4>PHP DEVELOPMENT</h4>
                                    <p className="font-weight-light">We’re committed to building sustainable and high-quality PHP solutions.</p>
                                </div>
                                <div className="col-md-6">
                                    <h6>02.</h6>
                                    <h4>MERN DEVELOPMENT</h4>
                                    <p className="font-weight-light">We’re committed to building sustainable and high-quality Qt solutions.</p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <h6>03.</h6>
                                    <h4>JAVA DEVELOPMENT</h4>
                                    <p className="font-weight-light">We’re committed to building sustainable and high-quality Java solutions.</p>
                                </div>
                                <div className="col-md-6">
                                    <h6>04.</h6>
                                    <h4>PYTHON DEVELOPMENT</h4>
                                    <p className="font-weight-light">We’re committed to building sustainable and high-quality Python/Django solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row block mt-5">
                        <div className="col-sm-4 m-auto">
                            <div className="border p-3 authen">
                                <i className="fa fa-eercast mx-1 text-danger icon-1"></i>
                                <h4 className="ml-5"> Authenticity</h4>
                                <p className="ml-5 font-weight-light">Real and Trustworthy</p>
                                <p className="text block-para">01</p>
                            </div>
                        </div>
                        <div className="col-sm-4 m-auto">
                            <div className="border p-3 auda">
                                <i className="fa fa-eercast mx-1 text-dark icon-1"></i>
                                <h4 className="ml-5"> Audacity</h4>
                                <p className="ml-5 font-weight-light">Superior Quality Solution</p>
                                <p className="text block-para">02</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="border p-3 afford">
                                <i className="fa fa-eercast mx-1 text-success icon-1"></i>
                                <h4 className="ml-5"> Affordable Cost</h4>
                                <p className="ml-5 font-weight-light">Within Your Reach</p>
                                <p className="text block-para">03</p>
                            </div>
                        </div>
                    </div>
                </div>


            </section>


            <section className="my-4">
                <main className="mt-5 p-5 back-color">

                    <div className="row">
                        <div className="col-md-6 text-white">
                            <h6 className="text-info">TECHNOLOGY INDEX</h6>
                            <h1>We Organize Our Production Process</h1>
                            <div className="row py-3">
                                <button className="btn btn-outline-info btn-lg rounded-0 mx-2">ANALYSIS</button>
                                <button className="btn btn-outline-info btn-lg rounded-0 mx-2">DESIGN</button>
                                <button className="btn btn-outline-info btn-lg rounded-0 mx-2">TESTING</button>
                            </div>
                            <p className="py-3 font-weight-light">Engitech is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services. Our product design service lets you prototype, test and validate your ideas.</p>
                            <a href="#" className="arrow text-info"><i className="fa fa-arrow-right pb-4 mr-3"></i>Learn More</a>
                        </div>
                        <div className="col-md-6">
                            <img src="img/fun-fact2.jpg" className="w-100 img-fluid" alt="fun-fact2" />
                        </div>
                    </div>

                </main>


                <main className="mt-5 pt-3">
                    <div className="container">
                        <div className="text-center">
                            <h5 className="text-info">CHOOSE YOUR PLAN</h5>
                            <h1>Flexible Pricing Plans</h1>
                            <p className="font-weight-light">We help businesses elevate their value through custom software development, <br />
                                product design, QA and consultancy services.</p>
                        </div>
                        <div className="row py-4">

                            <div className="col-md-4">
                                <span className="float-right top-0 right-box"><i className="fa fa-superpowers"></i></span>
                                <div className="border bg-light rounded shadow-lg p-5">
                                    <h2>Basic Plan</h2>
                                    <h1><span className="dollar">$</span>129.99</h1>
                                    <p className="mb-3 pb-3 text-muted">Monthly Package</p>
                                    <hr /><br />
                                    <p><i className="fa fa-check mr-3 text-success"></i>Web Counsulting</p>
                                    <p><i className="fa fa-check mr-3 text-success"></i>24/7 System Monitoring</p>
                                    <p><i className="fa fa-check mr-3 text-success"></i>Machine and Deep Learning</p>
                                    <p><i className="fa fa-check mr-3 text-muted"></i>Data Quality Management</p>
                                    <p><i className="fa fa-check mr-3 text-muted"></i>Security Management</p>
                                    <button className="btn btn-info btn-large mt-5 rounded-0">CHOOSE PLAN</button>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <span className="float-right top-0 right-box"><i className="fa fa-life-ring"></i></span>
                                <div className="border bg-light rounded shadow-lg p-5">
                                    <h2>Economy Plan</h2>
                                    <h1><span className="dollar">$</span>159.99</h1>
                                    <p className="mb-3 pb-3 text-muted">Monthly Package</p>
                                    <hr /><br />
                                    <p><i className="fa fa-check mr-3 text-success"></i>Web Counsulting</p>
                                    <p><i className="fa fa-check mr-3 text-success"></i>24/7 System Monitoring</p>
                                    <p><i className="fa fa-check mr-3 text-success"></i>Machine and Deep Learning</p>
                                    <p><i className="fa fa-check mr-3 text-success"></i>Data Quality Management</p>
                                    <p><i className="fa fa-check mr-3 text-muted"></i>Security Management</p>
                                    <button className="btn btn-info btn-large mt-5 rounded-0">CHOOSE PLAN</button>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <span className="float-right top-0 right-box"><i className="fa fa-sun-o"></i></span>
                                <div className="border bg-light rounded shadow-lg p-5">
                                    <h2>Premium Plan</h2>
                                    <h1><span className="dollar">$</span>189.99</h1>
                                    <p className="mb-3 pb-3 text-muted">Monthly Package</p>
                                    <hr /><br />
                                    <p><i className="fa fa-check mr-3 text-success"></i>Web Counsulting</p>
                                    <p><i className="fa fa-check mr-3 text-success"></i>24/7 System Monitoring</p>
                                    <p><i className="fa fa-check mr-3 text-success"></i>Machine and Deep Learning</p>
                                    <p><i className="fa fa-check mr-3 text-success"></i>Data Quality Management</p>
                                    <p><i className="fa fa-check mr-3 text-success"></i>Security Management</p>
                                    <button className="btn btn-info btn-large mt-5 rounded-0">CHOOSE PLAN</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>

            </section>

        </div>
    )
}

export default logoDesign
