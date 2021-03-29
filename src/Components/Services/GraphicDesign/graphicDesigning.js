import React from 'react'
import './about.css'


function graphicDesigning() {
    return (
        <div>
            <header className="pb-4 bg-white">
                <div className="row pb-4 contact_img mb-3">
                    <div className="container overlay_img text-center img-fluid"><br /> <br />
                        <h1 className="mx-4 float-left my-5 py-4 about_head">GRAPHIC DESIGNING</h1>
                        <ul className="float-right my-5 py-4">
                            <li><a href="#">Home</a><i className="fa fa-home"></i></li>
                            <li><a href="#">Services</a></li>
                            <li>Graphic Designing</li>
                        </ul>
                    </div>
                </div>

            </header>


            <section className="py-5 bg-white">

                <div className="container">
                    <div className="row mb-5">

                        <div className="col-md-7">
                            <h1 className=""> Your Partner for Graphics Innovation</h1>
                            <p className="font-weight-light py-4">We are crowded with 7 billion people around us we need help on occasions especially communicating our business ideas with others. So, we graphic designers are artists who use available form of digital and analog media to create effective designs using best typography, color scheme, creativity & illustration for you that can become a primary source for communicating your idea to rest of the world. Basically, our Graphic designing services are helping people to get their ideas across to other people in a very low cost. Actual purpose is to gain your trust by providing you with extraordinary designs. Our expert designers are playing transformative role and trying to make sense of what is being said and then present this information in visual ways that can ultimately turn you into a brand.<br /></p>

                        </div>
                        <div className="col-md-5">
                            <img src="img/banners-16.png" className="img4 img-fluid image_4 im-4" alt="banners-16.png" />
                        </div>
                    </div>
                </div>


                <main className="pt-5 mt-5">
                    <div className="container">
                        <h1 className="text-center">We specialize & help our clients in</h1>
                        <div className="row">
                            <div className="col-md-4 pt-2 mt-5 text-right">
                                <h4 className="py-2">Social media kit</h4>
                                <h4 className="py-2">Logo Design</h4>
                                <h4 className="py-2">Branding</h4>
                                <h4 className="py-2">Social media post/ad design</h4>
                                <h4 className="py-2">Stationary design</h4>
                                <h4 className="py-2">Products packaging design</h4>
                                <h4 className="py-2">Infographic design</h4>
                            </div>
                            <div className="col-md-4">
                                <img src="img/app-watch-1.jpg" className="img-fluid bg-dark" alt="app-watch-1" />
                            </div>
                            <div className="col-md-4 mt-5 pt-2 text-left">
                                <h4 className="py-2">Banners design</h4>
                                <h4 className="py-2">Poster/Flyers/Brochure design</h4>
                                <h4 className="py-2">Business card designing</h4>
                                <h4 className="py-2">Illustration Designs</h4>
                                <h4 className="py-2">App UI Design</h4>
                                <h4 className="py-2">Web UI design</h4>
                                <h4 className="py-2">Company Profile design</h4>
                            </div>
                        </div>
                    </div>
                </main>



                <main className="mt-3 pt-3 mb-5">
                    <div className="row bg-light">
                        <div className="col-md-3">
                            <img src="img/fun-fact1.jpg" className="img-fluid img-responsive" alt="fun-fact1" />
                        </div>
                        <div className="col-md-3 text-center py-4">
                            <div className="container">
                                <h1 className="text-info">15<span>+</span></h1>
                                <h2 className="font-weight-bold">Countries Worldwide</h2>
                                <p className="font-weight-light">To succeed, every software solution must be deeply integrated into the existing tech environment...</p>
                                <a href="#" className="text-info arrow"> <i className="fa fa-arrow-right mx-2"></i>Learn more</a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <img src="img/fun-fact2.jpg" className="img-fluid img-responsive" alt="fun-fact2" />
                        </div>
                        <div className="col-md-3 text-center py-4">
                            <div className="container">
                                <h1 className="text-info">2.5<span>K</span></h1>
                                <h2 className="font-weight-bold">HAPPY CUSTOMERS</h2>
                                <p className="font-weight-light">To succeed, every software solution must be deeply integrated into the existing tech environment...</p>
                                <a href="#" className="text-info arrow"> <i className="fa fa-arrow-right mx-2"></i>Learn more</a>
                            </div>
                        </div>
                    </div>
                </main>

            </section>

        </div>
    )
}

export default graphicDesigning
