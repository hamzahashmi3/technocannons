import React from 'react'
import './about.css'
import './project.css'
import './home.css'
import {Link} from 'react-router-dom'


function whyUs() {

    return (
        <div>
            <header className="pb-4 mb-4">

                <div className="row pb-4 contact_img mb-3">
                    <div className="container overlay_img text-center img-fluid"><br /> <br />
                        <h1 className="mx-4 float-left my-5 py-4 about_head">Why Choose Us</h1>
                        <ul className="float-right my-5 py-4">
                            <li><Link to="/">Home</Link><i className="fa fa-home"></i></li>
                            <li><Link to="#">Why Us</Link></li>
                        </ul>
                    </div>
                </div>

            </header>


            <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                          <img src="img/team/man1.png" className="img-fluid float-right" style={{height:"550px"}} alt="Techno Cannons Why Choose Us" />  
                    </div>
                    <div className="col-md-6 mt-5">
                          <h6 className="text-info">WHY TECHNOCUES</h6>
                          <h1 className="font-weight-bold mt-4">An Ideal Option?</h1>
                          <div className="container text-muted my-5">
                            <li>Real, authentic and trustworthy for our client’s</li>
                            <li>Comfortable prices with time sensitive and superior quality solutions </li>
                            <li>Steadfast with commitments and deadlines </li>
                            <li>Complete Client satisfaction is our top priority </li>
                            <li>Diverse experience and exposure (250+ satisfied client’s and provided 500+ soft-solutions around the globe) </li>
                            <li>Proficient, humble and detail-oriented </li>
                            <li>Frequent response with clear communication </li>
                          </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Experience</h4> <hr className="bg-info text-info" />
                                <p>Our great team of design experts.</p>
                            </div>
                            <div className="col-md-6">
                                <h4>Quick Support</h4> <hr className="bg-info text-info" />
                                <p>We’ll help you test bold new ideas while sharing your.</p>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
            </section>

            <section>
                <main className="text-center my-5">
                    <div className="container">
                        <div className="row p-5 bg-clr">

                            <div className="col-md-3 m-auto">
                                <h1>150 <span>+</span></h1>
                                <li>ACTIVE CLIENTS</li>
                            </div>
                            <div className="col-md-3 m-auto">
                                <h1>3 <span>+</span></h1>
                                <li>GLORIOUS YEARS</li>
                            </div>
                            <div className="col-md-3 m-auto">
                                <h1>120 <span>+</span></h1>
                                <li>PROJECTS DONE</li>
                            </div>

                        </div>
                    </div>
                </main>
            </section>
            <section>
                <h6 className="text-info text-center">OUR SERVICES</h6>
                <h1 className="text-center font-weight-bold">We Offer a Wide Variety of IT Services</h1>
                
                <div className="container my-5">
                    <div className="row ">

                        <div className="col-sm-4">
                            <div className="wrapper">
                                <div className="card">
                                    <img src="img/fun-fact2.jpg" className="img-fluid img-responsive hover-zoom" alt="technocannons projects" />
                                    <div className="info">
                                        <h1 className="text-left">GRAPHIC DESIGNING</h1>
                                        <p className="text-left">Our Graphic designing services are helping people to get their ideas across to other people in a very low cost</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="wrapper">
                                <div className="card">
                                    <img src="img/fun-fact2.jpg" className="img-fluid img-responsive hover-zoom" alt="technocannons projects" />
                                    <div className="info">
                                        <h1 className="text-left">SOCIAL MEDIA MARKETING</h1>
                                        <p className="text-left">We’ve trained Marketing Managers and We’ve have assisted many international organizations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="wrapper">
                                <div className="card">
                                    <img src="img/fun-fact2.jpg" className="img-fluid img-responsive hover-zoom" alt="technocannons projects" />
                                    <div className="info">
                                        <h1 className="text-left">WEB DESIGN& DEVELOPMENT</h1>
                                        <p className="text-left">We are providing our web designing services to increase your website credibility among your customers</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="mb-5">

                <div className="container">
                    <div className="row">
                    <div className="col-sm-4">
                            <div className="wrapper">
                                <div className="card">
                                    <img src="img/fun-fact2.jpg" className="img-fluid img-responsive hover-zoom" alt="technocannons projects" />
                                    <div className="info">
                                        <h2 className="text-left">We produce the best quality content that people want to read. Giving Identity to your brand.</h2>
                                        <p className="text-left">We produce the best quality content that people want to read. Giving Identity to your brand.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="wrapper">
                                <div className="card">
                                    <img src="img/fun-fact2.jpg" className="img-fluid img-responsive hover-zoom" alt="technocannons projects" />
                                    <div className="info">
                                        <h1 className="text-left">3D ANIMATION</h1>
                                        <p className="text-left">Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="wrapper">
                                <div className="card">
                                    <img src="img/fun-fact2.jpg" className="img-fluid img-responsive hover-zoom" alt="technocannons projects" />
                                    <div className="info">
                                        <h1 className="text-left">UX/UI DESIGN</h1>
                                        <p className="text-left">Over the past decade, our customers succeeded by leveraging Intellectsoft’s process of building, motivating.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default whyUs
