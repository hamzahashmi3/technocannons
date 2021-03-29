import React from 'react';
import './contact.css';


function ContactUs() {
    return (
        <div>
            <section>
       
                <main className="mt-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 mt-5 pt-3">
                                <h1 class="font-weight-bold">Contact us</h1>
                                <p class="text-muted font-weight-light">Give us a call or drop by anytime, we endeavor to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.</p>
                                <div class="col-md-6">
                                    <h4>Our Address:</h4>
                                    <p>UM-51 Zanaib Tower, Model Town Link Road, Lahore, Pakistan</p>
                                </div>
                                <div class="col-md-6">
                                    <h4>Our Mailbox:</h4>
                                    <p>info@technocannons@gmail.com</p>
                                </div>
                                <div class="col-md-6">
                                    <h4>Our Phone:</h4>
                                    <p>+92302 9424089</p>
                                </div>
                            </div>
                            
                            <div class="col-md-6 mt-2 right-box">
                                <div class="container">
                                <h1 class="font-weight-bold">Ready to Get Started?</h1>
                                <p>Your email will not be published. Required fields are marked *</p><br />
                                <form action="" class="form-group border-none">
                                    <input type="text" placeholder="Your Name *" class="w-100 p-2 mb-4 text-muted"/> 
                                    <input type="text" placeholder="Your Email *" class="w-100 p-2 text-muted"/>
                                    <textarea name="" id="" cols="62" rows="5" placeholder="Message..." class="w-100 p-2 mt-4"></textarea> <br />
                                    <button class="btn btn-outline-light rounded-0 p-2 my-3 font-weight-bold">SEND MESSAGE</button>
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                
            </section>
            
            
            <section class="mt-5 pt-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.103625486853!2d74.31423981451331!3d31.466335481387507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391906abc20eb461%3A0x7dbbf63882d580b!2sZainab%20Tower%2C%20Model%20Town%20Link%20Rd%2C%20Phase%203%20GECH%20Society%2C%20Lahore%2C%20Punjab%2054600%2C%20Pakistan!5e0!3m2!1sen!2s!4v1616097704049!5m2!1sen!2s" width="100%" height="500" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
            </section>

   </div>
    )
}

export default ContactUs
