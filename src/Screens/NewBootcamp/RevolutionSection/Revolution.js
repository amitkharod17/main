import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "./Revolution.css";
import pic1 from '../../YoungInnovators/img/join1.png';
import pic2 from '../../YoungInnovators/img/join2.png';
import pic3 from '../../YoungInnovators/img/join3.png';
import pic from '../../YoungInnovators/img/join.png';
import picMini from '../../YoungInnovators/img/joinMini.png';
import join_bg from '../img/join_bg.png';
import join_rectangle_img from "../img/join_rectangle_img.png";
import join_bg_crop from "../img/join_bg_crop.png";

import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Join() {
    const background = window.innerWidth > 630 ? pic : picMini;
    const styles = {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center"
    }
    return (
        <div className="revolution_container">
            <img className="rev_top_img" src={join_rectangle_img} alt="" />
            <div className="rev_diagonal"></div>
            <div className="rev_text">
                <div>
                    <h2 className="rev_title">Join the Rancho Revolution</h2>
                    <div className="rev_content">
                        <div>
                            <div className="rev_content_item">
                                <LazyLoadImage className="rev_left_icon" src={pic1} alt="yip" />
                                <div>
                                    <h3 className="rev_num">
                                        <CountUp end={50000}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>+
                                    </h3>
                                    <p className="rev_pm">Hours of sessions conducted</p>
                                </div>
                            </div>
                            <div className="rev_content_item">
                                <LazyLoadImage className="rev_left_icon" src={pic2} alt="yip" />
                                <div>
                                    <h3 className="rev_num">
                                        <CountUp end={15000}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>+
                                    </h3>
                                    <p className="rev_pm">Students trained</p>
                                </div>
                            </div>
                            <div className="rev_content_item">
                                <LazyLoadImage className="rev_left_icon" src={pic3} alt="yip" />
                                <div>
                                    <h3 className="rev_num">
                                        <CountUp end={250}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>+</h3>
                                    <p className="rev_pm">Innovations developed</p>
                                </div>
                            </div>
                        </div>
                        <div className="rev_content_right">
                           { window.innerWidth < 600 ?
                            <img src={join_bg_crop} className="join_bg" alt="revolution img" />:
                            <img src={join_bg} className="join_bg" alt="revolution img" />
                           }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
