import React, { useState } from 'react';
import Background12 from './asset/images/icons/icon-1.png'
import Background11 from './asset/images/icons/icon-1.png'

import Background14 from './asset/images/background/pattern-19.png'
import Background15 from './asset/images/background/pattern-1.png'
import ContactImg from './asset/images/resource/contact.png'





function Contact() {

    return (
        <section className="contact-section" id="Contact_Us">
            {/* Contact Section  */}
            <div className="pattern-layer" style={{ backgroundImage: `url(${Background14})` }}></div>
            <div className="pattern-layer-two" style={{ backgroundImage: `url(${Background15})` }}></div>
            <div className="icon-layer-two" style={{ backgroundImage: `url(${Background12})` }} ></div>
            <div className="icon-layer-three" style={{ backgroundImage: `url(${Background12})` }}></div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="info-column col-lg-4 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="icon-layer" style={{ backgroundImage: `url(${Background12})` }}></div>
                            <div className="image">
                                <img src={ContactImg} alt="" />
                            </div>
                            <ul className="contact-list">
                                <li>
                                    <i className="fal fa-map-marker"></i>
                                    <span>175, Ashram Marg, Infront of Yes Bank, Nemi Nagar, Vaishali Nagar, Jaipur, Rajasthan 302021</span>
                                </li>
                                <li>
                                    <i className="fal fa-mobile-android"></i>
                                    <a href="tel:+919462908999">+91-946-290-8999</a>
                                </li>
                                <li>
                                    <i className="fal fa-envelope-open"></i>
                                    <a href="mailto:info@annexlogics.com">info@annexlogics.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="form-column col-lg-8 col-md-12 col-sm-12 form_z">
                        <div className="inner-column">
                            <div className="color-layer"></div>

                            <div className="sec-title">
                                <h2> Tell Us About  Your Project </h2>
                            </div>

                            <div className="default-form">
                                <form id="my_form" method="post">
                                    {/* <div className="row clearfix">
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                            <input type="text" name="username" placeholder="First Name *" required />
                                        </div>

                                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                            <input type="text" name="lastname" placeholder="Last Name *" required />
                                        </div>
                                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                            <input type="email" name="email" placeholder="Email *" required />
                                        </div>
                                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                            <input type="text" name="lastname" placeholder="Subject *" required />
                                        </div>
                                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                            <select required>
                                                {countriesBottom.map((data, index) => {
                                                    return <option value={data}>{data}</option>
                                                })}
                                            </select>
                                        </div>


                                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                            <textarea placeholder="Enquiry *"></textarea>
                                        </div>

                                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                            <button type="submit" className="theme-btn btn-style-one"><span className="txt">Submit</span></button>
                                        </div>
                                    </div> */}
                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* End Contact Section  */}
        </section>

    )
}

export default Contact
