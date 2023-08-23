import React from 'react';
import "./HowToParticipate.css";
import registered_img from '../img/registered_img.png';
import lightbulb_img from '../img/lightbulb_img.png';
import human_img from '../img/human_img.png';
import attend_bootcamp_img from '../img/attend_bootcamp_img.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1200, min: 800 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 800, min: 600 },
        items: 1,
    },
    mobileSmall: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
    }
};

function HowToParticipate() {
    return (
        <>
            {
                window.innerWidth > 1024 ?
                    <div className="olympiad_participate">
                        <h1 className="olympiad_participate_title">How to Participate?</h1>
                        <div className="participate_box">
                            <div className="participate_item">
                                <img src={registered_img} className="registered_img" alt="registered img" />
                                <p className="participate_item_text">Register</p>
                                <div className="step_circle">1</div>
                            </div>
                            <div className="participate_item">
                                <img src={attend_bootcamp_img} className="attend_bootcamp_img" alt="lightbulb img" />
                                <p className="participate_item_text">Attend Bootcamp</p>
                                <div className="step_circle">2</div>
                            </div>
                            <div className="participate_item">
                                <img src={human_img} className="human_img" alt="human img" />
                                <p className="participate_item_text">Build Team</p>
                                <div className="step_circle">3</div>
                            </div>
                            <div className="participate_item">
                                <img src={lightbulb_img} className="lightbulb_img" alt="Attend Bootcamp img" />
                                <p className="participate_item_text">Submit Project</p>
                                <div className="step_circle">4</div>
                            </div>
                        </div>
                    </div> :
                    <div className="olympiad_participate">
                        <h1 className="olympiad_participate_title">How to Participate?</h1>
                        <div className="participate_box">
                            <Carousel
                                swipeable={true}
                                draggable={true}
                                showDots={true}
                                responsive={responsive}
                                infinite={true}
                                autoPlay={false}
                                autoPlaySpeed={2500}
                                arrows={false}
                                className="video-testimonials-carousel"
                            >
                                <div className="participate_item">
                                    <img src={registered_img} className="registered_img" alt="registered img" />
                                    <p className="participate_item_text">Register</p>
                                    <div className="step_circle">1</div>
                                </div>
                                <div className="participate_item">
                                    <img src={attend_bootcamp_img} className="attend_bootcamp_img" alt="lightbulb img" />
                                    <p className="participate_item_text">Attend Bootcamp</p>
                                    <div className="step_circle">2</div>
                                </div>
                                <div className="participate_item">
                                    <img src={human_img} className="human_img" alt="human img" />
                                    <p className="participate_item_text">Build Team</p>
                                    <div className="step_circle">3</div>
                                </div>
                                <div className="participate_item">
                                    <img src={lightbulb_img} className="lightbulb_img" alt="Attend Bootcamp img" />
                                    <p className="participate_item_text">Submit Project</p>
                                    <div className="step_circle">4</div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
            }
        </>
    )
}

export default HowToParticipate;