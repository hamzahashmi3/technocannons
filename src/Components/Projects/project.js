import React from 'react'
import './project.css'


function project() {
    return (
        <div>
             <section>
                <main className="my-5">
                    <p className="font-weight-bold text-center text-info">LATEST CASE STUDIES</p>
                    <h1 className="font-weight-bold text-center mb-3 my-1">Introduce Our Projects</h1>
                    <p className="font-weight-bold text-center">Software development outsourcing is just a tool to achieve business goals. But there is no way <br />
                        to get worthwhile results without cooperation and trust between a client company.</p>

                    <div className="container my-5">
                        <div className="row ">
                            <div className="col-sm-4">
                                <div className="wrapper">
                                    <div className="card">
                                        <img src="img/fun-fact2.jpg" className="img-fluid img-responsive hover-zoom" alt="technocannons projects" />
                                        <div className="info">
                                            <h1 className="text-left">Bonanza Textiles</h1>
                                            <p className="text-left">Web Development</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="wrapper">
                                    <div className="card">
                                        <img src="img/Web-design-1.jpg" className="img-fluid hover-zoom img-responsive" alt="technocannons projects" />
                                        <div className="info">
                                            <h1 className="text-left">Bonanza Textiles</h1>
                                            <p className="text-left">Web Development</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="wrapper">
                                    <div className="card">
                                        <img src="img/fun-fact2.jpg" className="img-fluid img-responsive hover-zoom" alt="technocannons projects" />
                                        <div className="info">
                                            <h1 className="text-left">Bonanza Textiles</h1>
                                            <p className="text-left">Web Development</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </main>
            </section>
        </div>
    )
}

export default project
