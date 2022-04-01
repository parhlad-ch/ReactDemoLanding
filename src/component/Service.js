import React, { useState } from 'react';
import Tilt from 'react-vanilla-tilt'
import ServiceRimg from './asset/images/resource/instructor.gif'
import Background8 from './asset/images/background/1.png'
import Background9 from './asset/images/background/pattern-1.png'
import Background10 from './asset/images/background/pattern-2.png'
function Service() {
    const _tilt = {
        reverse: false,
        max: 2,
        perspective: 100,
        speed: 200,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        glare: false,
    }

    return (
        <section className="instructor-section" id="Services">
            <div className="sec-title centered">
                <h2>Our React Application Development <br /> Competencies</h2>
                <div className="text">We help business owners and entrepreneurs with dynamic web applications.
                    We employ extreme programming best practices<br /> such as code review, pair programming, test-driven development, continuous integration, and<br /> automated testing to deliver high-quality products.
                    <br />Check out how we can help you:
                </div>
            </div>
            <div className="instructor-section">
                <div className="background-layer" style={{ backgroundImage: `url(${Background8})` }}></div>
                <div className="background-layer-one" style={{ backgroundImage: `url(${Background9})` }}></div>
                <div className="background-layer-two" style={{ backgroundImage: `url(${Background10})` }}></div>
                <div className="auto-container">

                    <div className="row clearfix">
                        {/* Blocks Column */}
                        <div className="blocks-column col-lg-8 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="row clearfix">

                                    {/* Service Block */}
                                    <div className="service-block  col-lg-6 col-md-6 col-sm-12">
                                        <Tilt options={_tilt} className="form_animations">
                                            <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                <div className="border-layer"></div>
                                                <div className="icon-box">
                                                    <div className="icon flaticon-verify"><i className="fal fa-code"></i></div>
                                                </div>
                                                <h4><a href="course-detail.html">Rapid Development</a></h4>
                                                <div className="text">React enables us to reuse code for our applications with its powerful composition model. We design new and reusable components and reassemble existing ones in a variety of ways. </div>
                                            </div>
                                        </Tilt>
                                    </div>

                                    {/* Service Block */}
                                    <div className="service-block  col-lg-6 col-md-6 col-sm-12">
                                        <Tilt options={_tilt} className="form_animations">
                                            <div className="inner-box wow fadeInLeft" data-wow-delay="150ms" data-wow-duration="1500ms">
                                                <div className="border-layer"></div>
                                                <div className="icon-box">
                                                    <div className="icon flaticon-heart-box"><i className="fab fa-react"></i></div>
                                                </div>
                                                <h4><a href="course-detail.html">Custom React Libraries and UI Components</a></h4>
                                                <div className="text">We use React's component-based structure to our advantage and reuse components from buttons, checkboxes, and dropdown menus to libraries and root folders as much as possible to come up with a unique solution.
                                                </div>
                                            </div>
                                        </Tilt>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="instructor-column  col-lg-4 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <h4>360-Degree and VR Experiences Using React</h4>
                                <p>Our team of experts create 360-degree videos and virtual reality experiences for multiple platforms using React 360, a framework for creating 3D and VR user interfaces. Whether you want to offer a 360-degree tour for a travel app or create a 3D web application, we can help you create immersive experiences for your users.
                                </p>
                                <Tilt options={_tilt} className="form_animations mobile_hide">
                                    <img src={ServiceRimg} alt="" />
                                </Tilt>
                                <div className="mobile_show">
                                    <img src={ServiceRimg} alt="" />
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service
