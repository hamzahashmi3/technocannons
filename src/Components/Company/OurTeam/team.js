import React from 'react'
import {Link } from 'react-router-dom'


function about() {
    return (
        <div>
            <header className="pb-4 mb-4">

                <div className="row pb-4 contact_img mb-3">
                    <div className="container overlay_img text-center img-fluid"><br /> <br />
                        <h1 className="mx-4 float-left my-5 py-4 about_head">Our Team</h1>
                        <ul className="float-right my-5 py-4">
                            <li><Link to="/">Home</Link><i className="fa fa-home"></i></li>
                            <li><Link href="#">Our Team</Link></li>
                        </ul>
                    </div>
                </div>

            </header>


            <section>
                <div>
                    <h1 className="text-center font-weight-bold mb-5 mt-2">Meet the Team of Innovators!</h1>
                    <img src="images/top-team.png" className="img-fluid" alt="top-team" />
                </div>
            </section>

            <section className="pt-5 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="text-center m-auto">
                            <h5 className="text-info">OUR SERVICES</h5>
                            <h1>OUR LEADERSHIP TEAM</h1>
                            <p>We help businesses elevate their value through custom software development, <br />
                                product design, QA and consultancy services.</p>
                        </div>

                        <main>
                            <div className="container">
                                <div className="row pt-3 mt-1">
                                <div class="col-md-3">
                                    <Link to="/teamprofile"><img src="img/team/member1.jpg" class="img-fluid img-responsive" alt="team/member1.jpg" /></Link>
                                    {/* <!--
                                    <div class="icon-block">
                                        <i class="fa fa-instagram"></i>
                                        <i class="fa fa-linkedin"></i>
                                        <i class="fa fa-twitter"></i>
                                    </div>
            --> */}
                                    <div class="p-2 text-center team_memebers">
                                        <Link to="/teamprofile">
                                            <h3 className="text-dark">WILLIAM SMITH</h3>
                                            <p class="text-muted font-weight-light">PROJECT MANAGER</p>
                                        </Link>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <Link to="/teamprofile">
                                        <img src="img/team/member4.jpg" class="img-fluid img-responsive" alt="/member4.jpg" />
                                    </Link>
                                    {/* <!--
                                    <div class="icon-block">
                                        <a href="#" class="text-dark"><i class="fa fa-instagram p-2"></i></a>
                                        <a href="#" class="text-dark"><i class="fa fa-linkedin p-2"></i></a>
                                        <a href="#" class="text-dark"><i class="fa fa-twitter p-2"></i></a>
                                    </div>
            --> */}
                                    <div class="p-2 text-center team_memebers">
                                        <Link to="/teamprofile">
                                            <h3 className="text-dark">Robert Copper</h3>
                                            <p class="text-muted font-weight-light">CEO OF COMPANY</p>
                                        </Link>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <Link to="/teamprofile">
                                        <img src="img/team/member2.jpg" class="img-fluid img-responsive" alt="/member4.jpg" />
                                    </Link>
                                    {/* <!--
                                    <div class="icon-block">
                                        <i class="fa fa-instagram"></i>
                                        <i class="fa fa-linkedin"></i>
                                        <i class="fa fa-twitter"></i>
                                    </div>
            --> */}
                                    <div class="p-2 text-center team_memebers">
                                        <Link to="/teamprofile">
                                            <h3 className="text-dark">OLIVIA TORRES</h3>
                                            <p class="text-muted font-weight-light">CO-FOUNDER OF COMPANY</p>
                                        </Link>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <Link to="/teamprofile">
                                        <img src="img/team/member5.jpg" class="img-fluid img-responsive" alt="team/member1.jpg" />
                                    </Link>
                                    {/* <!--
                                    <div class="icon-block">
                                        <i class="fa fa-instagram"></i>
                                        <i class="fa fa-linkedin"></i>
                                        <i class="fa fa-twitter"></i>
                                    </div>
            --> */}
                                    <div class="p-2 text-center team_memebers">
                                        <Link to="/teamprofile">
                                            <h3 className="text-dark">AMILIA BRUNO</h3>
                                            <p class="text-muted font-weight-light">CTO OF COMPANY</p>
                                        </Link>
                                    </div>
                                </div>
                                 <br />
                                    

                                </div> <br /><br />
                                <div className="row my-5">
                                    <div class="col-md-3">
                                        <Link to="/teamprofile"><img src="img/team/member1.jpg" class="img-fluid img-responsive" alt="team/member1.jpg" /></Link>
                                        {/* <!--
                                        <div class="icon-block">
                                            <i class="fa fa-instagram"></i>
                                            <i class="fa fa-linkedin"></i>
                                            <i class="fa fa-twitter"></i>
                                        </div>
                --> */}
                                        <div class="p-2 text-center team_memebers">
                                            <Link to="/teamprofile">
                                                <h3 className="text-dark">WILLIAM SMITH</h3>
                                                <p class="text-muted font-weight-light">PROJECT MANAGER</p>
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <Link to="/teamprofile">
                                            <img src="img/team/member4.jpg" class="img-fluid img-responsive" alt="/member4.jpg" />
                                        </Link>
                                        {/* <!--
                                        <div class="icon-block">
                                            <a href="#" class="text-dark"><i class="fa fa-instagram p-2"></i></a>
                                            <a href="#" class="text-dark"><i class="fa fa-linkedin p-2"></i></a>
                                            <a href="#" class="text-dark"><i class="fa fa-twitter p-2"></i></a>
                                        </div>
                --> */}
                                        <div class="p-2 text-center team_memebers">
                                            <Link to="/teamprofile">
                                                <h3 className="text-dark">Robert Copper</h3>
                                                <p class="text-muted font-weight-light">CEO OF COMPANY</p>
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <Link to="/teamprofile">
                                            <img src="img/team/member2.jpg" class="img-fluid img-responsive" alt="/member4.jpg" />
                                        </Link>
                                        {/* <!--
                                        <div class="icon-block">
                                            <i class="fa fa-instagram"></i>
                                            <i class="fa fa-linkedin"></i>
                                            <i class="fa fa-twitter"></i>
                                        </div>
                --> */}
                                        <div class="p-2 text-center team_memebers">
                                            <Link to="/teamprofile">
                                                <h3 className="text-dark">OLIVIA TORRES</h3>
                                                <p class="text-muted font-weight-light">CO-FOUNDER OF COMPANY</p>
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <Link to="/teamprofile">
                                            <img src="img/team/member5.jpg" class="img-fluid img-responsive" alt="team/member1.jpg" />
                                        </Link>
                                        {/* <!--
                                        <div class="icon-block">
                                            <i class="fa fa-instagram"></i>
                                            <i class="fa fa-linkedin"></i>
                                            <i class="fa fa-twitter"></i>
                                        </div>
                --> */}
                                        <div class="p-2 text-center team_memebers">
                                            <Link to="/teamprofile">
                                                <h3 className="text-dark">AMILIA BRUNO</h3>
                                                <p class="text-muted font-weight-light">CTO OF COMPANY</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default about
 