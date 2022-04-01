import React, { useState } from 'react';

import Background from './asset/images/background/pattern-15.png'
import Background2 from './asset/images/main-slider/icon-2.png'
import Background3 from './asset/images/main-slider/pattern-1.png'
import Background4 from './asset/images/main-slider/pattern-2.png'
import Background5 from './asset/images/main-slider/icon-1.png'
import Background6 from './asset/images/icons/icon-3.png'
import Background7 from './asset/images/icons/icon-4.png'
import { Link } from 'react-scroll';

function Banner() {

    return (
        <section className="banner-section-two" id="Home">
            <div className="auto-container">
                <div className="pattern-layer-two" style={{ backgroundImage: `url(${Background})` }}></div>
                <div className="pattern-layer-three" style={{ backgroundImage: `url(${Background2})` }}></div>
                <div className="row clearfix clearfix_mobile">

                    {/* Content Column */}
                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="pattern-layer-one" style={{ backgroundImage: `url(${Background3})` }}></div>
                        <div className="icon-layer-one" style={{ backgroundImage: `url(${Background2})` }}></div>
                        <div className="icon-layer-three" style={{ backgroundImage: `url(${Background5})` }}></div>
                        <div className="icon-layer-four" style={{ backgroundImage: `url(${Background6})` }}></div>
                        <div className="inner-column ">
                            <h1>React JS <br /> Development Services</h1>
                            <p>React is an excellent front-end solution for developing visually appealing web user interfaces while ensuring high performance. React js is built on a component-based architecture, allowing to reuse codes and create component libraries, which significantly reduces the amount of time and money while simplifying and speeding up the development process.
                                <br />
                                <br />
                                Annexlogics is recognized as one of India's leading web development firms with expertise in building high-performance React js web applications. We have a core team of React js developers capable of creating robust web applications that allow for seamless SEO integration, simple migration, and quick debugging.
                                <br />
                                <br />
                                As a React js development company, we focus on making the most of this web development technology. We use React js to create dynamic web pages, social media platforms, and other web applications. We take pride in developing world-class applications that meet the needs and specifications of our clients.
                                <br />
                                <br />
                                Our clients appreciate our front-end and back-end development services, as well as our ability to design high-quality interactive user interfaces.
                                <br />
                                <br />
                                The More Interactive Your User Interfaces Are, The Happier Your Customers Will Be.
                            </p>
                            <div className="btns-box">
                                <Link className="theme-btn btn-style-one" to="Contact_Us" spy={true} smooth={true} duration={1000}><span className="txt">Build a project with
                                    us</span></Link>
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

                        <div className="contact-form-wrapper">
                            <div className="axil-contact-form contact-form-style-1">
                                <h3 className="title">Quick Enquiry Form</h3>
                                <form id="my_form2" method="post">
                                    {/* <div className={clicked === 'name' ? 'form-group focused' : 'form-group'} onClick={() =>
                                        handleClick('name')}>
                                        <input type="text" required />
                                        <label>Name *</label>
                                        <span className="focus-border"></span>
                                    </div>
                                    <div className={clicked === 'email' ? 'form-group focused' : 'form-group'} onClick={() =>
                                        handleClick('email')}>
                                        <input type="email" required />
                                        <label>Email *</label>
                                        <span className="focus-border"></span>
                                    </div>
                                    <div className={clicked === 'phone' ? 'form-group focused' : 'form-group'} onClick={() =>
                                        handleClick('phone')}>
                                        <input type="text" required />
                                        <label>Phone *</label>
                                        <span className="focus-border"></span>
                                    </div>
                                    <div className={clicked === 'subject' ? 'form-group focused' : 'form-group'} onClick={() =>
                                        handleClick('subject')}>
                                        <input type="text" required />
                                        <label>Subject *</label>
                                        <span className="focus-border"></span>
                                    </div>
                                    <div className={clicked === 'country' ? 'form-group focused' : 'form-group'} onClick={() =>
                                        handleClick('country')}>
                                        <select required>
                                            {countries.map((data, index) => {
                                                return <option value={data}>{data}</option>
                                            })}
                                        </select>
                                        <label>Country *</label>
                                        <span className="focus-border"></span>
                                    </div>
                                    <div className={clicked === 'enquiry' ? 'form-group focused' : 'form-group'} onClick={() =>
                                        handleClick('enquiry')}>
                                        <textarea required>
                                        </textarea>
                                        <label>Enquiry *</label>
                                        <span className="focus-border"></span>
                                    </div>
                                    <div className="form-group">
                                        <div className="btns-box">
                                            <button type="submit" className="theme-btn btn-style-one">
                                                <span className="txt">Submit</span></button>
                                        </div>
                                    </div> */}
                                </form>
                                <div className="callto-action-wrapper text-center">
                                    <span className="text">Or call us now</span>
                                    <span><i className="fas fa-phone-alt"></i> <a href="tel:+919462908999">+91-946-290-8999</a></span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Banner
