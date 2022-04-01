import React from 'react'
import DevopmentImg from './asset/images/resource/devopment.gif'
import ProjectImg from './asset/images/icons/project-initiation.svg'
import AnalysisImg from './asset/images/icons/analysis.svg'

function ProcessService() {
    return (
        <section className="fantasy_area process_service" id="Process">
            <div className="auto-container">
                <div className="sec-title centered">
                    <h2>Scrape off Hurdles – React JS <br /> Development Process</h2>
                    <div className="text mb-5">Annexlogic's React Development Team understands your tight deadlines and works at breakneck <br /> speed to make your business ideas a reality in no time.
                    </div>
                </div>
                <div className="row fantasy_inner mt-5 align-items-center">
                    <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="devopment_img"><img src={DevopmentImg} alt="Devopment Images" /> </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 fantasy_items">
                        <div className="col-md-12" >
                            <div className="fantasy fantasy-circle-style purple-hover">
                                <div class="dot-circle">
                                    <div class="effect-circle"></div>
                                    <div class="main-circle">
                                        <div class="circle-bg">
                                            <i class="fad fa-business-time"></i>
                                        </div>
                                    </div>
                                </div>
                                <a href="javascript:void(0)">Business Consultation</a>
                                <p>Sign up for a quick business consultation via phone, Skype, or email. Our representatives will be readily available to discuss your needs and help you with the best solution accordingly.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-12" data-wow-delay="0.2s" >
                            <div className="fantasy fantasy-circle-style green-hover">
                                <div class="dot-circle">
                                    <div class="effect-circle"></div>
                                    <div class="main-circle">
                                        <div class="circle-bg">
                                            <img src={ProjectImg} alt="" />
                                        </div>
                                    </div>
                                </div>

                                <a href="javascript:void(0)">Project Initiation</a>
                                <p>Discuss cost structures, add project goals, set budget and time milestones, and watch our team spring into action for your project.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 fantasy_items">
                        <div className="col-md-12" data-wow-delay="0.6s" >
                            <div className="fantasy fantasy-circle-style green-hover">
                                <div class="dot-circle">
                                    <div class="effect-circle"></div>
                                    <div class="main-circle">
                                        <div class="circle-bg">
                                            <img src={AnalysisImg} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <a href="javascript:void(0)">Project Analysis</a>
                                <p>Describe your requirements and project objectives in detail. Our experts will first examine the scope of your project and create a clear blueprint accordingly.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-12" data-wow-delay="0.4s" >
                            <div className="fantasy fantasy-circle-style purple-hover">
                                <div class="dot-circle">
                                    <div class="effect-circle"></div>
                                    <div class="main-circle">
                                        <div class="circle-bg">
                                            <i class="fal fa-truck-loading"></i>
                                        </div>
                                    </div>
                                </div>
                                <a href="javascript:void(0)">Execution and Delivery</a>
                                <p>Work with a team of experienced ReactJS Developers led by a highly skilled and adept Project Manager. Watch your ideas take shape with best-in-class builds.
                                    Create Native Web Apps With Us
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProcessService
