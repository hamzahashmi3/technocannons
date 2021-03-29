import React from 'react'
import './about.css'
import {Link } from 'react-router-dom'


function webDevelopment() {
    return (
        <div>
              <header className="pb-4 mb-4">
 
                <div className="row pb-4 contact_img mb-3">
                    <div className="container overlay_img text-center img-fluid"><br /> <br />
                        <h1 className="mx-4 float-left my-5 py-4 about_head">WEBSITE DESIGN & DEVELOPMENT</h1>
                        <ul className="float-right my-5 py-4">
                            <li><Link to="/">Home</Link><i className="fa fa-home"></i></li>
                            <li><Link to="#">Services</Link></li>
                            <li>Web Development</li>
                        </ul>
                    </div>
                </div>

                </header>


                <section className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="my-3">Web Designing</h1>
                            <div className="text-muted">
                                <p>We are providing our web designing services to increase your website credibility among your customers, to make your first impression awesome & everlasting, increasing your website engagement by providing you with best content and layouts. Do you know the impact of these facts and figures? So, let’s have look:</p> <br />
                                <li>75% of users make judgments about a company’s credibility based on visual design alone</li>
                                <li>94% of users’ first impressions of healthcare websites were design-related</li>
                                <li>It only takes visitors 50 milliseconds to form a first impression of your website design</li>
                                <li>38% of people will stop engaging with your website if your content and layout is unattractive </li><br />
                                <p>In short “We are authors of visible and we are invisible middleman in chain of communication”.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="img/Web-design-1.jpg" className="img-fluid mt-5 pt-5" alt="Technocannons/Website Design and Development" />
                        </div>
                    </div>
                </div>
                </section>


                <section className="my-5 py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="img/Imac_icons.jpg" className="img-fluid mt-4 pt-1" alt="Technocannons/Website Design and Development" />
                        </div>
                        <div className="col-md-6 my-5 pt-2">
                            <h1 className="my-3">Web Designing</h1>
                            <div className="text-muted">
                                <p>Obviously, your website represents you or your brand that’s why it should be catchy and soothing for others. Good news is we’ll be helping you out in designing all above mentioned stuff for your website</p> <br />
                                <h6>Our web designing services includes:</h6>
                                <li>Icons</li>
                                <li>Layouts</li>
                                <li>Logo designs</li>
                                <li>Visual designs</li>
                                <li>Banner designs</li>
                                <li>Text content</li> <br />
                                <p>In short “We are authors of visible and we are invisible middleman in chain of communication”.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </section>





                <section className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="my-3">Web Development</h1>
                            <div className="text-muted">
                                <p>A lot of people start business but unfortunately, they don’t cover much distance and make it possible to final destination. Deep down there is one most important reason that they never tried to sort it out. The reason is, they never had online existence and they never tried to get their foot in the online market. If you want your business to prosperous, web development is essential.</p> <br />
                                <p>It’s time to launch your business online and making your existence by reaching to millions of web surfers. We’ll provide you with online platform in the form of website to show case your skills across the planet.</p><br />
                                <h6>Our web development services include:</h6><br />
                                <h6>Our services for the management of your accounts includes:</h6>
                                <li>PHP</li>
                                <li>WordPress</li>
                                <li>Shopify</li>
                                <li>Mern Stack Development</li>
                                <li>Python(django) Development</li>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="img/apple-w.png" alt="Technocannons/Digital-Marketing" />
                        </div>
                    </div>
                </div>
                </section>
        </div>
    )
}

export default webDevelopment
