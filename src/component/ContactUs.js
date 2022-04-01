import React from 'react'
import Tilt from 'react-vanilla-tilt'

import Background from './asset/images/background/pattern-15.png'
import Background2 from './asset/images/main-slider/icon-2.png'
import Background3 from './asset/images/main-slider/pattern-1.png'
import Background4 from './asset/images/main-slider/pattern-2.png'
import Background5 from './asset/images/main-slider/icon-1.png'
import Background6 from './asset/images/icons/icon-3.png'
import Background7 from './asset/images/icons/icon-4.png'
import ServiceRimg from './asset/images/resource/instructor.gif'
import { Link } from 'react-scroll'


function ContactUs() {
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
        <section className="banner-section-two section-with-us" id="About_Us">
            <div className="auto-container">
                <div className="pattern-layer-two" style={{ backgroundImage: `url(${Background})` }}></div>
                <div className="pattern-layer-three" style={{ backgroundImage: `url(${Background2})` }}></div>
                <div className="row clearfix align-items-center">

                    {/* Content Column */}
                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="pattern-layer-one" style={{ backgroundImage: `url(${Background3})` }}></div>
                        <div className="icon-layer-one" style={{ backgroundImage: `url(${Background2})` }}></div>
                        <div className="icon-layer-three" style={{ backgroundImage: `url(${Background5})` }}></div>
                        <div className="icon-layer-four" style={{ backgroundImage: `url(${Background6})` }}></div>


                        <div className="inner-column">
                            <h2>Create a New React App With Us</h2>
                            <div className="btns-box">
                                <Link to="Contact_Us" className="theme-btn btn-style-one" spy={true} smooth={true} duration={1000}><span className="txt">Tell us about your
                                    project</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div class="circle-layer"></div>
                        </div>
                        <div className="icon-layer-two" style={{ backgroundImage: `url(${Background4})` }}></div>
                        <div className="icon-layer-five" style={{ backgroundImage: `url(${Background7})` }}></div>
                        <Tilt options={_tilt} className="form_animations mobile_hide">
                            <img src={ServiceRimg} alt="" className="img-fluid" />
                        </Tilt>
                        <div className="mobile_show">
                            <img src={ServiceRimg} alt="" className="img-fluid" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactUs
