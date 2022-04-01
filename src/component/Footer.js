import React, { useState, useEffect } from 'react'
import Logo from './asset/images/logo.png'
import { Link } from 'react-scroll';
import Background11 from './asset/images/icons/icon-1.png'
import Background12 from './asset/images/icons/icon-2.png'

function Footer() {
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
        <footer className="axil-footer footer-default theme-gradient-2 news-section ">
            <div className="color-layer"></div>
            <div className="bg_image--2">
                <div className="ft-social-icon-wrapper ax-section-gapTop">
                    <div className="auto-container">
                        <div className="icon-layer-one" style={{ backgroundImage: `url(${Background11})` }}></div>
                        <div className="icon-layer-two" style={{ backgroundImage: `url(${Background12})` }}></div>
                        <div className="icon-layer-three" style={{ backgroundImage: `url(${Background12})` }}></div>

                    </div>
                </div>
                <div className="footer-top ax-section-gap">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="footer-widget-item axil-border-right">
                                    <div className="footer_logo"><img src={Logo} alt="" title="" /></div>
                                    <p>We have extensive experience in developing enterprise level IT solutions for wide range of domains. </p>
                                    <div className="axil-newsletter">
                                        {/* Social Box */}
                                        <ul className="social-box">
                                            <li className="facebook"><a href="https://www.facebook.com/AnnexLogics/" target="_blank" className="fab fa-facebook-f"></a></li>
                                            <li className="twitter"><a href="https://twitter.com/annexlogics" target="_blank" className="fab fa-twitter"></a></li>
                                            <li className="linkedin"><a href="https://www.linkedin.com/company/annexlogics-system-pvt-ltd" target="_blank" className="fab fa-linkedin-in"></a></li>
                                            <li className="skype"><a href="skype:live:annexlogics" target="_blank" className="fab fa-skype"></a></li>
                                            <li className="instagram"><a href="https://www.instagram.com/annexlogics/" target="_blank" className="fab fa-instagram"></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="copyright copyright-default">
                    <div className="auto-container">
                        <div className="row row--0 ptb--20 axil-basic-thine-line">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="inner text-center text-md-start">
                                    <p> © 2021. All rights reserved by <a href="https://annexlogics.com/" target="_blank"> Annexlogics System Pvt. Ltd. </a> </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Link className={scroll ? "scroll-to-top scroll-to-target" : " scroll-to-target"} to="Home" spy={true} smooth={true} duration={1000} >

                <span className="fa fa-arrow-up"></span></Link>



            <section className={toggle ? 'contact-section side_fix_form form_slide' : 'contact-section side_fix_form '}>
                <div className="side_fix_form_box" >
                    <div className="btns-box">
                        <Link to="" className="theme-btn btn-style-one" onClick={toggleButton}><span className="txt">Request Callback</span>
                        </Link>
                    </div>


                    <div className="form-column ">
                        <div className="inner-column">
                            <div className="sec-title">
                                <h2> Quick Call Back </h2>
                            </div>
                            <div className="default-form">
                                <form id="call_call_form" method="post">
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </section>



        </footer>

    )
}

export default Footer
