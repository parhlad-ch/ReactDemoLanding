import React, { useState } from 'react';
import Background4 from './asset/images/main-slider/pattern-2.png'
import Background7 from './asset/images/icons/icon-4.png'
import IconRedux from './asset/images/icons/redux_icon.svg'
import IconReduxHover from './asset/images/icons/redux_icon_hover.svg'
import AxiosIcon from './asset/images/icons/axios_icon.svg'
import AxiosIconHover from './asset/images/icons/axios_icon_hover.svg'
import ApolloIcon from './asset/images/icons/apollo-icon.svg'
import ApolloIconHover from './asset/images/icons/apollo-icon-2.svg'
import RestIcon from './asset/images/icons/rest-api.svg'
import RestIconHover from './asset/images/icons/rest-api-2.svg'
import GraphqlIcon from './asset/images/icons/graphql-icon.svg'
import GraphqlIconHover from './asset/images/icons/graphql-icon-2.svg'
import BabelIcon from './asset/images/icons/babel_icon.svg'
import BabelIconHover from './asset/images/icons/babel_icon_2.svg'
import NextJsIcon from './asset/images/icons/next_js_icon.svg'
import NextJsIconHover from './asset/images/icons/next_js_icon_2.svg'

function ServicesTechnology() {
    return (
        <section className="featured-section">
            <div className="icon-layer-two" style={{ backgroundImage: `url(${Background4})` }}></div>
            <div className="icon-layer-five" style={{ backgroundImage: `url(${Background7})` }}></div>
            <div className="auto-container">
                <div className="sec-title centered">
                    <h2>The Best Technology Stack</h2>
                    <div className="text">

                        Wondering which technology is best for your project?
                        Well, worry not!
                        Our team of experts will assist you in making the best decision.<br /> Meanwhile, take a look at our software suite below:
                        Bid adieu to hide-bound applications and the<br /> anguish that accompanied their development.

                    </div>
                </div>
                <div className="row clearfix">

                    <div className="feature-block col-lg-3 col-md-4 col-6">
                        <div className="inner-box " >
                            <a href="javascript:void(0)" className="overlay-link"></a>
                            <div className="icon-box">
                                <span className="icon flaticon-smartphone">
                                    <i className="fab fa-react"></i>
                                </span>
                            </div>
                            <h5>React</h5>
                        </div>
                    </div>

                    <div className="feature-block col-lg-3 col-md-4 col-6">
                        <div className="inner-box inner-box-two ">
                            <a href="javascript:void(0)" className="overlay-link"></a>
                            <div className="icon-box">
                                <span className="icon flaticon-data off-hover"><img src={IconRedux} alt="icon"></img></span>
                                <span className="icon flaticon-data on-hover"><img src={IconReduxHover} alt="icon"></img></span>
                            </div>
                            <h5>Redux</h5>
                        </div>
                    </div>

                    <div className="feature-block col-lg-3 col-md-4 col-6">
                        <div className="inner-box inner-box-three">
                            <a href="javascript:void(0)" className="overlay-link"></a>
                            <div className="icon-box">
                                <span className="icon flaticon-data axios off-hover"><img src={AxiosIcon} alt="icon"></img></span>
                                <span className="icon flaticon-data axios on-hover"><img src={AxiosIconHover} alt="icon"></img></span>
                            </div>
                            <h5>Axios</h5>
                        </div>
                    </div>
                    <div className="feature-block col-lg-3 col-md-4 col-6">
                        <div className="inner-box inner-box-four" >
                            <a href="javascript:void(0)" className="overlay-link"></a>
                            <div className="icon-box">
                                <span className="icon flaticon-data  off-hover"><img src={ApolloIcon} alt="icon"></img></span>
                                <span className="icon flaticon-data  on-hover"><img src={ApolloIconHover} alt="icon"></img></span>
                            </div>
                            <h5>Apollo</h5>
                        </div>
                    </div>

                    <div className="feature-block col-lg-3 col-md-4 col-6">
                        <div className="inner-box inner-box-five">
                            <a href="javascript:void(0)" className="overlay-link"></a>
                            <div className="icon-box">
                                <span className="icon flaticon-data  off-hover"><img src={RestIcon} alt="icon"></img></span>
                                <span className="icon flaticon-data  on-hover"><img src={RestIconHover} alt="icon"></img></span>
                            </div>
                            <h5>Rest API</h5>
                        </div>
                    </div>
                    <div className="feature-block col-lg-3 col-md-4 col-6">
                        <div className="inner-box inner-box-six" >
                            <a href="javascript:void(0)" className="overlay-link"></a>
                            <div className="icon-box">
                                <span className="icon flaticon-data  off-hover"><img src={GraphqlIcon} alt="icon"></img></span>
                                <span className="icon flaticon-data  on-hover"><img src={GraphqlIconHover} alt="icon"></img></span>
                            </div>
                            <h5>GraphQL</h5>
                        </div>
                    </div>
                    <div className="feature-block col-lg-3 col-md-4 col-6">
                        <div className="inner-box inner-box-seven" >
                            <a href="javascript:void(0)" className="overlay-link"></a>
                            <div className="icon-box">
                                <span className="icon flaticon-data  off-hover"><img src={BabelIcon} alt="icon"></img></span>
                                <span className="icon flaticon-data  on-hover"><img src={BabelIconHover} alt="icon"></img></span>
                            </div>
                            <h5>Babel</h5>
                        </div>
                    </div>

                    <div className="feature-block col-lg-3 col-md-4 col-6">
                        <div className="inner-box inner-box-eight">
                            <a href="javascript:void(0)" className="overlay-link"></a>
                            <div className="icon-box">
                                <span className="icon flaticon-data  off-hover"><img src={NextJsIcon} alt="icon"></img></span>
                                <span className="icon flaticon-data  on-hover"><img src={NextJsIconHover} alt="icon"></img></span>
                            </div>
                            <h5>Next.js</h5>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default ServicesTechnology
