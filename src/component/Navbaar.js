import React, { useState, useEffect } from 'react';
import Logo from './asset/images/logo.png'
import { Link } from 'react-scroll';

import Hamburger from './asset/images/icons/hamburger.svg'

function Navbaar() {
    const [scroll, setScroll] = useState(false);
    const [toggle, setToggle] = useState(false)
    function toggleButton() {
        if (toggle) { }
        setToggle(!toggle)
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 2);
        });
    }, []);

    return (

        <header className={scroll ? "main-header header-style-two   fixed-header" : "main-header header-style-two"}>
            <div className={toggle ? 'mobile-menu-visible header-upper' : 'header-upper sticky-header'}>
                <div className="outer-container clearfix">
                    <div className="row align-items-center">
                        <div className="logo-box col-lg-4 col-md-3 col-sm-3 col-9 ">
                            <div className="logo"><a href="javascript:void(0)"><img src={Logo} alt="" title="" /></a></div>
                        </div>
                        <div className="col-xl-4 col-lg-8 col-md-9 col-sm-9 col-3">
                            <div className="nav-outer clearfix ">
                                <div className="mobile-nav-toggler" onClick={toggleButton}><img src={Hamburger} art="Hamburger Icon" /></div>
                                <nav className="main-menu navbar-expand-md">
                                    <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                                        <ul className="navigation clearfix">
                                            <li><Link to="Home" spy={true} smooth={true} duration={1000} >Home </Link></li>
                                            <li><Link to="Services" spy={true} smooth={true} duration={1000} >Services </Link></li>
                                            <li><Link to="Process" spy={true} smooth={true} duration={1000} >Process </Link></li>
                                            <li><Link to="About_Us" spy={true} smooth={true} duration={1000} >About Us </Link></li>
                                            <li><a href="https://annexlogics.com/blog">Blog </a></li>
                                            <li><Link to="Contact_Us" spy={true} smooth={true} duration={1000}  >Contact Us </Link></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-3 col-sm-3 topbaar_right_box">
                            <ul className="topbaar_right">
                                <li><a href="mailto:info@annexlogics.com"><i class="fal fa-envelope-open"></i> info@annexlogics.com </a> </li>
                                <li><a href="tel:+919462908999"> <i class="fal fa-mobile-android"></i> +91-946-290-8999 </a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mobile-menu">
                    <div className="menu-backdrop"></div>
                    <div className="close-btn" onClick={toggleButton}><i class="fal fa-times"></i></div>
                    <nav className="menu-box">
                        <div className="nav-logo"><a href="javascript:void(0)"><img src={Logo} alt="" title="" /></a></div>
                        <div className="menu-outer">
                            <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                                <ul className="navigation clearfix">
                                    <li><Link to="Home" spy={true} smooth={true} duration={1000} onClick={toggleButton}>Home </Link></li>
                                    <li><Link to="Services" spy={true} smooth={true} duration={1000} onClick={toggleButton}>Services </Link></li>
                                    <li><Link to="Process" spy={true} smooth={true} duration={1000} onClick={toggleButton}>Process </Link></li>
                                    <li><Link to="About_Us" spy={true} smooth={true} duration={1000} onClick={toggleButton}>About Us </Link></li>
                                    <li><Link to="Contact_Us" spy={true} smooth={true} duration={1000} onClick={toggleButton} >Contact Us </Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>



        </header>
    )
}

export default Navbaar
